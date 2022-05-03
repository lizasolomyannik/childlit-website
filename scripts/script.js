const open_marshak = document.getElementById('open_marshak');
const modal_container_marshak = document.getElementById('modal_container_marshak');
const close_marshak = document.getElementById('close_marshak');

const open_barto = document.getElementById('open_barto');
const modal_container_barto = document.getElementById('modal_container_barto');
const close_barto = document.getElementById('close_barto');

const open_chukovskiy = document.getElementById('open_chukovskiy');
const modal_container_chukovskiy = document.getElementById('modal_container_chukovskiy');
const close_chukovskiy = document.getElementById('close_chukovskiy');

const open_bianki = document.getElementById('open_bianki');
const modal_container_bianki = document.getElementById('modal_container_bianki');
const close_bianki = document.getElementById('close_bianki');

const open_zhitkov = document.getElementById('open_zhitkov');
const modal_container_zhitkov = document.getElementById('modal_container_zhitkov');
const close_zhitkov = document.getElementById('close_zhitkov');

open_marshak.addEventListener('click', () => {
    modal_container_marshak.classList.add('show');
});

close_marshak.addEventListener('click', () => {
    modal_container_marshak.classList.remove('show');
});

open_barto.addEventListener('click', () => {
  modal_container_barto.classList.add('show');
});

close_barto.addEventListener('click', () => {
  modal_container_barto.classList.remove('show');
});

open_chukovskiy.addEventListener('click', () => {
  modal_container_chukovskiy.classList.add('show');
});

close_chukovskiy.addEventListener('click', () => {
  modal_container_chukovskiy.classList.remove('show');
});

open_bianki.addEventListener('click', () => {
  modal_container_bianki.classList.add('show');
});

close_bianki.addEventListener('click', () => {
  modal_container_bianki.classList.remove('show');
});

open_zhitkov.addEventListener('click', () => {
  modal_container_zhitkov.classList.add('show');
});

close_zhitkov.addEventListener('click', () => {
  modal_container_zhitkov.classList.remove('show');
});

const open_sibiryak = document.getElementById('open_sibiryak');
const modal_container_sibiryak = document.getElementById('modal_container_sibiryak');
const close_sibiryak = document.getElementById('close_sibiryak');

open_sibiryak.addEventListener('click', () => {
  modal_container_sibiryak.classList.add('show');
});

close_sibiryak.addEventListener('click', () => {
  modal_container_sibiryak.classList.remove('show');
});

const open_pushkin = document.getElementById('open_pushkin');
const modal_container_pushkin = document.getElementById('modal_container_pushkin');
const close_pushkin = document.getElementById('close_pushkin');

open_pushkin.addEventListener('click', () => {
  modal_container_pushkin.classList.add('show');
});

close_pushkin.addEventListener('click', () => {
  modal_container_pushkin.classList.remove('show');
});

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  };
  