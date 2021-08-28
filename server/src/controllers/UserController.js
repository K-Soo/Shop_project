
import { check, validationResult, body } from "express-validator";

const register = async (req, res) => {
};


const logIn = async (req, res, next) => {
  try {
    res.send('didi');
  } catch (error) {
    console.log('error-logIn: ', error);
  }
};


export {
  register,
  logIn
}