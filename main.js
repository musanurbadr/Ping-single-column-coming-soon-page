
// let input = document.getElementById("email-address-input")
// let btn = document.getElementById("btn")

// btn.addEventListener("click" , button)

// function button()
// {
//     input.value 
// }
// const emailElement = document.getElementById('email-address-input');
const showInput = () => {
    let emailElemenet  = document.getElementById("email-address-input");
    let pintoinp = document.getElementById("pintoinp")
    // const errorMessageElement = document.createElement('data-btn-sahare');
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let emailnode = getElementById = emailElemenet;

        if (!emailElemenet.value) {
            emailnode.style.border = "1px solid hsl(354, 100%, 66%)";
            emailElemenet.placeholder = "example@email/com";
            pintoinp.innerHTML = "Please provide a valid email address.";
        }else if (!regex.test(emailElemenet.value)) {
            emailInput.style.border = ''; // Sınırı kaldır
            errorMessage.classList.add('hidden'); // Hata mesajını gizle
    } 
}
// const emailElemenet = document.getElementById('email-address-input');
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function showInput() {
//     if (!emailElemenet.value) {
//         emailElemenet.style.borderColor = "hsl(354, 100%, 66%)";
//         emailElemenet.placeholder = "Please provide an email address";
//     } else if (!regex.test(emailElemenet.value)) {
//         emailElemenet.style.borderColor = "hsl(354, 100%, 66%)";
//         emailElemenet.value = "";
//         emailElemenet.placeholder = "Please enter a valid email address";
//     } else {
//         emailElemenet.style.borderColor = "initial";
//         emailElemenet.placeholder = "Your email address...";
//     }
// }





































// const Submit = () =>{
//     const email = document.getElementById('email-address-input')

//     if(!email.value){
//         console.log("goode");
//     }
// }
/////////



// function showInput() {

// const errorMessage = document.getElementById('errorMessage');
// const successMessage = document.getElementById('successMessage');

//   // Öğelerin varlığını kontrol et
// if (errorMessage && successMessage) {
//     if (validateEmail(email)) {
//     successMessage.textContent = `E-posta adresiniz: ${email}`;
//     errorMessage.textContent = '';
//     } else {
//     errorMessage.textContent = 'The email address is not formatted correctly';
//     successMessage.textContent = '';
//     }
// }
// }
// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }
