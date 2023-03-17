const categories = document.querySelector(".main__container--left--categories");
const category = document.querySelector(".main__container--left--category");

const categoryy = () => {
  category.classList.toggle("hidden");
};
categories.addEventListener("click", categoryy);

const opentBtnR = document.querySelector("#PaswordRegistrI-2");
const closetBtnR = document.querySelector("#PaswordRegistrI-3");
const password = document.getElementById("Pasword");
closetBtnR.addEventListener("click", () => {
  closetBtnR.classList.add("hidden");
  opentBtnR.classList.remove("hidden");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
opentBtnR.addEventListener("click", () => {
  closetBtnR.classList.remove("hidden");
  opentBtnR.classList.add("hidden");
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

const remember = document.querySelector(".not");
const loginContainer = document.querySelector(".login--container");
const registr = document.querySelector(".registr");
remember.addEventListener("click", () => {
  registr.classList.remove("hidden");
  loginContainer.classList.add("hidden");
});

let login = document.querySelector("#Login");
let email = document.querySelector("#Email");
let pass = document.querySelector("#Pasword");
const registerBtn = document.querySelector("#regist");

let users = [];
const refreshList = () => {
  if (localStorage.getItem(users)) {
    users = JSON.parse(localStorage.getItem(users));
  }
};
refreshList();
const addUser = (login, email, pass) => {
  if (login.value == "") {
    alert("Logini qeyd etmemisiz");
  } else if (email.value == "") {
    alert("Emaili qeyd etmemisiz");
  } else if (pass.value == "") {
    alert("Logini qeyd etmemisiz");
  } else {
    users.push({ login: login.value, mail: email.value, password: pass.value });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Qeyd oldunuz");
    refreshList();
  }
};
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(localStorage.getItem("users"));
  addUser(login, email, pass);
});
const loginName = document.getElementById("Username");
loginName.addEventListener("change", (e) => {
  console.log(e);
});
const passLog = document.getElementById("passwordLog");
const logBtn = document.getElementById("buttonLogin");
const check = () => {
  const pss = passLog.value;
  const log1 = loginName.value;
  const logged = JSON.parse(localStorage.getItem("users")).find(
    (x) => log1 == x.login
  );
  const loginNameStatus = logged.login == loginName.value;
  const passStatus = logged.password == passLog.value;
  if (passStatus && loginNameStatus) {
    alert(`Xos gelmisiz ${loginName.value}`);
    loginContainer.classList.add("hidden");
    overflow.classList.add("hidden");
    popop.classList.add('hidden')
    const z = loginName.value;
    popActiv.textContent = z;
    // console.log(z);
  } else if (!passStatus || !loginNameStatus){
    alert("Login ve ya password serfdir");
  }
};
logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check()
});
const outP = document.querySelector(".outP");
outP.addEventListener("click", () => {
  registr.classList.add("hidden");
  loginContainer.classList.remove("hidden");
});
const overflow = document.querySelector(".overflow");
const popActiv = document.querySelector(".popActiv");
const PopSpan = document.querySelector(".PopSpan");
const popop  = document.querySelector('.popop ')
PopSpan.addEventListener("click", () => {
  loginContainer.classList.remove("hidden");
  overflow.classList.remove("hidden");
  popop.classList.remove('hidden')

});
overflow.addEventListener("click", () => {
  loginContainer.classList.add("hidden");
  overflow.classList.add("hidden");
  registr.classList.add("hidden");
  popop.classList.add('hidden')
});
const obj = { ...localStorage.getItem("users") };
console.log(localStorage.getItem("users").login);
const opentBtn = document.querySelector(".open");
const closetBtn = document.querySelector(".close");
closetBtn.addEventListener("click", () => {
  closetBtn.classList.add("hidden");
  opentBtn.classList.remove("hidden");
  if (passLog.getAttribute("type") === "password") {
    passLog.setAttribute("type", "text");
  } else {
    passLog.setAttribute("type", "password");
  }
});
opentBtn.addEventListener("click", () => {
  closetBtn.classList.remove("hidden");
  opentBtn.classList.add("hidden");
  if (passLog.getAttribute("type") === "password") {
    passLog.setAttribute("type", "text");
  } else {
    passLog.setAttribute("type", "password");
  }
});

const goTopBtn = document.querySelector('.go--top')
goTopBtn.addEventListener('click',goTop)
function goTop() {
  if(window.pageYOffset>0){
    window.scrollBy(0,-25)
    setTimeout(goTop,0)
  }
  
}
window.addEventListener('scroll',ScroolsBt)
function ScroolsBt(){
  const ofset = window.pageYOffset
  const coords = document.documentElement.clientHeight
  if(ofset > coords){
    goTopBtn.classList.remove('hidden')
  }else{
    goTopBtn.classList.add('hidden')
  }
}
window.addEventListener("DOMContentLoaded",()=>{
  var localSoan = JSON.parse(localStorage.getItem('users'))
 
 popActiv.textContent = localSoan[localSoan.length-1].login;
})