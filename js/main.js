import { setItemsWidth, handleActiveMenu } from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
  const categoriesWrapps = document.querySelectorAll('.main__category');
  const sidebar = document.querySelector('.sidebar');

  let isOpen = false;
  
  setItemsWidth(categoriesWrapps);
  
  window.addEventListener('resize', () => {
    setItemsWidth(categoriesWrapps);
  });
  
  document.addEventListener('click', e => {
    handleActiveMenu(e, sidebar, isOpen);
  });
});