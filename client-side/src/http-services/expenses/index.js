import { httpClient } from "../../utils";

export const addExpense = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post("/expense", values)
        cbSuccess(data)
    } catch (error) {
        console.log("🚀 ~ file: index.js:8 ~ userLogin ~ error", error)
        cbFailure(error.message)
    }
}
export const getAllExpense = async ({ id, cbSuccess, cbFailure }) => {
    console.log("🚀 ~ file: index.js:13 ~ getAllExpense ~ id", id)
    try {
        const { data } = await httpClient.get(`/expense?id=${id}`)
        cbSuccess(data)
    } catch (error) {
        console.log("🚀 ~ file: index.js:17 ~ getAllExpense ~ error", error)
        cbFailure(error.message)
    }
}