// ----------------------------------------------
// Formspree
// ---------------------------------------------- 
const Formspree = (() => {
  let s;

  return {
    settings() {
      return {
        body: document.body,
        formAction: document.getElementById('form').action,
        formMessage: document.getElementsByClassName('form__message')[0]
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.ajax();
    },

    ajax() {
      const form = document.getElementById('form');

      form.addEventListener('submit', e => {
        e.preventDefault();

        fetch(s.formAction, {
          method: 'POST',
          body: new FormData(form)
        }).then(() => {
          s.formMessage.classList.remove('fade-in');

          setTimeout(() => {
            s.formMessage.classList.add('fade-in');
            s.formMessage.innerHTML = 'Message Sent';

            form.reset();
          }, 750);
        }).catch(() => {
          setTimeout(() => {
            s.formMessage.classList.add('fade-in');
            s.formMessage.innerHTML = 'Something Went Wrong';
          }, 750);
        });
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Formspree;
