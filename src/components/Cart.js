import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'reactstrap'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index.js'
// import logo from '.../assets/shoppingcart.ico'

const shoppingCartmessage = {
  fontSize: '12px'
}

//this controls the way the products look when they get placed inside the cart
const Cart  = ({ products, total, names, removeFromCart, onCheckoutClicked, onRemoveFromCartClicked, quantity, ...props,  }) => {
  console.log("products", products)
  console.log("names", names)
  console.log("quantity", quantity)
  /* --- the below code was my attempt to get the "names" array to work. It's only passing an empty array to Cart. As of 4/5, I'm still trying to get it to work.
  const a = JSON.stringify(names[0].title

  let a = JSON.stringify(names[0])
  let b = typeof (JSON.stringify(names[0]))
  console.log(b)
  let nameArray = []
  let nameArray2 = []
  Object.keys(names).map(function(key, index){
    nameArray.push(names[key])
  });
  console.log(a)
  // console.log(c)
  console.log("nameArray = " + JSON.stringify(nameArray['title']))

  const testArray = { 'a': 1, 'b':2, 'c':3}

  Object.keys(testArray).map(function(key, index) {
    testArray[key] *= 2;
  })

   Object.keys(names).map(function(key, index) {
    nameArray.push(names[key])
  })

   console.log(nameArray[0])

   Object.keys(nameArray[0]).map(function(key, index) {
    nameArray2.push(nameArray[0][key])
  })
  //console.log(a)
  //let c = a.split(" ")
  //console.log(b)
 // console.loc(c)
 */
  const hasProducts = products.length > 0
  console.log("props", props)
  console.log(hasProducts)
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.productTitle}
        price={product.price}
        quantity={product.inventory}
        key={product.id}
      />
    )
  ) : (
  <div>
    <p style={shoppingCartmessage}><em>Your Shopping Cart is empty.</em></p>
    </div>
  )

  return (
    <div>
      <div>{nodes}</div> 
      <p> Total Items in Cart: {quantity} </p>
      <p>Total: ${ total }</p>
      <Button color="secondary" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  removeFromCart: PropTypes.func,
  names: PropTypes.array
}

export default Cart
