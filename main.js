function showInput() {
const email = document.getElementById('email-address-input').value;
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

  // Öğelerin varlığını kontrol et
if (errorMessage && successMessage) {
    if (validateEmail(email)) {
    successMessage.textContent = `E-posta adresiniz: ${email}`;
    errorMessage.textContent = '';
    } else {
    errorMessage.textContent = 'The email address is not formatted correctly';
    successMessage.textContent = '';
    }
}
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
