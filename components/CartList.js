import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, CardActions, Button, Card, CardContent, CardMedia  } from '@material-ui/core'
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = { cartItems: [] };
    }
  
    componentDidMount() {
      fetch('http://localhost:8000/v1/cartitems')
        .then(response => response.json())
        .then(data => this.setState({cartItems: data}))
    }
  
    deleteItem = (id) => {
      fetch(`http://localhost:8000/v1/cartitems/${id}`, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            const newItems = this.state.cartItems.filter(i => i.id != id);
            this.setState({
              cartItems: newItems
            })
          } else {
            alert(`Failed to delete ${id} - ${response.status}`)
          }
        });
    }
  
    render() {
      const total = this.state.cartItems.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)

      return (
        <div>
          <Grid container direction="row" spacing={3}>
            {this.state.cartItems.map(item =>
              <Grid item sm>
                <CartItem
                  product_id={item.id}
                  name={item.name}
                  id={item.id}
                  image_url={item.image_url} 
                  price={item.price}
                  quantity={item.quantity}
                  is_on_sale={item.is_on_sale} 
                  sale_price={item.sale_price}
                  onRemoveFromCart={this.deleteItem}
                  />
              </Grid>
            )}
          </Grid>
          <br/>
          <div>
            <Typography variant="h5">
              Total: ${total}
            </Typography>
          </div>
          <div>
              <Button 
                style={{backgroundColor: "#F8E7D1"}} align-items="center" variant="contained" >
                  Checkout
              </Button>
          </div>
        </div>
      );
    }
  }
  
export default Cart;