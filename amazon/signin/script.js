

let namei = document.querySelector('#name');
let emaili = document.querySelector('#email');
let passwordi = document.querySelector('#password');
let buttoni = document.querySelector('.signup-btn');

let signin = document.querySelector('.signin-link')

let arr =[]

const local = localStorage.getItem("infor") 


if (local != null ) {
    let data = JSON.parse(local) 
    informa = data
}

function isEmailExists(email){
    const storedData = localStorage.getItem("infor");

    if (storedData !== null ){
        const userData = JSON.parse(storedData)
        return userData.email === email
    }
}



// Modified functions to return boolean values
function checkname() {
    if (namei.value === "") {
        alert("Kuch to likh");
        return false;
    }

    return true;
}

function checkname_email_is_valid() {
    if (!emaili.value.includes("@") || !emaili.value.includes(".") || !emaili.value.includes("com")) {
        alert("email acche se likh");
        return false;
    }
    if (isEmailExists(emaili.value)){
        alert("Ye email already registered hai!");
        return false;
    }

    return true;
    
}

function password_checker(password) {
    const password_validator = {
        uppercase: /[A-Z]/,  
        lowercase: /[a-z]/,  
        number: /[0-9]/     
    };

    // Check if the password is undefined or empty
    if (!password) {
        alert("kuch to likh");
        return false;
    }

    if (!password_validator.uppercase.test(password)) {
        alert("ek uppercase bhi daal");
        return false;
    }
    if (!password_validator.lowercase.test(password)) {
        alert("ek lowercase bhi daal");
        return false;
    }
    if (!password_validator.number.test(password)) {
        alert("ek number bhi add kr");
        return false;
    }

    return true;
}

buttoni.addEventListener("click", (event) => {
    event.preventDefault();
    const namecheck= checkname();
    const Existvalidemail = checkname_email_is_valid()
    const checkpassword = password_checker(passwordi.value)
    

    if (namecheck && Existvalidemail &&  checkpassword){
        let informa={
            'email':emaili.value,
            'pass':passwordi.value,
            'namehai':namei.value
        }

        arr.push(informa)
        localStorage.setItem("infor",JSON.stringify(arr))

    }

    

    if (checkname() && checkname_email_is_valid() &&  password_checker(passwordi.value)) {
        // window.location.href = '../login/index.html'
        // console.log(arr)

    }
});

signin.addEventListener("click", (event) => {
    event.preventDefault();
    

    
        window.location.href = '../login/index.html'

});

