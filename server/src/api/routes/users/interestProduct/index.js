import express from 'express';
import { InterestProductController} from '../../../../controllers';

const interestProduct = express.Router();

interestProduct.put('/', InterestProductController.update);
interestProduct.get('/:idx', InterestProductController.list);
interestProduct.delete('/:idx/:productId', InterestProductController.remove);

export default interestProduct;
