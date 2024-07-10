const { body, validationResult } = require('express-validator');

exports.validateInput = [
    body('firstName').trim().isLength({ min: 5, max: 20 }).withMessage('Username must be between 3 and 20 characters'),
    body('lastName').trim().isLength({ min: 5, max: 20 }).withMessage('Lastname must be between 3 and 20 characters'),
    body('email').isEmail().withMessage('Invalid email')
                 .exists().withMessage('Email is required'),
    body('address').trim().isLength({ min: 20 }).withMessage('Address is required'),
    body('phone').trim().isLength({ min: 10 }).withMessage('Phone is required'),
    body('password').trim().isLength({ min: 10 }).withMessage('Password must be at least 10 characters long')
                    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
                    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
                    .matches(/[0-9]/).withMessage('Password must contain at least one digit')
                    .not().matches(/[!@#$%^&*]/).withMessage('Password must not contain special characters'),
    body('age').isInt({ min: 18 }).withMessage('Age must be at least 18'),
    body('country').trim().isLength({ min: 1 }).withMessage('Country is required'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


