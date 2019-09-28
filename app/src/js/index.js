import WidescreenMenu from './modules/WidescreenMenu';
import BackToTop from './modules/BackToTop';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

const widescreenMenu = new WidescreenMenu();
const backToTop = new BackToTop();
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();

// revealOnScroll.sr.reveal(".heading", { 
//   distance: "10px",
//   origin: "right",
//   delay: 600,
//   viewOffset: { bottom: -300 }
// });