//Product by a given ID. Gets a product by a specified Id.
let productMgr = require('dw/catalog/ProductMgr')
let product = productMgr.getProduct('34736758M')
return product;


//Product category by given product. Function which returns all categories to which it is assigned.
function getCategoryByProduct(product) {
    return ProductMgr.getProduct(productID).getAllCategories();
}

//Different product prices for a given product. Returns all price books defined for the organization.
function getPriceproduct(price) {
    return ProductMgr.getAllPriceBooks('price');
}

//Catalog main categories. Returns a sorted collection of currently online subcategories of this catalog category.
function getCategoryByProduct(Category) {
    return ProductMgr.getOnlineSubCategories('Category');
}

//Get customer by ID.
/**
 * 
 * @param {String} CustomerId 
 * @returns {dw.customer.customer}
 */
function getCustomerById(CustomerId) {
    let customer = customerMgr.getCustomerByCustomerNumber(CustomerId);
    return customer;
}
