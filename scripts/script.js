import {
  studentInfo
} from "./studentInfo.js";
import {
  formattedStudentInfo
} from "./formattedStudentInfo.js";

const wrapper = document.querySelector(".wrapper");
const cardTop = document.querySelector(".card--top");
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

  console.log(skills);
  

  cardTop.innerHTML = `
          <div class="card--img-box">
            <img class="card--img" src="assets/images/${src}" alt="${alt}"/>
            <div class="info-text hidden">
                <p class="info-name"><span>${firstName} ${lastName}</span></p>
                <p class="info-title"><em>${title}</em></p>
                <p class="info-country"><span class="material-icons icon flag">outlined_flag</span> ${nationality}</p>
                <p class="info">Skills: <br/><span class="info-white">${skills}</span></p>
                <p class="info info-why">Why software developer: <br/> <span class="info-white">${whySoftwareDeveloper}</span></p>
                <p class="info info-vision">Vision: <br/> <span class="info-white">${longTermVision}</span></p>
                <p class="info info-motivates">Motivation: <br/> <span class="info-white">${motivatesMe}</span></p>
                <p class="info info-fav">Favorite quote: <br/> <span class="info-white">${favoriteQuote}</span></p>
                <p class="info info-join">Joint date: <br/> <span class="info-white">${joinedOn}</span></p>
                </div>
            </div>`


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
const {
  log
} = console;

const showInfoFn = e => {
  // show Bottom, by removing hiddenClass
  const infoText = document.querySelector('.info-text');
  if (infoText.classList.contains("hidden")) {
    infoText.classList.remove("hidden");
  } else {
    infoText.classList.add("hidden");
  }
};
infoBtn.addEventListener("click", showInfoFn);

/* temporary */
const reloadPage = (timeDelay) => {
  setInterval(() => {}, timeDelay);
};

reloadPage(3000);





(function () {

  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  Slideshow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slider-wrapper");
      this.slides = this.el.querySelectorAll(".slide");
      this.previous = this.el.querySelector(".slider-previous");
      this.next = this.el.querySelector(".slider-next");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function () {
      var self = this;
      self.timer = setInterval(function () {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);

      }, 4500);
    },
    stopStart: function () {
      var self = this;
      self.el.addEventListener("mouseover", function () {
        clearInterval(self.timer);
        self.timer = null;

      }, false);
      self.el.addEventListener("mouseout", function () {
        self.action();

      }, false);
    }


  };

  document.addEventListener("DOMContentLoaded", function () {

    var slider = new Slideshow("#main-slider");

  });


})();