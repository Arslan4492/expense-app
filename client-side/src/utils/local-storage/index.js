import jwt_decode from "jwt-decode";

export const decode = (key) => {
    if (typeof window !== 'undefined')
        return localStorage.getItem(key)
}
export const encode = (key, value) => {
    if (typeof window !== 'undefined')
        return localStorage.setItem(key, value)
}
export const remove = (key) => {
    if (typeof window !== 'undefined')
        return localStorage.removeItem(key)
}

export const decodeToken = (token) => {
    if (typeof window !== 'undefined')
        return jwt_decode(token);
}