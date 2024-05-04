const slider = document.querySelectorAll(".image");
let counter = 0;

slider.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});

const goNext = () => {
  if (counter < slider.length - 1) {
    counter++;
  } else if (counter === slider.length - 1) {
    counter = 0;
  }

  sliderImg();
};
const goPrev = () => {
  if (counter <= 0) {
    counter = slider.length;
  }
  counter--;

  sliderImg();
};

const sliderImg = () => {
  slider.forEach((img) => {
    // console.log(slider[slider.length - 1]);
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
};
