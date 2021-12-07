import express from 'express';
import { InterestProductController} from '../../../../controllers';
import verifyToken from '../../../middleware/verifyToken';

const interestProduct = express.Router();

interestProduct.put('/', InterestProductController.update);
interestProduct.get('/:idx',verifyToken, InterestProductController.list);
interestProduct.delete('/:idx/:productId', InterestProductController.remove);

export default interestProduct;
