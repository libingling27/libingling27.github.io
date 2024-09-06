let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "v2-6ae8d79dbf815fb51c9543fd62a4c2a9_r.jpg") {
    myImage.setAttribute("src", "20210807224638_f6938.jpeg");
  } else {
    myImage.setAttribute("src", "v2-6ae8d79dbf815fb51c9543fd62a4c2a9_r.jpg");
  }
};
