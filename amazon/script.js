let account = document.querySelector(".account-login");
let main = document.querySelector(".account-section");
let profile_data = localStorage.getItem("loginUser");
let parsed_profile_data = JSON.parse(profile_data);
let accountlist = document.querySelector(".account_list");

// let logout = document.createElement('div')

let userNameDiv = document.createElement("div");
if (parsed_profile_data) {
  // Hide the original account login div
  account.style.display = "none";


  
  userNameDiv.classList.add("user-name");
  userNameDiv.textContent = `Hi ${parsed_profile_data[0].namehai}`;



  account.parentNode.insertBefore(userNameDiv, account.nextSibling);

}

accountlist.addEventListener("click",()=>{
    accountlist.innerHTML = `<div>
<p>${parsed_profile_data[0].email}</p>
<p>${parsed_profile_data[0].namehai}</p>
<button class="logout_1">Logout</button>

</div>`;
let logout= accountlist.querySelector(".logout_1")
logout.addEventListener("click",()=>{
    account.style.display = "block";
    userNameDiv.style.display ='None'
    accountlist.style.display ='None'
    localStorage.removeItem("loginUser")
}
)
})



