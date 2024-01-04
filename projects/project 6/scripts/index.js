document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    let allProducts = [];
    function fetchProducts() {
        return fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                allProducts = data.products;
                console.log(allProducts)
                return allProducts;
            });
    }
    
    
    
    fetchProducts().then(products => {
        products.forEach(product => {
            const productItem = document.createElement('div');
          
            productItem.className = 'box';
            productItem.innerHTML = `

                <h3>${product.title}</h3>
                <img class="img" src=${product.images[0]}>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productItem);
    
            const addToCartBtn = productItem.querySelector('.add-to-cart');
            addToCartBtn.addEventListener('click', () => addToCart(product));
        });
    }).catch(error => {
        console.error('Error:', error);
    });
     

    // Function to add a product to the cart
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${product.title}</span>
            <span>$${product.price}</span>
            <button class="remove-from-cart" data-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(cartItem);

        // Add event listener for the "Remove" button
        const removeFromCartBtn = cartItem.querySelector('.remove-from-cart');
        removeFromCartBtn.addEventListener('click', () => removeFromCart(cartItem));

        updateCheckoutButton();
    }

    // Function to remove a product from the cart
    function removeFromCart(cartItem) {
        cartItems.removeChild(cartItem);
        updateCheckoutButton();
    }

    // Function to update the "Checkout" button based on cart items
    function updateCheckoutButton() {
        checkoutBtn.disabled = cartItems.children.length === 0;
    }

    // Event listener for the "Checkout" button
    checkoutBtn.addEventListener('click', () => {
       let tag= document.getElementById('cart-items')
        tag.innerHTML=''
    });
});

