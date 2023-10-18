import { check } from 'express-validator';

export const userRegisterValidation = [
  check('name', 'Name is required').not().isEmpty().trim(),
  check('email', 'Please include a valid email').isEmail().trim(),
  check('password', 'Please enter a password with 5 or more characters').isLength({ min: 5, max:15}),
  check('roles', 'Invalid role(s)')
    .optional()
    .custom((value) => {
      if (!Array.isArray(value)) {
        return false;
      }
      const validRoles = ['admin', 'user'];
      return value.every((role) => validRoles.includes(role));
    }),
];

export const userLoginValidation = [
  check('email', 'Please include a valid email').isEmail().trim(),
  check('password', 'Password is required').exists().trim(),
];
