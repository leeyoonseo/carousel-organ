'use strict';

const setBackground = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const body = document.getElementsByTagName('body');
    // const scene = document.getElementsByClassName('js-carousel__scene')[0];
    // console.log(scene);

    setBgSize(body);
    setBgColor(body);
    
    function setBgSize(target){
      target[0].style.width = windowWidth + 'px';
      target[0].style.height = windowHeight + 'px';
    }   

    function setBgColor(target){
      const randomColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
      target[0].style.backgroundColor = randomColor;
    }
    
    // function setScenePosition(){}
};

const setCarousel = () => {
  const carousel = document.getElementById('js-carousel__scene');
  const casouselCell = document.querySelectorAll('.carousel__cell');

};


setBackground();
var angle = 60 * 6 * -1;

// var test =   Math.round( ( 420 / 2) / Math.tan( Math.PI / 6 ) );
console.log(angle);




/*
회전목마
auto
마우스오버 멈추기
할머니, 아이, 남, 녀, 커플
각각 애니메이션
오르곤 노래
*/