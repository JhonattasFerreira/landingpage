const navItems = [{name: 'Rooms', id:'rooms', elementNav: null, elementSection: null}, 
                  {name: 'Services', id:'services', elementNav: null, elementSection: null}, 
                  {name: 'Special Offers', id:'special-offers', elementNav: null, elementSection: null}, 
                  {name: 'Reviews', id:'reviews', elementNav: null, elementSection: null}];

const createNavigation = (navItems) => {
  const navigation = document.getElementById('js-nav-list');

  navItems.forEach(({name, id}, index) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');

    aElement.textContent = name;
    aElement.href = `#${id}`;

    liElement.appendChild(aElement);
    navigation.appendChild(liElement);

    navItems[index].elementNav = aElement;
    navItems[index].elementSection = document.getElementById(id);
  });
};

createNavigation(navItems);


let navList = document.getElementById('js-nav-list');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  navList.classList.toggle('active');
});


const activatedNavList = () => {
  let windowY = window.pageYOffset;

  navItems.forEach(({elementSection, elementNav}) => {
    const elementSectionTop = elementSection.offsetTop - 250;
    const elementSectionContent = elementSection.offsetHeight + elementSectionTop;

    if (
      windowY > elementSectionTop &&
      windowY <= elementSectionContent
    ) {
      elementNav.classList.add('activated');
    } else {
      elementNav.classList.remove('activated');
    }
  });
};

window.addEventListener("scroll", activatedNavList);