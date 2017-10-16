// ----------------------------------------------
// Imports
// ----------------------------------------------
import salvattore from 'salvattore';
import WOW from './vendor/_wow.js';
import Formspree from './components/_formspree.js';
import { miscFlexVid, socialShare } from './components/_miscellaneous.js';
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

  if (document.querySelectorAll('.post-template').length) {
    miscFlexVid();
    socialShare();
  }

  if (document.getElementById('form')) {
    Formspree.init();
  }

});
