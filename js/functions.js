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

  a.innerHTML = `
    <img src="./ico/${icon}" alt="svg">
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

export const handleActiveMenu = (event, selector, variable) => {
  const t = event.target;
  selector.classList.remove('active');
  
  if (t.closest('.menu-hamburger')) {
    variable = true;
  }

  if (t.classList.contains('sidebar__item') || t.closest('.sidebar__close')) {
    variable = false;
  }

  if (variable) {
    selector.classList.add('active');
  }
};