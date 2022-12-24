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
    <span class="${icon}"></span>
    <p>${linkName}</p>
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

export const handleActiveMenu = event => {
  const t = event.target;
  const contains = clas => t.classList.contains(clas);

  if (t.closest('.menu-hamburger')) {
    document.body.classList.add('show-menu');
  }

  if (contains('sidebar__link') || t.closest('.sidebar__close')) {
    document.body.classList.remove('show-menu');
  }
};

export const checkThemeMode = button => {
  const buttonText = button.children[1];
  const buttonIcon = button.children[0];

  if (localStorage.getItem('b3m3-portfolio-theme')) {
    document.body.classList.add('dark-mode');
    buttonText.textContent = 'Light mode';
    buttonIcon.className = 'icon-light-mode';
  } else {
    document.body.classList.remove('dark-mode');
    buttonText.textContent = 'Dark mode';
    buttonIcon.className = 'icon-dark-mode';
  }
};

export const handleThemeMode = (event, button) => {
  if (event.target.closest('.sidebar__btn')) {
    if (localStorage.getItem('b3m3-portfolio-theme')) {
      localStorage.removeItem('b3m3-portfolio-theme');
    } else {
      localStorage.setItem('b3m3-portfolio-theme', 'dark');
    }
  
    checkThemeMode(button);
  }
};