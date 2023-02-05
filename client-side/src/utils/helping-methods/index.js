export const sumNumbers = (list) => {
    let numbers = 0;
    for (let i = 0; i < list.length; i++) {
        numbers += list[i].price
    }
    return numbers
}