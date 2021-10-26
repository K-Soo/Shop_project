import axios from 'axios';

interface IErrorMsg {
  error: any;
  text?: string;
}

export const ErrorMsg = ({ error, text = 'api' }: IErrorMsg) => {
  console.error('error: ', error);
  if (axios.isAxiosError(error)) {
    console.error(`---${text}-error---`, error.response.data.message);
  }
};