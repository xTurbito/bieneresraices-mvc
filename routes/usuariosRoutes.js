import express from 'express';

const router = express.Router();

//Rutas
router.get('/login', (req, res) => {
    res.render('auth/login.pug');
}); 


export default router;