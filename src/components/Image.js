import React from 'react';
import product from '../product';

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} className="card-img-top" />;
};

export default Image;
