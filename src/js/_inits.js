// ----------------------------------------------
// Imports
// ----------------------------------------------
import WOW from './vendor/_wow.js';
import Formspree from './components/_formspree.js';
import { miscFlexVid, miscSocialShare, miscInfiniteScroll } from './components/_miscellaneous.js';
import PageTransition from './components/_pageTransition.js';

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();
  PageTransition.init();

  if (document.querySelectorAll('.posts').length) {
    miscInfiniteScroll();
  }

  if (document.querySelectorAll('.post-template').length) {
    miscFlexVid();
    miscSocialShare();
  }

  if (document.getElementById('form')) {
    Formspree.init();
  }

});
