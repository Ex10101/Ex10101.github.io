// Cart data as a global variable
var cartData = [];

// Function to add a product to the cart
function addToCart(productData) {
    // Check if there are already 8 items in the cart
    if(cartData.length >= 6) {
        alert("You can only add up to 6 items to the cart.");
        return;
    }

    // Add the new product data to the cart data array
    cartData.push(productData);

    // Call function to update the cart UI
    updateCartUI();

    showToast("Product added to cart!");
}


// Function to remove a product from the cart
function removeFromCart(index) {
    // Remove the product data from the cart data array
    cartData.splice(index, 1);

    // Call function to update the cart UI
    updateCartUI();
}

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.textContent = message;
    setTimeout(function() { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}

// Function to update the cart UI
function updateCartUI() {
    // Get the cart items div
    var cartItemsDiv = document.getElementById('cart-items');

    // Clear the cart items div
    cartItemsDiv.innerHTML = '';

    // Variable to hold the total cart amount
    var total = 0;

    // Iterate over the cart data
    for(var i = 0; i < cartData.length; i++) {
        // Create a new cart item div
        var newCartItem = document.createElement('div');
        newCartItem.className = 'cart-item';

        // Add the cart item data to the new cart item div
        newCartItem.innerHTML = `
            <img src="${cartData[i].imgSrc}" alt="">
            <p class="cart-name">${cartData[i].name}</p>
            <div class="cart-flex">
                <p class="cart-price">${cartData[i].price}$</p>
                <button class="cart-remove" onClick="removeFromCart(${i})">Remove</button>
            </div>
        `;

        // Add the new cart item to the cart items div
        cartItemsDiv.appendChild(newCartItem);

        // Add the product price to the total
        total += parseFloat(cartData[i].price);
    }

    // Get the cart total element and update the total price
    var totalPrice = document.getElementById('cart-total');
    totalPrice.textContent = `Total: ${total.toFixed(2)}$`;
}


// Event listener for the product 'To Cart' button
var buyBtns = document.querySelectorAll('.buy-btn');
var cartDiv = document.getElementById('cart');
buyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Get the product data
        var productDiv = this.parentNode.parentNode;
        var productData = {
            type: productDiv.getAttribute('data-type'),
            manufacturer: productDiv.getAttribute('data-manufacturer'),
            price: productDiv.getAttribute('data-price'),
            imgSrc: productDiv.querySelector('img').src,
            name: productDiv.querySelector('.p-name').textContent
        };

        // Call function to add product to the cart
        addToCart(productData);

        // cartDiv.style.display = 'block';
    });
});


// Event listener for the 'Close Cart' button
document.getElementById('cart-close').addEventListener('click', function() {
    // Hide the cart
    cartDiv.style.opacity = '0%';
    setTimeout(function() {
        cartDiv.style.height = '0px';
    }, 300); // 300ms = 0.3s
});

// Event listener for the 'Cart Icon'
document.getElementById('cart-icon').addEventListener('click', function() {
    // Show the cart
    cartDiv.style.opacity = '100%';
    cartDiv.style.height = 'auto';
});

