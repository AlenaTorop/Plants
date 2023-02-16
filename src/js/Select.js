import { cityDescription } from './City.js';

const select  = () => {
  const cityContainer = document.querySelector('.city');
  const cityBlock = document.querySelector('.city__container');
  const cityName = document.querySelector('.city__name');
  const citySelect = document.querySelector('.city__select');
  const cityItem = document.querySelectorAll('.city__item');

  const div = document.createElement('div');

  cityName.addEventListener('click', ()=> {

    if(!citySelect.classList.contains('visible')) {
      openList();
      selectCity();
    } else {
        closeList();
        cityName.classList.remove('open');
        cityName.textContent = 'City';
    }
    removeModal();
  })


  const openList = () => {
    cityName.classList.add('open');
    citySelect.classList.add('visible');
  }

  const closeList = () => {
    citySelect.classList.remove('visible');
  }

  const selectCity = () => {

    cityItem.forEach(el => {
      el.addEventListener('click', (e)=> {
        cityName.textContent = e.target.dataset.value;
        closeList();
        setTimeout(() => {
          addModal(el.dataset.value);
        }, 300);
      })
    })
  }

  const modal = () => {
    div.innerHTML = ``;
    div.className = 'modal';
    cityContainer.appendChild(div);
  }

  const addModal = (str) => {
    for(let i = 0; i< cityDescription.length; i++) {
      if(str === cityDescription[i].value) {
        let id = i;
        modal();
        div.className = 'modal open';
        div.innerHTML = `
        <div class="section__modal">
          <ul class="section__list">
            <li class="section__item">City: <span>${cityDescription[id].name}</span></li>
            <li class="section__item">Phone: <a href="tel: ${cityDescription[id].phone}">${cityDescription[id].phone}</a></li>
            <li class="section__item">Address: <span>${cityDescription[id].address}</span></li>
          </ul>
          <div class="btn-call"><a href="tel: ${cityDescription[id].phone}">Call us</a></div>
        </div>
        `;
      }
    }
  }

  const removeModal = () => {
    modal();
  }

}

// console.log(cityDescription)
export { select }
