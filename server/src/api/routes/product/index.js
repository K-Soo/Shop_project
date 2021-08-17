import express from 'express';
import { ProductController } from '../../../controllers';

const product = express.Router();

// api/product
product.get('/list', ProductController.list);
product.post('/create', ProductController.create);
product.get('/:product_type', ProductController.ProductType);

export default product;
