import productsMock from '../ProductList/products.json';

const getProducts = () => productsMock || [];

const getProductCategoryId= (categoryId)=>{
    const products = getProducts();
   return products.filter(product => product.categoryId === categoryId) || null;
   
}


const getProductById = (productId) => {
    const products = getProducts();

    return products.find(product => product.id === productId) || null;
};

export {
    getProducts,
    getProductById,
    getProductCategoryId,
};
