import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function setImage() {
  const imageUrl = document.getElementById("imageUrl");
  const imageWidth = document.getElementById("imageWidth");
  // const imageHeight = document.getElementById("imageHeight");
  const imageBorder = document.getElementById("imageBorder");
  const imageBorderColor = document.getElementById("imageBorderColor");
  const image = document.getElementById("image");

  if (imageUrl.value) {
    image.src = imageUrl.value;
    image.style.width = imageWidth.value + "px";
    // image.style.height = imageHeight.value  + "px";

    if (imageBorder.value > 0) {
      image.style.border = "solid";
      image.style.borderWidth = imageBorder.value + "px";
      image.style.borderColor = imageBorderColor.value;
    }
    else {
      image.style.border = "";
    }
  }
}

function darkMode() {
  document.body.classList.toggle("dark-mode");
}

function init() {
  document.getElementById("imageSet").addEventListener("click", setImage);
  document.getElementById("darkMode").addEventListener("click", darkMode);

  // image.src = "public/cica.jpeg";
}

document.addEventListener("DOMContentLoaded", init);