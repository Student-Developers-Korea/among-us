document.querySelector('a[href="/find"]').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('nick', document.querySelector('.nick').innerHTML)
  location.href = `/find`;
});

document.querySelector('.nick').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

let nick = [
  [
    '잘생긴',
    '재밌는',
    '웃긴',
    '대단한',
    '예쁜',
    '용감한',
    '엄청난',
  ],
  [
    '임포스터',
    '개발자',
    '덕후',
    '남고생',
    '초딩',
    '샌즈',
    '파피루스',
    '아치 리눅스',
  ],
]

let x = 0;
setInterval(() => {
  x += 1;
  document.body.style.setProperty('background-position', `${x}px 0`);
  if (x > 4000) {
    x = 0;
  }
}, 20);
