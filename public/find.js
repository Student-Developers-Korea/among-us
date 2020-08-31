if (localStorage.getItem('nick') === null) {
  alert('닉네임을 설정하세요.')
  location.href = '/'
}

const socket = io();

socket.on('connect', (data) => {
  socket.emit('create', localStorage.getItem('nick'));
});
socket.on('newRoom', (data) => {
  console.log(data);
});
