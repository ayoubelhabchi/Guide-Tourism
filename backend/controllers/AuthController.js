const User = require("../models/User");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const {verifyEmail,ResetPasswordEmail,} = require("../middlewares/emailValidator");



exports.createUser = async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      address,
      phone,
      password,
      age,
      country,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    try {
      const newUser = new User({
        firstName,
        lastName,
        email,
        address,
        phone,
        password,
        age,
        country,
      });
      const token = JWT.sign({ userid: newUser._id }, "GAHDYSB", {
        expiresIn: "1h",
      });
      newUser.confirmationToken = token;
      await newUser.save();
      const link = `http://localhost:4000/api/auth/register/confirm/${token}`;
      await verifyEmail(email, link, newUser.firstName);
      res.status(200).json({ message: "Registred successfuly"});
    } catch (error) {
      res.status(500).json(error);
    }
};


exports.login = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (!user) {
          return res.status(404).json({ error: 'Email not found' });
      }

      const passCheck = await bcrypt.compare(password, user.password);
      if (!passCheck) {
          return res.status(401).json({ message: 'Authentication failed' }); 
      }
      const token = JWT.sign({userid: user._id}, 'GAHDYSB', {expiresIn: '1h'})
      res.status(200).json({ message: 'Logged in',token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.emailConfirm = async (req, res) => {
  try {
    const userToken = await User.findOne({
      confirmationToken: req.params.token,
    });
    if (!userToken) {
      return res.status(404).json({ message: "Token not found" });
    }

    await User.updateOne(
      { _id: userToken._id },
      { $set: { isConfirmed: true }, $unset: { confirmationToken: 1 } }
    );
    res.redirect(`http://localhost:5173/email-confirmation`);
  } catch (error) {
    res.status(500).json(error);
  }
};

function generateToken() {
  return JWT.sign({}, "GAHDYSB", { expiresIn: "1h" });
}

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = generateToken();
    user.forgotPasswordToken = token;

    await user.save();

    const link = `http://localhost:5173/rest-password/${token}`;
    await ResetPasswordEmail(email, link, user.firstName);

    res.status(200).json({ message: "Please Check Your INBOX Mail" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.restPassword = async (req, res) => {
  const token = req.params.token;
  const newPassword = req.body.password;
  try {
    const user = await User.findOne({ forgotPasswordToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid or expired token" });
    }
    user.password = newPassword;
    user.forgotPasswordToken = null;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
    console.log("done");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
