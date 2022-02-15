export const totalCount = (arr) => {
    if (arr === null) return;

    let count = 0;
    arr.forEach(item => count += item.buy);
    return count
}