//----------------------------------------------
// Imports
//----------------------------------------------
import Masonry from 'masonry-layout';
import WOW from './vendor/_wow.js';

//----------------------------------------------
// Inits
//----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Masonry
  const msnry = new Masonry('.masonry', {
    // options...
    itemSelector: '.masonry-item'
  });

  // WOW
  const wow = new WOW();

  // Inits
  wow.init();

});
