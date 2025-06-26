let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const imgSrc = imgElement.src;
  const allImgs = document.querySelectorAll(".gallery-item img");
  images = Array.from(allImgs);
  currentIndex = images.findIndex(img => img.src === imgSrc);

  document.getElementById("lightbox-img").src = imgSrc;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
