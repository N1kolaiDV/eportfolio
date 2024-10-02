const span = document.querySelector('.span_menu');
const menu = document.querySelector('.menu');
const homebtn = document.querySelector('.home_btn')

span.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

homebtn.addEventListener('click', ()=> {
  menu.classList.add('hide');
})