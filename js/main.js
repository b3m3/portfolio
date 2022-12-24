import { setItemsWidth } from "./functions.js";


document.addEventListener("DOMContentLoaded", () => {
  const categoriesWrapps = document.querySelectorAll('.main__category');
  
  setItemsWidth(categoriesWrapps);
  
  window.addEventListener('resize', () => {
    setItemsWidth(categoriesWrapps);
  });
});