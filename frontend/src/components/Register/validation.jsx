import * as yup from 'yup';
const validations = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Your name can not be less than 3 characters')
    .required("Please don't forget to fill in this field."),
  password: yup
    .string()
    .min(5, 'Your password must be at least 5 characters')
    .required("Please don't forget to fill in this field."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')])
    .required("Please don't forget to fill in this field."),
  city: yup.string().required('You should write your city name'),
  email: yup.string().email('You should correct E-Mail form').required("Please don't forget to fill in this field."),
  profil: yup.mixed().required('Profile photo is required'),
});

export default validations;
