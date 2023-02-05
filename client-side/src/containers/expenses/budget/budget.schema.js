import * as yup from "yup";

export const schema = yup.object().shape({
    total_amount: yup.number().required("Amount cannot be empty or negative"),
});