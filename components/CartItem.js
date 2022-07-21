import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

function CartItem({ product_id, name, id, image_url, price, quantity, is_on_sale, sale_price, onRemoveFromCart }) {
  {/* adds font-awesome icons */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
  crossorigin="anonymous" 
  referrerPolicy="no-referrer" />

  const removeFromCart = () => {
    onRemoveFromCart(id)
  }

  return (
    <Card variant="outlined" style={{backgroundColor: "#FFF8E7"}} >
      <CardMedia
        component='img'
        style ={{height: "200px"}}
        image={image_url}      
      />
      <div>
        <CardContent>
          <Typography variant="h6" align="center">{name}</Typography>   
          <Typography variant="h8" align="right">Quantity: {quantity}</Typography>
          <br/>
          <Typography variant="h8" align="right">Price: ${price}</Typography>
          
          {/* if on sale, put price */}
          { is_on_sale ? (
              <Typography  variant="subtitle1" align="left">
                <i className="saleIcon fa-regular fa-star"></i> On-Sale for: {sale_price}
              </Typography> 
            ) : (
              <Typography variant="subtitle1" align="left"></Typography> 
            )
          }
        </CardContent>

        <CardActions>
          <Button 
            style={{backgroundColor: "#F8E7D1"}} align="center" variant="contained" onClick={removeFromCart} >
              Remove From Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;