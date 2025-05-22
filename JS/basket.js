function saveBasket(basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
}
function getBasket() {
    return JSON.parse(localStorage.getItem('basket')) || [];
}

function addBasket(product){
    let basket = getBasket();
    let existingProduct = basket.find(item => item.id === product.id);
    if (existingProduct !== undefined) {
        // Si le produit existe déjà, on incrémente la quantité
        existingProduct.quantity++;
    } else {
        product.quantity = 1; // On initialise la quantité à 1
        basket.push(product);
    }
    saveBasket(basket);
}

function removeBasket(productId) {
    let basket = getBasket();
    basket = basket.filter(item => item.id !== productId);
    saveBasket(basket);
}

function changeQuantity(productId, quantity) {
    let basket = getBasket();
    let product = basket.find(item => item.id === productId);
    if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
            removeBasket(productId);
        } else {
            saveBasket(basket);
        }
    }
}

function clearBasket() {
    localStorage.removeItem('basket');
}