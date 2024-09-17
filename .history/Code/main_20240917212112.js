$(document).ready(function () {
  $(".project__link").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true, //dấu chấm chuyển ảnh ở dưới
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//scroll
var animationElements = document.querySelectorAll(".show-on-scroll");
function toggleAnimationElementInWindow(element) {
  // getClientRects lấy ra tọa độ của diện tích thẻ đó , đây là domlist nên để là vị trí 0
  var rect = element.getClientRects()[0];
  // lấy chiều cao màn hình
  var heightScreen = window.innerHeight;
  // check xem element co ben trong man hinh hay khong
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    // ben trong
    element.classList.add("start");
  } else {
    //ben ngoai
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElementInWindow(el);
  });
}
window.onscroll = checkAnimation;

// loading
// window.onload = function () {
//   var loadingScreen = document.getElementById("loading");
//   var container = document.querySelector(".container");

//   setTimeout(function () {
//     loadingScreen.style.display = "none"; // Ẩn màn hình loading
//     container.style.display = "block"; // Hiển thị nội dung trang
//   }, 2000); // Thời gian delay (2000 ms = 2 giây)
// };
