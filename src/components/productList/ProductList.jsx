import React from 'react';
import Product from '../product/Product.jsx';
import './productList.css'

export default function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire</h1>
            <p className="pl-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus inventore possimus suscipit, 
                dicta aspernatur aperiam numquam porro eum doloremque quia, nisi consequuntur natus asperiores? Repellendus 
                molestiae qui voluptatum dolorem error!
            </p>
        </div>
        <div className="pl-list">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}