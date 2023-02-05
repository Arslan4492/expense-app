import * as yup from "yup";

export const schema = yup.object().shape({
    username: yup.string().required().min(3).max(20),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required(),
});