//References:
const imgColletion = document.querySelector(".img");
const buttonLeft = document.querySelector(".icon1");
const buttonRight = document.querySelector(".icon2");

//array with link elements:
const multipleImg = [
  'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

imgColletion.src = multipleImg[0]; 

let currentImageIndex = 0;

buttonRight.addEventListener('click', () => { //logic button right
  currentImageIndex = (currentImageIndex + 1) % multipleImg.length;
  imgColletion.src = multipleImg[currentImageIndex];
});


buttonLeft.addEventListener('click', () =>{ //logic button left
    currentImageIndex = (currentImageIndex - 1 + multipleImg.length) % multipleImg.length;
    imgColletion.src = multipleImg[currentImageIndex];
});
  