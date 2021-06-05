import productsMock from '../ProductList/products.json'; 


const getProducts = async () => {
    const products = await productsMock;
    return products;
}

const getProductCategoryId= async (categoryId)=>{
    const products = await getProducts();
    return products.filter(product => product.categoryId === categoryId) || [];
}


const getProductById = async (productId) => {
    const products = await getProducts();

    return products.find(product => product.id === productId) || null;
};

export {
    getProducts,
    getProductById,
    getProductCategoryId,
};
