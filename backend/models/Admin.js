const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const adminSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin'], default: 'admin' }, 
    forgotPasswordToken: { type: String, default: null },
    isConfirmed: { type: Boolean, default: false },
    confirmationToken: { type: String, default: null },
},{
    toJSON: {
        transform: function(doc, ret) {
            delete ret._id
            delete ret.date
            delete ret.password
            delete ret.__v
            delete ret.forgotPasswordToken
            delete ret.isConfirmed
            delete ret.confirmationToken
        }
    }
});

// Hashing password
adminSchema.pre('save', function(next) {
    if(this.isModified('password')){
        bcrypt.hash(this.password, 10, (error, hash) => {
            if(error) return next(error);
            this.password = hash
            next();
        })
    } else {
        next()
    }
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
