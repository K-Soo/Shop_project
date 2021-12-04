import express from 'express';
import { BasketController } from '../../../../controllers';

const basket = express.Router();

basket.put('/', BasketController.update);
basket.delete('/:user/:id', BasketController.remove);
basket.put('/:idx/:productId', BasketController.updateProductQty);

export default basket;
