import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

// const images = [
//   "https://i5.walmartimages.com/asr/8d5f0f44-a82e-4fe0-bafe-b002077dc2b8.709c8f660e02c813e6d522ecc7195c9e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//   "https://i5.walmartimages.com/asr/8d5f0f44-a82e-4fe0-bafe-b002077dc2b8.709c8f660e02c813e6d522ecc7195c9e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
//   "https://i5.walmartimages.com/asr/73ceced2-74be-454d-bb34-232cd6d1a82a.b18d82f69db08f6ba8d979f268cc4615.jpeg",
//   "https://i5.walmartimages.com/asr/f46eb93a-8317-4310-bd7d-f390bce27b81.b07fadc33931a5731f0c95c0d64a8f36.jpeg",
//   "https://m.media-amazon.com/images/I/31By3Wr+Q8L.jpg",
//   "https://www.miniso-au.com/files/images.cache/8e5a6fd2b3a32620e9f1d2a9e0d6b48a-view.jpg"
// ]

function CartItem({ product_id, name, id, image_url, price, quantity, onRemoveFromCart }) {
  
  const removeFromCart = () => {
    onRemoveFromCart(id)
  }

  return (
    <Card variant="outlined" style={{backgroundColor: "#FFF8E7"}} >
      <CardMedia
        // style={{ height: "140px"}} 
        // image={images[product_id]}
        component='img'
        style ={{height: "200px"}}
        image={image_url}      
      />
      <div>
        <CardContent>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
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