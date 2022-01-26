export const filterCategoryCount = (products, category) => {
    const result = [];

    for (let i = 0; i < category.length; i++) {
        const obj = {};
        obj.name = category[i];
        obj.count = 0;
        result.push(obj);
    }

    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (products[i].category === result[j].name) {
                result[j].count += 1;
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i].count === 0) {
           delete result[i]
        }
    }

    return result;
}

export const findProductCategory = (products, category) => {
    return products.filter(product => product.category === category)
}