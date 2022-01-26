export const searchProduct = (str, array) => {
    return array.filter(text => text.title.toLowerCase().includes(str.toLowerCase()))
}