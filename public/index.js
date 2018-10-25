'use strict';

const init = () => {
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

init();







/*
회전목마
auto
마우스오버 멈추기
할머니, 아이, 남, 녀, 커플
각각 애니메이션
오르곤 노래
*/