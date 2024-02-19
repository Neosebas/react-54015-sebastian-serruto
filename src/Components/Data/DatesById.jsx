import ProductosJson from '../../productos.json';

export const datesById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = ProductosJson.find(product => product.id === id)

            if (product) {
                resolve(product);
            } else {
                reject({
                    error: "Product not found",
                })
            }
        }, 500)
    });
}