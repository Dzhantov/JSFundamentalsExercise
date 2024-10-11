function storeProvisions(currentStock, orderedProducts){
    let store = {};

    //itteration throught the currentStock array and selecting even indexes for products, 
    //odd indexes for quantity
    for(let i=0; i< currentStock.length; i+=2){
        let productName = currentStock[i];
        let productQuantity = Number(currentStock[i+1]);

        //setting key and value to the store object
        store[productName] = productQuantity;
    }

    //iteration throught orderedStock array
    for(let i=0; i<orderedProducts.length; i+=2){
        //extracting the name and quantity
        let productName = orderedProducts[i];
        let productQuantity = Number(orderedProducts[i+1]);


        //checking if the object already have such property
        if(store.hasOwnProperty(productName)){
            store[productName] += productQuantity;
        }else{
            store[productName] = productQuantity;
        }
    }

    //printing the object properties
    for(let product in store){
        console.log(`${product} -> ${store[product]}`);
    }
}