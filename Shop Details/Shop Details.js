const categories = document.querySelector(".main__container--left--categories");
const category = document.querySelector(".main__container--left--category");

const categoryy = () => {
  category.classList.toggle("hidden");
};
categories.addEventListener("click", categoryy);

const counters = document.querySelectorAll('.counter');
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

if(counters){
    counters.forEach(counter =>{
        counter.addEventListener('click',e=>{
            const target = e.target;
            if(target.closest('button')) {
                let value = parseInt(target.closest('.counter').querySelector('input').value);
                if(target.classList.contains('plus')) {
                    value++
                   
                }else{
                    --value
                }
                if(value <= 0){
                    value = 0
                    minus.style.cursor = 'auto'
                }
                else{
                  minus.style.cursor = 'pointer'
                }
                if(value >= 10){
                    value = 10
                     plus.style.cursor = 'auto'
                }
                else{
                  plus.style.cursor = 'pointer'
                }
                target.closest('.counter').querySelector('input').value = value
                 
                
                
            }
        })
    })
}

const filter_sliders = [
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-2.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-4.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },

];
const gallery = document.querySelector('.filter__galery')
filter_sliders.map((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("filter-item");

  const img = document.createElement("img");
  img.src = item.url;

  const SpanDiv = document.createElement("div");
  SpanDiv.classList.add("filter-text");
  const titleMain = document.createElement("h2");
  const link = document.createElement("a");
  link.href = "";
  link.style.color = "black";
  link.textContent = item.text;
  const span = document.createElement('span')
  span.textContent = item.many
  const ul = document.createElement('ul')
  ul.classList.add('filter__icons')
  const li_1 = document.createElement('li')
  const a_1 = document.createElement('a')
  a_1.href = ''
  const i_1 = document.createElement('i')
  i_1.classList.add('fa-solid')
  i_1.classList.add('fa-heart')
  const li_2 = document.createElement('li')
  const a_2 = document.createElement('a')
  a_2.href = ''
  const i_2 = document.createElement('i')
  i_2.classList.add('fa-solid')
  i_2.classList.add('fa-retweet')
  const li_3 = document.createElement('li')
  const a_3 = document.createElement('a')
  a_3.href = ''
  const i_3 = document.createElement('i')
  i_3.classList.add('fa-solid')
  i_3.classList.add('fa-cart-shopping')
  a_1.append(li_1)
  a_2.append(li_2)
  a_3.append(li_3)
  li_1.append(i_1)
  li_2.append(i_2)
  li_3.append(i_3)
  ul.append(a_1)
  ul.append(a_2)
  ul.append(a_3)
  itemDiv.append(img);
  itemDiv.append(ul)
  titleMain.append(link)
  SpanDiv.append(titleMain)
  SpanDiv.append(span)
  itemDiv.append(SpanDiv);
  gallery.append(itemDiv)



});

const link = [...document.querySelectorAll('.link')]
console.log(link);
const textC = [...document.querySelectorAll('.tab')]
console.log(textC);
link.map(item=>{
  item.addEventListener('click', e=> {
    link.map(x=> x.classList.remove('active'))
    e.target.classList.add('active')
     const selected = (e.target.getAttribute('id'))

    textC.map(x=> x.classList.add('hiddenActive') )
    const visible = textC.find(x=> x.getAttribute('targettab')== selected)
    visible.classList.remove('hiddenActive')
  } )


})

const rightC = document.querySelector('.topMain__right--container')
const Photo = [
  {
    url: 'https://preview.colorlib.com/theme/ogani/img/product/details/product-details-4.jpg'
  }
]
const scroolC = [
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-1.jpg'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-2.jpg'
  },  
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-3.jpg'
  }, 
   {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-4.jpg'
  },
    {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-1.jpg'
  },
    {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-2.jpg'
  },
    {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-3.jpg'
  },
    {
    url:'https://preview.colorlib.com/theme/ogani/img/product/details/thumb-4.jpg'
  },
]
const first = document.createElement('div')
first.classList.add('firstCard')
Photo.map(index =>{
  
  const img = document.createElement('img')
  img.src = index.url
  img.setAttribute('id', 'main-photo')
  first.append(img)
  rightC.append(first)
})
const cardContainer = document.createElement('div')
cardContainer.classList.add('cardContainer')
scroolC.map(item =>{
  
  const card = document.createElement('div')
  card.classList.add('card')
  const imgCard = document.createElement('img')
  imgCard.src = item.url
  card.append(imgCard)
  cardContainer.append(card)
  rightC.append(cardContainer)
})
const scroolCards = [...document.querySelectorAll('.card')]
scroolCards.map((item, index) => {
  item.style.left = index * 25 + "%";
});
var len = scroolCards.length-1
var counter = 0

let main = Photo[0].url
setInterval(() => {
    if (Math.ceil(len / 1.5) === counter) {
      counter = 0;
    } else {
      counter++;
    }
    scroolCards.map((item, index) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
      
    });
}, 2000);
scroolCards.map(data=>{
  // console.log(data);
  data.addEventListener('click',()=>{
    main = (data.children[0].src)
    const photoMain = document.getElementById('main-photo')
    photoMain.setAttribute('src', main)

  
  })
})

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
  const localSoan = JSON.parse(localStorage.getItem('users'))
 popActiv.textContent = localSoan[localSoan.length-1].login;
})