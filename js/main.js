import { createCategory, createItem, createLinks, createTechnology, 
  getData, handleActiveMenu, checkThemeMode, handleThemeMode } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.main');
  const modeBtn = document.querySelector('.sidebar__btn');

  getData('./data/data.json')
    .then(res => {
      let linksArray = [];
      let technologiesArray = [];

      res.forEach(({title, items}, index) => {
        createCategory(main, title);

        const itemsWrapps = document.querySelectorAll('.main__items');

        items.forEach(({img, name, description, links, technologies}) => {
          createItem(itemsWrapps[index], img, name, description);
          linksArray.push(links);
          technologiesArray.push(technologies);
        });
      });

      const linksWrapps = document.querySelectorAll('.item__links');
      const technologiesWrapps = document.querySelectorAll('.item__technologies');

      linksArray.forEach((links, index) => {
        links.forEach(({link ,icon, linkName}) => {
          createLinks(linksWrapps[index], link, icon, linkName);
        });
      });

      technologiesArray.forEach((technologies, index) => {
        technologies.forEach(technology => {
          createTechnology(technologiesWrapps[index], technology);
        });
      });
    })
    .catch(err => {
      console.error(err);
    });

  checkThemeMode(modeBtn);

  document.addEventListener('click', e => {
    handleActiveMenu(e);
    handleThemeMode(e, modeBtn);
  });
});