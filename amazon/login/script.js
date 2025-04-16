const local = localStorage.getItem("infor") 
const pass = JSON.parse(local)

let login_data=[]



let useremail = document.querySelector(".input-e")
let userpassword = document.querySelector(".input-p")
let continuei = document.querySelector(".continue-button")



function email_and_passwordchecker(pass){

    for (let i = 0; i<pass.length; i++ ){
        if (useremail.value == pass[i].email && userpassword.value == pass[i].pass){
            login_data.push(pass[i])

            localStorage.setItem("loginUser",JSON.stringify(login_data));
            return true;
        }
    }
    return false
    
}


continuei.addEventListener("click", () =>{
    if (email_and_passwordchecker(pass)) {
   
        alert("login succesful")
        window.location.href = '../home/index.html'
        

    } else {
        alert("check Email and password")
    }
})


