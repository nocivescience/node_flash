const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.post('/prueba1',(req,res)=>{
    const {correo,contrasena}=req.body;
    req.session.usuario={correo,contrasena};
    res.redirect('/profile');
})
router.get('/profile',(req,res)=>{
    const superusuario=req.session.usuario;
    res.render('profile',{superusuario});
});
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    req.session.user_data = {email, password};
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    const user = req.session.user_data;
    delete req.session.user_data;

    res.render('profile', {
        user
    });
});

router.get('/products', (req, res) => {
    res.render('products')
});

module.exports = router;