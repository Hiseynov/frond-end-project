// first drop menu
const categories = document.querySelector(".main__container--left--categories");
const category = document.querySelector(".main__container--left--category");

const categoryy = () => {
  category.classList.toggle("hidden");
};
categories.addEventListener("click", categoryy);

// first scrool

const sliders = document.querySelector(".categories__container--sliders");

const slides = [
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg",
    text: "Fresh Fruits",
    id: "Fresh Food",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg",
    text: "Fresh Fruit",
    id: "Orange",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg",
    text: "Fresh Fruits",
    id: "Vegetables",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg",
    text: "Dried Fruit",
    id: "Fastfood",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg",
    text: "Drinks Fresh",
    id: "Fresh Food",
  },

  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg",
    text: "Dried Fruit",
    id: "Fastfood",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg",
    text: "Drink Fruit",
    id: "Fresh Food",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg",
    text: "Bananes Fruit",
    id: "Orange",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg",
    text: "Fruits Drink",
    id: "Vegetables",

  },
];
const filter_sliders = [
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Orange",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-2.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Fresh Food",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Vegetables",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-4.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Fastfood",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-2.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Fresh Food",
  },

  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-6.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Fastfood",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-7.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Fresh Food",
  },
  {
    url: "https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg",
    text: "Crab Pool Security",
    many: '$30.00',
    id: "Orange",
  },
];
let filterContent = filter_sliders;
const tabs = [
  {
    id: "All",
    num: 5
  },
  {
    id: "Fresh Food",
    num: 1,
  },
  {
    id: "Orange",
    num: 2,
  },
  {
    id: "Fastfood",
    num: 3,
  },
  {
    id: "Vegetables",
    num: 4,
  },
];
const gallery = document.querySelector(".gallery_filter");
const createGallery = () => {
  gallery.innerHTML = "";

  filterContent.map((item) => {
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
};
createGallery();

const filter_categories = document.querySelector(".filter-categories");
const filter = () => {
  tabs.map((tab) => {
    // tab.classList.toggle('.underlin')
    const tabB = document.createElement("li");
    tabB.innerText = tab.id;
    filter_categories.append(tabB);
    tabB.addEventListener("click", () => {

      if (tab.id == "All") {
        filterContent = filter_sliders;
        createGallery();
      } else {
        filterContent = filter_sliders.filter((x) => x.id == tab.id);
        console.log(filterContent);
        createGallery();
      }
    });
  });
};
filter();

const getItems = async () => {
  slides.map((data) => {
    // console.log(data)
    const item = document.createElement("div");
    item.classList.add("item");
    const photo = document.createElement("div");
    photo.classList.add("item-photo");
    item.append(photo);

    const image = document.createElement("img");
    image.setAttribute("src", data.url);
    // item.style.backgroundImage = `url(${data.url})`
    photo.append(image);

    const titleMain = document.createElement("h2");
    const link = document.createElement("a");
    link.href = "";
    link.style.color = "black";
    link.textContent = data.text;
    titleMain.append(link);
    item.append(titleMain);
    sliders.append(item);
  });
};

getItems();

function dis() {
  const scrool = [...document.querySelectorAll(".item")];
  console.log("scrool", scrool);
  var len = scrool.length;
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  console.log(len);

  let counter = 0;
  var infinite = true;
  scrool.map((item, index) => {
    item.style.left = index * 0 + "%";
  });

  next.addEventListener("click", () => {
    console.log("counter", counter);
    infinite = false;
    if (Math.ceil(len - 3 / 1) === counter) {
      counter = 0;
    } else {
      counter++;
    }

    scrool.map((item, index) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  });

  prev.addEventListener("click", () => {
    infinite = false;
    if (counter === 0) {
      counter = Math.ceil(len - 3 / 1);
    } else {
      counter--;
    }
    scrool.map((item, index) => {
      item.style.transform = `translateX(-${counter * 100}%)`;
    });
  });

  setInterval(() => {
    if (infinite) {
      if (Math.ceil(len - 3 / 1) === counter) {
        counter = 0;
      } else {
        counter++;
      }
      scrool.map((item, index) => {
        item.style.transform = `translateX(-${counter * 100}%)`;
      });
    } else {
      infinite = true;
    }
  }, 1500);
}
dis();

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
const createSlides = (num) => {
  const latestCarusel = document.querySelector(`.carousel-${num}`)
  for (let i = 0; i < 6; i++) {
    const slides = document.createElement('ul')
    slides.classList.add(`per-slide-${num}`)
    scrools.map(item => {
      const a = document.createElement('a')
      a.href = '' 
      const li = document.createElement("li")
      li.classList.add(`per-item-${num}`)
      const div = document.createElement('div')
      div.classList.add(`per-div-${num}`)
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
}
createSlides(1)
createSlides(2)
createSlides(3)
const slidersAll = [...document.querySelectorAll(".carousel")]

slidersAll.map((item, index) => {
  const ltsPrev1 = document.querySelector('.lts-prev-' + (index + 1) )
  const ltsNext1 = document.querySelector('.lts-next-' + (index + 1) )
  const perSlides1 = document.querySelectorAll('.per-slide-' + (index + 1) )
  const len = perSlides1.length-1;
  let counter = 0

  perSlides1.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`
  })
  const moveSlide = () => {

    perSlides1.forEach((slide, index) => {
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

})
