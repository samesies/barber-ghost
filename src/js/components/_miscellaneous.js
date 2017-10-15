//----------------------------------------------
// Flex Vid
//---------------------------------------------- 
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

//----------------------------------------------
// Social Share
//---------------------------------------------- 
const socialShare = () => {
  const socialArr = document.querySelectorAll('.post__social a');

  [].forEach.call(socialArr, social => {
    social.addEventListener('click', () => {
      window.open(social.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=550');
    });
  });
};

//----------------------------------------------
// Infinite Scroll
//---------------------------------------------- 
// const miscInfiniteScroll = msnry => {
//   var pathname = window.location.pathname.replace(/#(.*)$/g, '').replace('/\//g', '/');

//   var isLoading = false;

//   // return if already loading
//   if (isLoading) return;

//   // return if currentPage is the last page already
//   if (currentPage === maxPages) return;

//   isLoading = true;

//   // next page
//   currentPage++;

//   // Load more
//   var nextPage = `${pathname}page/${currentPage}/`;

//   fetch(nextPage).then(response => response.text()).then(text => {
//     var parse = document.createRange().createContextualFragment(text);
//     var posts = parse.querySelectorAll('.posts__post');

//     if (posts.length) {
//       [].forEach.call(posts, post => {
//         document.querySelector('.posts__container').appendChild(post);
//         msnry.appended(post);
//         msnry.layout();
//       });
//     }

//     isLoading = false;
//   }).catch(error => {
//     console.error(error);
//   });
// };

//----------------------------------------------
// Exports
//----------------------------------------------
module.exports = {
  miscFlexVid,
  socialShare
};
