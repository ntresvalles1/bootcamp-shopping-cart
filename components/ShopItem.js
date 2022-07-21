import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core'

function ShopItem({product_id, id, name, description, image_url, price, is_on_sale, sale_price, onAddToCart}) {
  {/* adds font-awesome icons */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
  crossorigin="anonymous" 
  referrerPolicy="no-referrer" />

  const addToCart = () => {
    onAddToCart({ product_id, name, price, image_url, is_on_sale, sale_price, id, quantity: 1 })
  }

 
  return (
    <Card variant="outlined" style={{height: "600px", backgroundColor: "#ccd5ae"}} >
      <CardMedia
        component='img'
        style ={{height: "200px"}}
        image={image_url}
      />
    <CardContent>
      <Typography variant="h6" align="center">{name}</Typography>
      <Typography variant="subtitle4" align="center">{description}</Typography>
      <Typography variant="h4" align="center">{price}</Typography>
      <br/>
      {/* if on sale, put price */}
      { is_on_sale ? (
           <Typography variant="subtitle1" align="left">
              <i className="saleIcon fa-regular fa-star"></i> On-Sale for: {sale_price}
            </Typography> 
        ) : (
          <Typography variant="subtitle1" align="left"></Typography> 
        )
      }

    </CardContent>
      <CardActions>
          <Button 
            style={{backgroundColor: "#fefae0"}} align-item="center" justify-content="center" variant="contained" onClick={addToCart} >
              Add To Cart
          </Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;