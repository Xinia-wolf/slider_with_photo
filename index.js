const entities = [
    {
        city: "Rostov-on-Don LCD admiral",
        apartmentArea: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request",
        img: "images/mask-group.jpg",
        round1: "images/turned-on-round.svg",
        round2: "images/turned-off-round.svg",
        round3: "images/turned-off-round.svg",
        desktop1: "true",
        desktop2: "false",
        desktop3: "false",
    },
    {
        city: "Sochi Thieves",
        apartmentArea: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request",
        img: "images/Sochi-thieves.png",
        round1: "images/turned-off-round.svg",
        round2: "images/turned-on-round.svg",
        round3: "images/turned-off-round.svg",
        desktop1: "false",
        desktop2: "true",
        desktop3: "false",
    },
    {
        city: "Rostov-on-Don Patriotic",
        apartmentArea: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request",
        img: "images/Rostov-on-Don-Patriotic.png",
        round1: "images/turned-off-round.svg",
        round2: "images/turned-off-round.svg",
        round3: "images/turned-on-round.svg",
        desktop1: "false",
        desktop2: "false",
        desktop3: "true",
    }
];

const city = document.querySelector(".city");
const apartmentArea = document.querySelector(".apartmentArea");
const repairTime = document.querySelector(".repairTime");
const repairCost = document.querySelector(".repairCost");
const img = document.querySelector(".completed-projects__image");
const round1 = document.querySelector(".round-1");
const round2 = document.querySelector(".round-2");
const round3 = document.querySelector(".round-3");
const desktop1 = document.querySelector(".desktop-1");
const desktop2 = document.querySelector(".desktop-2");
const desktop3 = document.querySelector(".desktop-3");

const setEntity = (index) => {
    city.innerText = entities[index].city;
    apartmentArea.innerText = entities[index].apartmentArea;
    repairTime.innerText = entities[index].repairTime;
    repairCost.innerText = entities[index].repairCost;
    img.style.backgroundImage = `url(${entities[index].img})`;
    round1.style.backgroundImage = `url(${entities[index].round1})`;
    round2.style.backgroundImage = `url(${entities[index].round2})`;
    round3.style.backgroundImage = `url(${entities[index].round3})`;
    if (entities[index].desktop1 === "true") {
      desktop1.classList.add("active");
    } else {
      desktop1.classList.remove("active");
    };
    if (entities[index].desktop2 === "true") {
      desktop2.classList.add("active");
    } else {
      desktop2.classList.remove("active");
    };
    if (entities[index].desktop3 === "true") {
      desktop3.classList.add("active");
    } else {
      desktop3.classList.remove("active");
    };
};

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

prev.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = 3;
  };
  setEntity(currentIndex - 1);
  currentIndex = currentIndex - 1;
})

next.addEventListener('click', () => {
  if (currentIndex === 2) {
    currentIndex = -1;
  }
  setEntity(currentIndex + 1);
  currentIndex = currentIndex + 1;
});

round1.addEventListener('click', () => {
  city.innerText = entities[0].city;
  apartmentArea.innerText = entities[0].apartmentArea;
  repairTime.innerText = entities[0].repairTime;
  repairCost.innerText = entities[0].repairCost;
  img.style.backgroundImage = `url(${entities[0].img})`;
  round1.style.backgroundImage = `url(${entities[0].round1})`;
  round2.style.backgroundImage = `url(${entities[0].round2})`;
  round3.style.backgroundImage = `url(${entities[0].round3})`;
  desktop1.classList.add("active");
  desktop2.classList.remove("active");
  desktop3.classList.remove("active");
});

round2.addEventListener('click', () => {
  city.innerText = entities[1].city;
  apartmentArea.innerText = entities[1].apartmentArea;
  repairTime.innerText = entities[1].repairTime;
  repairCost.innerText = entities[1].repairCost;
  img.style.backgroundImage = `url(${entities[1].img})`;
  round1.style.backgroundImage = `url(${entities[1].round1})`;
  round2.style.backgroundImage = `url(${entities[1].round2})`;
  round3.style.backgroundImage = `url(${entities[1].round3})`;
  desktop1.classList.remove("active");
  desktop2.classList.add("active");
  desktop3.classList.remove("active");
});

round3.addEventListener('click', () => {
  city.innerText = entities[2].city;
  apartmentArea.innerText = entities[2].apartmentArea;
  repairTime.innerText = entities[2].repairTime;
  repairCost.innerText = entities[2].repairCost;
  img.style.backgroundImage = `url(${entities[2].img})`;
  round1.style.backgroundImage = `url(${entities[2].round1})`;
  round2.style.backgroundImage = `url(${entities[2].round2})`;
  round3.style.backgroundImage = `url(${entities[2].round3})`;
  desktop1.classList.remove("active");
  desktop2.classList.remove("active");
  desktop3.classList.add("active");
});

desktop1.addEventListener('click', () => {
  city.innerText = entities[0].city;
  apartmentArea.innerText = entities[0].apartmentArea;
  repairTime.innerText = entities[0].repairTime;
  repairCost.innerText = entities[0].repairCost;
  img.style.backgroundImage = `url(${entities[0].img})`;
  round1.style.backgroundImage = `url(${entities[0].round1})`;
  round2.style.backgroundImage = `url(${entities[0].round2})`;
  round3.style.backgroundImage = `url(${entities[0].round3})`;
  desktop1.classList.add("active");
  desktop2.classList.remove("active");
  desktop3.classList.remove("active");
});

desktop2.addEventListener('click', () => {
  city.innerText = entities[1].city;
  apartmentArea.innerText = entities[1].apartmentArea;
  repairTime.innerText = entities[1].repairTime;
  repairCost.innerText = entities[1].repairCost;
  img.style.backgroundImage = `url(${entities[1].img})`;
  round1.style.backgroundImage = `url(${entities[1].round1})`;
  round2.style.backgroundImage = `url(${entities[1].round2})`;
  round3.style.backgroundImage = `url(${entities[1].round3})`;
  desktop1.classList.remove("active");
  desktop2.classList.add("active");
  desktop3.classList.remove("active");
});

desktop3.addEventListener('click', () => {
  city.innerText = entities[2].city;
  apartmentArea.innerText = entities[2].apartmentArea;
  repairTime.innerText = entities[2].repairTime;
  repairCost.innerText = entities[2].repairCost;
  img.style.backgroundImage = `url(${entities[2].img})`;
  round1.style.backgroundImage = `url(${entities[2].round1})`;
  round2.style.backgroundImage = `url(${entities[2].round2})`;
  round3.style.backgroundImage = `url(${entities[2].round3})`;
  desktop1.classList.remove("active");
  desktop2.classList.remove("active");
  desktop3.classList.add("active");
});

