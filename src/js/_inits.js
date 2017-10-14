//----------------------------------------------
// Imports
//----------------------------------------------
import Masonry from 'masonry-layout';
import WOW from './vendor/_wow.js';
import { miscFlexVid } from './components/_miscellaneous.js';

//----------------------------------------------
// Inits
//----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Masonry
  if (document.querySelectorAll('.masonry').length) {
    const msnry = new Masonry('.masonry', {
      // options...
      itemSelector: '.masonry-item',
    });
  }

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();
  miscFlexVid();

});
