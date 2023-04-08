import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader= async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const savedCart = [];
    //get the items of products from LS or DB;
    const storedProducts = getShoppingCart();

    for(const id in storedProducts){
        const addedProduct = products.find(pd => pd.id ===  id);
        if(addedProduct){
            const quantity = storedProducts[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }

    }

    return savedCart;
}

export default cartProductsLoader;