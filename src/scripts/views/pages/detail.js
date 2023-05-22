import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const resto = await restaurantSource.detail(url.id);
    const restoContainer = document.querySelector('#resto');
    console.log(resto);
    restoContainer.innerHTML = createRestoDetailTemplate(resto);
  },

};

export default Detail;
