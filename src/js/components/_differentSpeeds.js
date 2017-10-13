//----------------------------------------------
// Different Speeds
//----------------------------------------------
const DifferentSpeeds =  (() => {
  let s;

  return {
    settings() {
      return {
        scrollSpeed: document.querySelectorAll('[data-scroll-speed]'),
        scrollTop: document.body.scrollTop,
        itemArr: []
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.getScrollSpeed();
      this.setScrollPosition();
    },

    getScrollSpeed() {
      [].forEach.call(s.scrollSpeed, item => {
        s.itemArr.push(parseInt(item.getAttribute('data-scroll-speed')));
      });
    },

    setScrollPosition() {
      window.addEventListener('scroll', () => {
        s.scrollTop = document.documentElement.scrollTop;

        [].forEach.call(s.scrollSpeed, (item, idx) => {
          item.style.transform = `translateY(${-(s.scrollTop / s.itemArr[idx])}px)`;
        });
      });
    }
  };
})();

//----------------------------------------------
// Export
//----------------------------------------------
export default DifferentSpeeds;
