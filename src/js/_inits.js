//----------------------------------------------
// Imports
//----------------------------------------------
import Masonry from 'masonry-layout';

//----------------------------------------------
// Inits
//----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  // Masonry
  const msnry = new Masonry('.masonry', {
    // options...
    itemSelector: '.masonry-item'
  });

});
