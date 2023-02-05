import { httpClient } from "../../utils";

export const userLogin = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post("/auth/login", values)
        cbSuccess(data)
    } catch (error) {
        console.log("🚀 ~ file: index.js:8 ~ userLogin ~ error", error)
        cbFailure(error.message)
    }
}

export const userRegister = async ({ values, cbSuccess, cbFailure }) => {
    try {
        const { data } = await httpClient.post("/auth/register", values)
        cbSuccess(data)
    } catch (error) {
        console.log("🚀 ~ file: index.js:8 ~ userLogin ~ error", error)
        cbFailure(error.message)
    }
}