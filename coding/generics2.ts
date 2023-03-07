function getProductSearch<T>(products: T[]): T {
    return products[3]
}

const getMoreProductSearch = <T,>(products: T[]): T => {
    return products[2]
}
