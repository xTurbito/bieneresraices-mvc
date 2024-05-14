const formularioLogin = (req, res) => {
    res.render('auth/login.pug', {
        pagina: 'Iniciar Sesion'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro.pug', {
        pagina: 'Crear cuenta'
    });
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password.pug', {
        pagina: 'Recupera tu accesos a Bienes Raices'
    });
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}