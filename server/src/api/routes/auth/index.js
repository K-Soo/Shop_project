import express from 'express';

const auth = express.Router();

// api/auth
auth.post('/register','');
auth.post('/login', '');
auth.post('/check', '');
auth.post('/logout', '');

export default auth;

