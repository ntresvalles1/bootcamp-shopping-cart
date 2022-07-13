import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import ShopItem from './ShopItem';


function ShoppingItemList() {

  // this is the state we will use to hold the response from the api
  const [products, setProducts] = useState([]);
  const router = useRouter()

  const getProductsUrl = "http://localhost:8000/v1/products"
  const addToCartUrl = "http://localhost:8000/v1/cartitems"

  useEffect(async () => {
    const response = await fetch(getProductsUrl, { method: "GET"});
    const json = await response.json();
    setProducts(json)
    /* fetch list of products here */
    /* update product state with response */
  }, [])

  const handleAddToCart = async (product) => {
    const body = JSON.stringify(product);
    const response = await fetch(addToCartUrl, { method: 'POST', body, headers: { 'content-type': 'application/json' }});
    router.push("/cart")
    /* add product to cart via api */
    /* redirect to the cart page */
  }

  return (
    <Grid container direction="row" spacing={5} >
      {products.map(product => 
        <Grid item sm>
          <ShopItem 
            product_id={product.id}
            name={product.name} 
            description={product.description} 
            image_url={product.image_url} 
            price={product.price} 
            is_on_sale={product.is_on_sale} 
            sale_price={product.sale_price}
            onAddToCart={handleAddToCart}
            />
          </Grid>
      )}
    </Grid>
  )
}

export default ShoppingItemList














