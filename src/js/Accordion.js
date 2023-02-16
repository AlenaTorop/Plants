const price = () => {
const acc = document.querySelectorAll('.accordion-container__tab');
const btnsAccordion = document.querySelectorAll('.btn-accordion');
const tabContent = document.querySelectorAll('.tab-content');

  for(let i = 0; i< btnsAccordion.length; i++) {
    btnsAccordion[i].addEventListener('click', () => {
      if(!tabContent[i].classList.contains('open')) {
        addTab(i);
        addBtns(i);
        addStyle(i);
      } else {
        tabContent[i].classList.remove('open');
        btnsAccordion[i].classList.remove('rotate');
        acc[i].classList.remove('open');
      }
    })
  }

  const addTab = (s) => {
    tabContent.forEach(el => {
      el.classList.remove('open');
    })
    tabContent[s].classList.add('open');
  }

  const addBtns = (s) => {
    btnsAccordion.forEach(el => {
      el.classList.remove('rotate');
    })
    btnsAccordion[s].classList.add('rotate');
  }

  const addStyle = (s) => {
    acc.forEach(el => {
      el.classList.remove('open');
    })
    acc[s].classList.add('open');
  }
}


export { price };