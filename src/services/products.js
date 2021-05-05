import productsMock from '../mocks/products.json';

const getProducts = () => productsMock || [];

const getProductById = (productId) => {
    const products = getProducts();

    return products.find(product => product.id === productId) || null;
};

export {
    getProducts,
    getProductById,
};
