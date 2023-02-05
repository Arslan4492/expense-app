import * as yup from "yup";

export const schema = yup.object().shape({
    date: yup.string().required(),
    itemName: yup.string().min(3).max(12).required(),
    price: yup.number().integer().positive().required(),
});