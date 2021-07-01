
import { Lists } from './data';

export const list = async (req, res) => {
  try {
    res.json(Lists);
  } catch (error) {
    console.error('/list error', error);
  }
};