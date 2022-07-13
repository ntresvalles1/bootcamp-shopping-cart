import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core'

function ShopItem({product_id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart}) {
  
  const addToCart = () => {
    onAddToCart({ product_id, name, price, quantity: 1 })
  }

  return (
    <Card variant="outlined" style={{height: "500px", backgroundColor: "#FFF8E7"}} >
      <CardMedia
        component='img'
        style ={{height: "200px"}}
        image={image_url}
      />
    <CardContent >
      <Typography variant="h6" align="center">{name}</Typography>
      <Typography variant="subtitle4" align="center">{description}</Typography>
      <Typography variant="h4" align="center">{price}</Typography>
    </CardContent>
      <CardActions>
          <Button 
            style={{backgroundColor: "#F8E7D1"}} align="center" variant="contained" onClick={addToCart} >
              Add To Cart
          </Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;