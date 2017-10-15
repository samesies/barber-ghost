//----------------------------------------------
// Imports
//----------------------------------------------
import Masonry from 'masonry-layout';
import WOW from './vendor/_wow.js';
import { miscFlexVid, socialShare } from './components/_miscellaneous.js';

//----------------------------------------------
// Inits
//----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  let msnry;

  // Masonry
  if (document.querySelectorAll('.masonry').length) {
    msnry = new Masonry('.masonry', {
      // options...
      itemSelector: '.masonry-item',
    });
  }

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();
  if (document.querySelectorAll('.post-template').length) {
    miscFlexVid();
    socialShare();
  }

});
