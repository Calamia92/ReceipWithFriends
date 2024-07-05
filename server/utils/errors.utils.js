// utils/errors.utils.js

module.exports.signUpErrors = (err) => {
    let errors = { email: '', password: '', telephone: '' };
  
    if (err.message.includes('email'))
      errors.email = "Email incorrect";
  
    if (err.message.includes('password'))
      errors.password = "Le mot de passe doit faire plus de 6 caractères";
  
    if (err.message.includes('telephone'))
      errors.telephone = "Numéro de téléphone incorrect";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0] === 'email')
      errors.email = 'Cet email est déjà enregistré';
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0] === 'telephone')
      errors.telephone = 'Ce numéro de téléphone est déjà enregistré';
  
    return errors;
  };
  
  module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' };
  
    if (err.message.includes('email'))
      errors.email = "Email inconnu";
    
    if (err.message.includes('password'))
      errors.password = "Le mot de passe ne correspond pas";
  
    return errors;
  };
  