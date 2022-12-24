export const setItemsWidth = wrapps => {
  const itemWidth = [];
  
  wrapps.forEach(wrapp => {
    const childrens = wrapp.querySelectorAll('.item');
  
    if (childrens.length >= 3) {
      childrens.forEach(el => itemWidth[0] = el.offsetWidth);
    }
  
    if (childrens.length < 3) {
      childrens.forEach(el => el.style.width = itemWidth[0] + 'px');
    }
  });
};