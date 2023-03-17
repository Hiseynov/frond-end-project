const categories = document.querySelector(".main__container--left--categories");
const category = document.querySelector(".main__container--left--category");

const categoryy = () => {
  category.classList.toggle("hidden");
};
categories.addEventListener("click", categoryy);

const slideValue = document.querySelector('.spanslide')
const inputslide = document.querySelector('.inputslide')
inputslide.oninput = (()=>{
  let values = inputslide.value;
  slideValue.textContent = values;
  console.log(values)
  slideValue.style.left = (values/5) + "%"
  slideValue.classList.add('show')
})
inputslide.onblur = (()=>{
  slideValue.classList.remove('show')
})

// const list = document.querySelectorAll('.slidebar__color--items li')


// list.forEach((item,index)=> {
//   const after = window.getComputedStyle(item, "::after")
//  after.color = 'red'
// })


const sliders = [
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-1.jpg',
    sale:'-20%',
    name:'Dried Fruit',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-2.jpg',
    sale:'-20%',
    name:'Vegetables',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-1.jpg',
    sale:'-20%',
    name:'Dried Fruit',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-3.jpg',
    sale:'-20%',
    name:'Dried Fruit',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-5.jpg',
    sale:'-20%',
    name:'Dried Fruit',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
  {
    url:'https://preview.colorlib.com/theme/ogani/img/product/discount/pd-6.jpg',
    sale:'-20%',
    name:'Dried Fruit',
    info:'Raisin’n’nuts',
    money:'$30.00',
    saleMoney:'$36:00'
  },
]
const swiperWrapper = document.querySelector('.swiper-wrapper')
sliders.forEach(data =>{
  // console.log(data);
  const swiperSlide = document.createElement('div')
  swiperSlide.classList.add('swiper-slide')
  const img = document.createElement('img')
  img.src = data.url
  const saleDiv = document.createElement('div')
  saleDiv.classList.add('sale-div')
  saleDiv.textContent =  data.sale
  console.log(saleDiv);
  const icon = document.createElement('ul')
  const heardIcon = document.createElement('li')
  const a3 = document.createElement('a')
  a3.href=''
  a3.classList.add('fa')
  a3.classList.add('fa-heart')
  heardIcon.append(a3)
  icon.append(heardIcon)
  
  const carooselIcon = document.createElement('li')
  const a1 = document.createElement('a')
  a1.href = ''
  a1.classList.add('fa')
  a1.classList.add('fa-retweet')
  carooselIcon.append(a1)
  icon.append(carooselIcon)

  const shopIcon = document.createElement('li')
  const a2 = document.createElement('a')
  a2.href=''
  a2.classList.add('fa')
  a2.classList.add('fa-shopping-cart')
  shopIcon.append(a2)
  icon.append(shopIcon)

  swiperSlide.append(img)
  swiperSlide.append(saleDiv)
  swiperSlide.append(icon)
  const swiperText = document.createElement('div')
  swiperText.classList.add('swiper-text')
  const spanName = document.createElement('span')
  spanName.textContent = data.name
  const h3imfo = document.createElement('h3')
  const ainfo = document.createElement('a')
  ainfo.href=""
  ainfo.textContent = data.info
  h3imfo.append(ainfo)
  const divmoney = document.createElement('div')
  divmoney.classList.add('divmoney')
  divmoney.textContent = data.money
  const spanmoney = document.createElement('span')
  console.log(spanmoney);
  spanmoney.textContent = data.saleMoney
  divmoney.append(spanmoney)
  swiperText.append(spanName)
  swiperText.append(h3imfo)
  swiperText.append(divmoney)
  swiperSlide.append(swiperText)
  swiperWrapper.append(swiperSlide)
})



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
  {
    url: "https://preview.colorlib.com/theme/ogani/img/product/product-9.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },

  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-6.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-7.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },  {
    url: "https://preview.colorlib.com/theme/ogani/img/product/product-10.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/product/product-1.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/product/product-12.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },  {
    url: "https://preview.colorlib.com/theme/ogani/img/product/product-11.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
  },
];
const gallery = document.querySelector('.sort__galery')
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



const scrools = [
  {
    url: 'https://preview.colorlib.com/theme/ogani/img/latest-product/lp-1.jpg.webp',
    text: 'Crab Pool Security',
    many: '$30.00'
  },
  {
    url: 'https://preview.colorlib.com/theme/ogani/img/latest-product/lp-2.jpg.webp',
    text: 'Crab Pool Security',
    many: '$30.00'
  },
  {
    url: 'https://preview.colorlib.com/theme/ogani/img/latest-product/lp-3.jpg.webp',
    text: 'Crab Pool Security',
    many: '$30.00'
  }
]



const latestCarusel = document.querySelector(`.carousel`)
for (let i = 0; i < 6; i++) {
  const slides = document.createElement('ul')
  slides.classList.add(`per-slide`)
  scrools.map(item => {
    const a = document.createElement('a')
    a.href = '' 
    const li = document.createElement("li")
    li.classList.add(`per-item`)
    const div = document.createElement('div')
    div.classList.add(`per-div`)
    div.classList.add('per-div')
    const head = document.createElement("h5")
    head.textContent = item.text
    const img = document.createElement("img")
    img.src = item.url
    const span = document.createElement("span")
    span.innerText = item.many
    li.append(img)
    div.append(head)
    div.append(span)
    li.append(div)
    a.append(li)
    slides.append(a)
  })
  latestCarusel.append(slides)
}
const slidersCarosel = document.querySelectorAll(".carousel")
const perSlides = document.querySelectorAll('.per-slide')
const ltsPrev1 = document.querySelector('.lts-prev-1')
const ltsNext1 = document.querySelector('.lts-next-1')
const len = perSlides.length-1;
let counter = 0


  const moveSlide = () => {

    perSlides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - counter)}%)`
    })


  }

  ltsNext1.addEventListener("click", () => {
    if( len ==counter){
      counter= 0
    }else{
      counter++
      console.log(counter);
    }
    
    moveSlide()

  })
  ltsPrev1.addEventListener("click", () => {
    if(0 ==counter){
      counter= len
    }else{
      counter--
      console.log(counter);
    }
    moveSlide()

  })

    setInterval(()=>{
      if (counter == len) {
        counter=0
      } else {
        counter++
      }
      moveSlide()
    },4000)

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