const btnsContainer = document.querySelector('.service__btns');
const btn = document.querySelectorAll('.btn_colored');
const cardImage = document.querySelectorAll('.card');

const activeBtns = (element) => {
  btn.forEach(el => {
    el.classList.remove('active-btns');
  })
  element.classList.add('active-btns');
}

const addBlur = () => {
  btnsContainer.addEventListener('click', (e) => {
    const target = e.target;
    if(!target.classList.contains('active-btns')) {
      activeBtns(target);
      cardImage.forEach(el => {
        if(target.dataset.location !== el.dataset.location) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      })
    } else {
      cardImage.forEach(el => {
        el.classList.remove('active');
      })
      target.classList.remove('active-btns');
    }
  })
}



export { addBlur};