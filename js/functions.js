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