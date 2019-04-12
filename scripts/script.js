import { studentInfo } from "./studentInfo.js";
import { formattedStudentInfo } from "./formattedStudentInfo.js";

const wrapper = document.querySelector(".wrapper");
const cardTop = document.querySelector(".card--top");
const cardBottom = document.querySelector(".card--bottom");
const nextBtn = document.querySelector(".next--btn");
const infoBtn = document.querySelector(".info--btn");
const prevBtn = document.querySelector(".prev--btn");

function createContent(obj) {
  let {
    src,
    firstName,
    lastName,
    title,
    nationality,
    alt,
    favoriteQuote,
    joinedOn,
    longTermVision,
    motivatesMe,
    skills,
    whySoftwareDeveloper
  } = obj;

  cardTop.innerHTML = `<div class="card--img-box"
         >
            <img class="card--img" src="assets/images/${src}" alt="${alt} style="width=50%"/>

            </div>`;
  cardBottom.innerHTML = `<div class="info-text">
                <p>${firstName} ${lastName}</p>
                <p>${title}</p>
                <p><span class="material-icons icon">outlined_flag</span> ${nationality}</p>
                <p> ${skills}</p>
                <p> ${whySoftwareDeveloper}</p>
                <p>Vision: ${longTermVision}</p>
                <p> ${motivatesMe}</p>
                <p> ${favoriteQuote}</p>
                <p>${joinedOn}</p>
                </div>`;

  return obj;
}

// shows a default user profile
function showData(index) {
  return createContent(formattedStudentInfo[index]);
}

let index = 0;
showData(index);

nextBtn.addEventListener("click", () => {
  console.log(index);
  if (index < formattedStudentInfo.length - 1) {
    index = index + 1;
    showData(index);
  } else {
    index = 0;
    showData(index);
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index = index - 1;
    showData(index);
  } else if (index == formattedStudentInfo.length) {
    index = index - 1;
    showData(index);
  } else {
    index = formattedStudentInfo.length - 1;
    showData(index);
    index = index - 1;
  }
});

// ui events & handlers
const { log } = console;
cardBottom.classList.add("hidden");

const showInfoFn = (e) => {
  // show Bottom, by removing hiddenClass
  const cardImg = document.querySelector(".card--img");
  if (cardBottom.classList.contains("hidden")) {
    cardBottom.classList.remove("hidden");
    cardImg.style.width = "10vw";
  } else {
    cardBottom.classList.add("hidden");
    cardImg.style.width = "50%";
  }
};
infoBtn.addEventListener("click", showInfoFn);

/* temporary */
const reloadPage = (timeDelay) => {
  setInterval(() => {}, timeDelay);
};

reloadPage(3000);


