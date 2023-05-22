import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__name">${resto.name}</h2>
  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City : </h4>
    <p>${resto.city}</p>
    <h4>Description : </h4>
    <p>${resto.description}</p>
    <h4>Rating :</h4>
    <p>⭐️ ${resto.rating}</p>
  </div>
`;

const createRestoItemTemplate = (restos) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restos.name}"
           src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restos.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restos.id}">${restos.name}</a></h3>
      <p>${restos.description.slice(0, 150)}</p>
    </div>
  </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
