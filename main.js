var i = 1;
var txt = "web developer";
var speed = 100;
var reverse = false;

function typeWriter() {
  if (i < 1) {
    reverse = false;
    i = 1;
  }
  if (i === txt.length) {
    reverse = true;
    i--;
  }
  if (reverse) {
    document.getElementById("passion").innerHTML = txt.substring(0, i);
    i--;
  } else {
    var char = txt.charAt(i);
    if (i === txt.length - 1) {
      char = '<span style="color: red;">' + char + "</span>";
    }
    document.getElementById("passion").innerHTML += char;
    i++;
  }
  setTimeout(typeWriter, speed);
}

typeWriter();
const boxInfo = [
  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },

  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },

  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },

  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },

  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },

  {
    heading: "school date",
    subHeading: "college degree",
    collegeName: "college name",
    blocker: "lorewqzmmzqmzq zqwomzqmzoqz zqmzqmzq",
  },
];

const boxContainer = document.getElementById("boxes");
const createElementWithCLass = (type, className) => {
  const ele = document.createElement(type);
  ele.classList.add(className);
  return ele;
};

const infoAdder = () => {
  heading.innerText = `${boxes.heading}`;
  subHeading.innerText = `${boxes.subHeading}`;
  collegeName.innerText = `${boxes.collegeName}`;
  blocker.innerText = `${boxes.blocker}`;
};
boxInfo.forEach((boxes) => {
  const box = createElementWithCLass("div", "box");
  const heading = createElementWithCLass("h1", "box-heading");
  const subHeading = createElementWithCLass("h3", "subheading");
  const collegeName = createElementWithCLass("span", "collegename");
  const blocker = createElementWithCLass("p", "blocker");
  heading.innerText = `${boxes.heading}`;
  subHeading.innerText = `${boxes.subHeading}`;
  collegeName.innerText = `${boxes.collegeName}`;
  blocker.innerText = `${boxes.blocker}`;
  box.append(heading, subHeading, collegeName, blocker);
  boxContainer.append(box);
});

const toggler = document.querySelector(".cross-div");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const list = navList.querySelectorAll("li");
toggler.addEventListener("click", () => {
  if (navBar.classList.contains("hider")) {
    navBar.classList.remove("hider");
    navBar.classList.add("opener");
  } else {
    navBar.classList.remove("opener");
    navBar.classList.add("hider");
  }
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    if (!li.style.color == "gold") {
      li.style.color == "gold";
    }
  });
});

const socialMedia = document.querySelectorAll(".social-media-logo");
const boxes = document.querySelectorAll(".box");
const imgs = document.querySelectorAll(".img-div");
const logs = document.querySelectorAll(".log-div");
const formSpace = document.querySelector(".form-space");
const progress = document.querySelectorAll(".progress-wrap");
const about = document.querySelector(".info-divider-two");
const imgAbout = document.querySelector(".picture-div");
const btn = document.querySelectorAll(".btn");
btn.forEach((bt) => {
  ScrollReveal().reveal(bt, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
socialMedia.forEach((social) => {
  ScrollReveal().reveal(social, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
boxes.forEach((box) => {
  ScrollReveal().reveal(box, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
imgs.forEach((img) => {
  ScrollReveal().reveal(img, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
logs.forEach((log) => {
  ScrollReveal().reveal(log, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
ScrollReveal().reveal(formSpace, {
  delay: 300,
  reset: true,
  scale: 0.9,
  opacity: 0,
});
ScrollReveal().reveal(imgAbout, {
  delay: 500,
  reset: true,
  scale: 0.9,
  opacity: 0,
});
progress.forEach((prog) => {
  ScrollReveal().reveal(prog, {
    delay: 300,
    reset: true,
    scale: 0.9,
    opacity: 0,
  });
});
ScrollReveal().reveal(about, {
  delay: 300,
  reset: true,
  scale: 0.9,
  opacity: 0,
});
const navigation = document.querySelectorAll(".navi");

const restColor = () => {
  navigation.forEach((nav) => {
    nav.style.color = "";
  });
};
navigation.forEach((nav) => {
  nav.addEventListener("click", () => {
    restColor();
    nav.style.color = "gold";
  });
});


 
