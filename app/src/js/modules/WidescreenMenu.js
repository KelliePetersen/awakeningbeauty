class WidescreenMenu {
  constructor() {
    this.nav = document.getElementsByClassName('nav');
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.hiddenMenu.bind(this));
    window.addEventListener('scroll', this.fixedMenu.bind(this));
  }

  hiddenMenu() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.nav[0].classList.add('nav--is-hidden');
    } else {
      this.nav[0].classList.remove('nav--is-hidden');
    }
  }

  fixedMenu() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.nav[0].classList.add('nav--is-fixed');
    } else {
      this.nav[0].classList.remove('nav--is-fixed');
    }
  }
}

export default WidescreenMenu;