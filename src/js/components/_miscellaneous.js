import salvattore from 'salvattore';

// ----------------------------------------------
// Flex Vid
// ---------------------------------------------- 
const miscFlexVid = () => {
  const iframeArr = document.querySelectorAll('.post__content iframe');

  [].forEach.call(iframeArr, iframe => {
    const div = document.createElement('div');

    div.className = 'flex-vid';

    iframe.parentNode.insertBefore(div, iframe);
    iframe.parentNode.removeChild(iframe);
    div.appendChild(iframe);
  });
};

// ----------------------------------------------
// Social Share
// ---------------------------------------------- 
const miscSocialShare = () => {
  const socialArr = document.querySelectorAll('.post__social a');

  [].forEach.call(socialArr, social => {
    social.addEventListener('click', () => {
      window.open(social.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=550');
    });
  });
};

// ----------------------------------------------
// Infinite Scroll
// ---------------------------------------------- 
const miscInfiniteScroll = () => {
  const container = document.querySelector('.posts__container');
  let currentPage = 1;
  const pathname = window.location.pathname.replace(/#(.*)$/g, '').replace('//g', '/');

  let isLoading = false;

  function infiniteScroll() {
    if (isLoading || currentPage === maxPages) {
      return;
    }

    isLoading = true;
    currentPage++;

    const nextPage = `${pathname}page/${currentPage}/`;

    fetch(nextPage).then(response => response.text()).then(text => {
      const parse = document.createRange().createContextualFragment(text);
      const posts = parse.querySelectorAll('.posts__post');

      if (posts.length) {
        [].forEach.call(posts, post => {
          post.classList.add('fade-up');
          salvattore.appendElements(container, [post]);
        });
      }

      isLoading = false;
    }).catch(error => {
      console.error(error);
    });

    isLoading = false;

    if (currentPage === maxPages) {
      const child = document.querySelector('.posts__pagination');
      child.parentNode.removeChild(child);
    }
  }

  document.querySelector('.posts__next').addEventListener('click', () => {
    infiniteScroll();
  });
};

// ----------------------------------------------
// Exports
// ----------------------------------------------
module.exports = {
  miscFlexVid,
  miscSocialShare,
  miscInfiniteScroll
};
