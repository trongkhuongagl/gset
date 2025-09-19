
if (document.querySelector('.js-topTab') != null) {
  const tabItems = document.querySelectorAll('.p-topRoot__tabItem');
  
    tabItems.forEach((tabItem) => {
    tabItem.addEventListener('click', () => {
      tabItems.forEach((t) => {
        t.classList.remove('active');
      });
      const tabPanels = document.querySelectorAll('.p-topRoot__tabPanel');
      tabPanels.forEach((tabPanel) => {
        tabPanel.classList.remove('active');
      });
      tabItem.classList.add('active');

      const tabIndex = Array.from(tabItems).indexOf(tabItem);
      tabPanels[tabIndex].classList.add('active');
    });
  });
}

