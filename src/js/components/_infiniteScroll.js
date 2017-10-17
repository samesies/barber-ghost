// ----------------------------------------------
// Imports
// ----------------------------------------------
import salvattore from 'salvattore';

// ----------------------------------------------
// Formspree
// ---------------------------------------------- 
const InfiniteScroll = (() => {
  let s;

  return {
    settings() {
      return {
        container: document.querySelector('.posts__container'),
        currentPage: 1,
        pathname: window.location.pathname.replace(/#(.*)$/g, '').replace('//g', '/'),
        isLoading: false
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      document.querySelector('.posts__next').addEventListener('click', () => {
        this.fetchPosts();
      });
    },

    fetchPosts() {
      if (s.isLoading || s.currentPage === maxPages) {
        return;
      }

      s.isLoading = true;
      s.currentPage++;

      const nextPage = `${s.pathname}page/${s.currentPage}/`;

      fetch(nextPage).then(response => response.text()).then(text => {
        const parse = document.createRange().createContextualFragment(text);
        const posts = parse.querySelectorAll('.posts__post');

        if (posts.length) {
          [].forEach.call(posts, post => {
            post.classList.add('fade-up');
            salvattore.appendElements(s.container, [post]);
          });
        }

        s.isLoading = false;
      }).catch(error => {
        console.error(error);
      });

      s.isLoading = false;

      if (s.currentPage === maxPages) {
        const child = document.querySelector('.posts__pagination');

        child.parentNode.removeChild(child);
      }
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default InfiniteScroll;
