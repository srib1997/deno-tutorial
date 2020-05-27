import { Product } from '../types.ts'

const products : Product[] = [
  {
    id: 1,
    name: 'product1',
    description: 'product1',
    price: 1
  },
  {
    id: 2,
    name: 'product2',
    description: 'product2',
    price: 2
  },
  {
    id: 3,
    name: 'product3',
    description: 'product3',
    price: 3
  }
]

// @desc get all products
// @route /api/v1/products

const getProducts = ({ response } : {response : any}) => {
  response.body = {
    success: true,
    data: products
  };
};

export { getProducts }
