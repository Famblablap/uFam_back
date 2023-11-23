

function sendMailCreateAccount(email, password){
    return {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Welcome to uFam',
        text: `¡Bienvenidos a nuestra nueva red social uFam, dedicada a fortalecer lazos familiares! Para unirse, simplemente registrate con tu correo electrónico. Aquí te dejo los detalles para comenzar:
        
        Tu email de registro: 
        ${email}
        
        Contraseña provisional: 
        ${password}
        
Podrán cambiar la contraseña una vez que accedan al perfil. ¡Esperamos que disfruten compartiendo momentos únicos con su familia en nuestra plataforma! 💜👨‍👩‍👧‍👦💻 #uFam`
    };
}

module.exports = { sendMailCreateAccount }