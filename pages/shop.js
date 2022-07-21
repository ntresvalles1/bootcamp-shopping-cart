import React from 'react';
import Head from '../components/head';
import Link from 'next/link';


import { Container, Typography } from '@material-ui/core'
import ShoppingItemList from '../components/ShopItemList';
import { Minimize } from '@material-ui/icons';



export const ShopPage = () => (
  <Container>
    <Head title='Home'/>
    <header className="row block center">
      {/* adds fonts for front-end from google */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Aleo:wght@400;700&family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
      
      <div>
        <a href="#/">
        {/* <img 
        src="https://cdn.shopify.com/s/files/1/0605/6997/7058/collections/6_1200x800.jpg?v=1639469846"
        /> */}
          <p className="shopTitle"> Ready, Set, Resell! </p>
        </a>
      </div>

      {/* adds font-awesome icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
          crossorigin="anonymous" 
          referrerPolicy="no-referrer" />

      <div>
        <a href="/cart"> 
          <i className="cartIcon fa-solid fa-cart-shopping"> CART </i>
        </a> 
      </div>
    </header>
     
    <br/>
    <div className ="center-image">
        <img 
          src="https://cdn.shopify.com/s/files/1/0605/6997/7058/collections/6_1200x800.jpg?v=1639469846"
        />
    </div>

    <br/>
    <main className="block col-1">
      <h2 className='shopProductHeader'>Products</h2>
    </main>

    <div>
      <ShoppingItemList/>
    </div>
  </Container>
);

export default ShopPage;