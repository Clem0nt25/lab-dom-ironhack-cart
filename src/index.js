// ITERATION 1

function updateSubtotal(product) {

  const price = parseInt(product.querySelector('.price span').innerHTML)
  const quantity = parseInt(product.querySelector('.quantity input').value)
  let subtotal = price * quantity

  const subtotalEle = product.querySelector(' .subtotal span')
  subtotalEle.textContent = subtotal

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product")
  
  let total = 0

  for (let i = 0; i < allProducts.length; i++) {
    let sub = updateSubtotal(allProducts[i])
    total += sub
  }

  totalStr = "Total: $" + total


  const totalEle = document.getElementById("total-value")
  totalEle.innerHTML = totalStr

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
