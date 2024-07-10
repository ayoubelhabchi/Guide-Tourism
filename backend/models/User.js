  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const bcrypt = require('bcryptjs')

  const userSchema = new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      address: { type: String, required: true },
      phone: { type: String, required: true },
      password: { type: String, required: true },
      age: { type: Number, required: true },
      country: { type: String, required: true },
      role: { type: String, enum: ['user', 'guide'], default: 'user' },
      forgotPasswordToken: { type: String, default: null },
      isConfirmed: { type: Boolean, default: false },
      confirmationToken: { type: String, default: null }
  },{
      toJSON: {
        transform: function(doc,ret){
          // delete ret._id
          delete ret.date
          delete ret.password
          delete ret.__v
          delete ret.forgotPasswordToken
          delete ret.isConfirmed
          delete ret.confirmationToken
        }}
    });

    //hashing password
  userSchema.pre('save', function(next) {
      if(this.isModified('password')){
          bcrypt.hash(this.password,10,(error,hash) => {
              if(error) return next(error);
              this.password = hash
              next();
          })
      } else{
        next()
      }
    
    })

    // Hashing password before update
  userSchema.pre('findOneAndUpdate', async function(next) {
    const update = this.getUpdate();
    if (update.password) {
        try {
            const hashedPassword = await bcrypt.hash(update.password, 10);
            update.password = hashedPassword;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
  });


  const User = mongoose.model('User', userSchema);

  module.exports = User;
