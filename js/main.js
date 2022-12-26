import { appendCategories, appendItems, appendLinks, appendTechnologies, 
  getData, handleActiveMenu, checkThemeMode, handleThemeMode,
  addToBodyScrollClass, showActivLinkOnScroll } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const modeBtn = document.querySelector('.sidebar__btn');
  const navbarLinks = document.querySelectorAll('.sidebar__link');

  main.innerHTML = `
    <h1 
      style="text-align: center; padding-top: 50px"
    >
      Loading...
    </h1>
  `;

  getData('./data/data.json')
  .then(res => {
    main.innerHTML = '';

    let itemsArray = [];
    let linksArray = [];
    let technologiesArray = [];

    res.forEach(({title, items}) => {
      appendCategories(main, title);
      itemsArray.push(items);
    });

    const itemsWrapps = document.querySelectorAll('.main__items');
    
    itemsArray.forEach((items, index) => {
      items.forEach(({img, name, description, links, technologies}) => {
        appendItems(itemsWrapps[index], img, name, description);
        linksArray.push(links);
        technologiesArray.push(technologies);
      });
    });

    const linksWrapps = document.querySelectorAll('.item__links');
    const technologiesWrapps = document.querySelectorAll('.item__technologies');
    
    linksArray.forEach((links, index) => {
      links.forEach(({link ,icon, linkName}) => {
        appendLinks(linksWrapps[index], link, icon, linkName);
      });
    });
    
    technologiesArray.forEach((technologies, index) => {
      technologies.forEach(technology => {
        appendTechnologies(technologiesWrapps[index], technology);
      });
    });

    const cotegoriesWrapps = document.querySelectorAll('.main__category');
    
    cotegoriesWrapps.forEach(wrapp => {
      wrapp.id = wrapp.children[0]
        .textContent
        .split(' ')
        .join('-')
        .toLowerCase();   
    }); // set id cotegoriesWrapps 
      
    showActivLinkOnScroll(cotegoriesWrapps, navbarLinks);

    window.addEventListener('resize', () => {
      showActivLinkOnScroll(cotegoriesWrapps, navbarLinks);
    });

    window.addEventListener('scroll', () => {
      addToBodyScrollClass();
      showActivLinkOnScroll(cotegoriesWrapps, navbarLinks);
    });
  })
  .catch(err => console.error(err));
 
  checkThemeMode(modeBtn);
  addToBodyScrollClass();

  document.addEventListener('click', e => {
    handleActiveMenu(e);
    handleThemeMode(e, modeBtn);
  });
});

