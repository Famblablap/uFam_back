function sendMailCreateAccount(email, password){
    return {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Welcome to uFam',
        text: `Your account ${email} has been created. Please insert this ${password} to access your account`,
    };
}

module.exports = { sendMailCreateAccount }