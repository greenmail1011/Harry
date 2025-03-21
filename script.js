function changeColor() {
  const colors = ['#ffe4e1', '#e0ffff', '#e6e6fa', '#fffacd'];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.card').style.backgroundColor = random;
}