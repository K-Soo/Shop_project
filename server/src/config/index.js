import dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};

