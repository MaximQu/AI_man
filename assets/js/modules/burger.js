const burgerMenu = () => {
  const burger = document.getElementById('burger-checkbox'),
    navList = document.querySelector('.nav__list'),
    body = document.querySelector('body')

  burger.addEventListener('click', () => {
    navList.classList.toggle('active')
  }
  )

  const removeOverflow = () => {
    // body.style.overflow = 'hidden'
  }
};
export default burgerMenu;
