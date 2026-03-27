const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  console.log('Removing item with price:', price);

  updateTotalPrice(-price);
  item.remove();
}

// Add Product Function
function addProduct() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  // Edge case handling - invalid text, invalid price
  if (name === '') {
    alert('Please enter a product name.');
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert('Please enter a valid price greater than zero');
    return;
  }

  console.log('addingproduct:', name, '| Price:', price);

  //Create list item
  const li = document.createElement('li');
  li.classList.add('cart-item');
  li.dataset.price = price;

  // Create text span - Name and Price tofixed = decimal points/places
  const span = document.createElement('span');
  span.textContent = `${name} - $${price.toFixed(2)}`;
  console.log(span.textContent);

  // Create remove item button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', removeItem);
  console.log('Removing item with price:', price);

  // Assemble and append
  li.appendChild(span);
  li.appendChild(removeButton);
  cart.appendChild(li);

  // Update Total
  updateTotalPrice(price);

  //Clear input values
  productNameInput.value = '';
  productPriceInput.value = '';
}
addProductButton.addEventListener('click', addProduct);
// addProductButton.addEventListener('click', function() {
//   console.log('Button clicked!');
// });