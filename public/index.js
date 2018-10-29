'use strict';

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const body = document.getElementsByTagName('body');
  const setBodySize = (() => {
    body[0].style.width = windowWidth + 'px';
    body[0].style.height = windowHeight + 'px';
  })();

/*
회전목마
auto
마우스오버 멈추기
할머니, 아이, 남, 녀, 커플
각각 애니메이션
오르곤 노래
*/