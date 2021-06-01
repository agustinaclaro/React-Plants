import productsMock from '../ProductList/products.json';

const getProducts = () => productsMock || [];

const getCategoryId= (data)=>{
    let categoty = data.filter(product => product.categoryId === categoryId) || null;
    return getCategoryId
}


const getProductById = (productId) => {
    const products = getProducts();

    return products.find(product => product.id === productId) || null;
};

export {
    getProducts,
    getProductById,
    getCategoryId,
};
