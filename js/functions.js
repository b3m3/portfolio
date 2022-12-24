export const createCategory = (wrapp, title) => {
  const div = document.createElement('div');
  div.classList.add('main__category');

  div.innerHTML = `
    <h2>${title}</h2>
    <div class="main__items"></div>
  `;

  wrapp.append(div);
};

export const createItem = (wrapp, img, name, description) => {
  const div = document.createElement('div');
  div.classList.add('item');

  div.innerHTML = `
    <div class="item__info">
      <div class="item__image">
        <img src="./img/${img}" alt="img">
      </div>
      <div class="item__body">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="item__links">
        </div>
      </div>
    </div>
    
    <ul class="item__technologies">
    </ul>
  `;

  wrapp.append(div);
};

export const createLinks = (wrapp, link, icon, linkName) => {
  const a = document.createElement('a');
  a.href = link;
  a.target= "_blank";

  a.innerHTML = `
    <img src="./ico/${icon}" alt="svg" 
    <span>${linkName}</span>
  `;

  wrapp.append(a);
};

export const createTechnology = (wrapp, name) => {
  const li = document.createElement('li');
  li.textContent = name;

  wrapp.append(li);
};

export const getData = async url => {
  const response = await fetch(url);
  return await response.json();
};

export const handleActiveMenu = (event, selector) => {
  const t = event.target;
  const contains = clas => t.classList.contains(clas);

  if (t.closest('.menu-hamburger')) {
    selector.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (contains('sidebar__item') || t.closest('.sidebar__close')) {
    selector.classList.remove('active');
    document.body.style.overflow = '';
  }
};