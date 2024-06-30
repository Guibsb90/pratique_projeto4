document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');

  //seção faq acordion
  for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', abreOuFechaResposta);
  }
});


function abreOuFechaResposta(elemento){
  const classe = 'faq__questions__item--is-open';
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}


