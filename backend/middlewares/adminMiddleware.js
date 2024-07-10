const JWT = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.authorizationAdmin = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ error: 'Access denied: No token provided' });
    }
    try {
        const decoded = JWT.verify(token.replace('Bearer ', ''), 'GAHDYSB');
        req.adminId = decoded.adminid;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

exports.authenticateAdmin = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token || !token.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Access denied: Authenticate first" });
        }
        const decoded = JWT.verify(token.replace("Bearer ", ""), "GAHDYSB");
        const admin = await Admin.findById(decoded.adminid);
        if (!admin) {
            return res.status(401).json({ error: "Admin not found" });
        }
        req.admin = admin;
        next();
    } catch (error) {
        res.status(401).json({ error: "Authentication failed" });
    }
};

exports.isAdmin = (req, res, next) => {
    if (!req.admin || req.admin.role !== "admin") {
        return res.status(401).json({ error: "Unauthorized: Only admin users allowed" });
    }
    next();
};

