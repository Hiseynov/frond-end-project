const categories = document.querySelector(".main__container--left--categories");
const category = document.querySelector(".main__container--left--category");

const categoryy = () => {
  category.classList.toggle("hidden");
};
categories.addEventListener("click", categoryy);

const product = [
  {
    url: "https://preview.colorlib.com/theme/ogani/img/cart/cart-1.jpg",
    text:'Vegetable’s Package',
    price:'55.00',
    minus:'-',
    value:'1',
    plus:'+',
    total:'55.00',
    not:'X'

  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/cart/cart-2.jpg",
    text:'Fresh Garden Vegetable',
    price:'39.00',
    minus:'-',
    value:'1',
    plus:'+',
    total:'39.00',
    not:'X'
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/cart/cart-3.jpg",
    text:'Organic Bananas',
    price:'69.00',
    minus:'-',
    value:'1',
    plus:'+',
    total:'69.00',
    not:'X'
  },
];
const tbody = document.querySelector('tbody')
product.map(item =>{
const tr = document.createElement('tr')
const td_card = document.createElement('td')
td_card.classList.add('shoping__cart__item')
const img = document.createElement('img')
img.src = item.url
const h3 = document.createElement('h3')
h3.textContent= item.text
// const hr1 = document.createElement('div')
// hr1.classList.add('hr')
td_card.append(img)
td_card.append(h3)
// td_card.append(hr1)
const td_price = document.createElement('td')
td_price.classList.add('shoping__cart__price')
const input_price = document.createElement('input')
input_price.classList.add('input_price')

input_price.value = item.price
input_price.type = 'text'
input_price.setAttribute('value',item.price)
input_price.setAttribute('disabled','disabled')
// const hr2 = document.createElement('div')
// hr2.classList.add('hr')
td_price.append(input_price)
// td_price.append(hr2)
const td_quantity = document.createElement('td')
td_quantity.classList.add('shoping__cart__quantity')
const quantity = document.createElement('div')
quantity.classList.add('counter')
// quantity.getAttribute('data-counter')
const minus = document.createElement('button')
minus.classList.add('counter__button')
minus.classList.add('counter__button_minus')
minus.textContent = item.minus
const input = document.createElement('input')
input.setAttribute('disabled','disabled')
input.setAttribute('value','1')
input.value = item.value
input.type = 'text'

const plus = document.createElement('button')
plus.classList.add('counter__button')
plus.classList.add('counter__button_plus')
plus.textContent = item.plus
// const hr3 = document.createElement('div')
// hr3.classList.add('hr')
quantity.append(minus)
quantity.append(input)
quantity.append(plus)
// quantity.append(hr3)
td_quantity.append(quantity)
const td_total = document.createElement('td')
td_total.classList.add('shoping__cart__total')
const input_total = document.createElement('input')
input_total.setAttribute('disabled','disabled')
input_total.classList.add('input_total')
input_total.setAttribute('value',item.total)
input_total.value = item.total
input_total.type = 'text'
// const hr4 = document.createElement('div')
// hr4.classList.add('hr')
td_total.append(input_total)
// td_total.append(hr4)
const x = document.createElement('td')
x.classList.add('shoping__cart__item__close')
const button = document.createElement('bitton')
button.textContent = item.not
// const hr5 = document.createElement('div')
// hr5.classList.add('hr')
x.append(button)
// x.append(hr5)
tr.append(td_card)
tr.append(td_price)
tr.append(td_quantity)
tr.append(td_total)
tr.append(x)
tbody.append(tr)
})


const counters = document.querySelectorAll('.counter');
if(counters){
    counters.forEach(counter =>{
        counter.addEventListener('click',e=>{
            const target = e.target;
            if(target.closest('.counter__button')) {
                let value = parseInt(target.closest('.counter').querySelector('input').value);
                if(target.classList.contains('counter__button_plus')) {
                    value++
                   
                }else{
                    --value
                }
                if(value <= 0){
                    value = 0
                }
                // else{
                // }
                if(value >= 10){
                    value = 10
                }
                // else{
                // }
                target.closest('.counter').querySelector('input').value = value
                 
                
                
            }
        })
    })
}
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