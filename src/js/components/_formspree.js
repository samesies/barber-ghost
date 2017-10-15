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
        formMessage: document.getElementsByClassName('form__message')[0],
        input: document.getElementsByTagName('input'),
        textarea: document.getElementsByTagName('textarea'),
        formActive: 'js-form-active'
      };
    },

    init() {
      s = this.settings();
      this.bindEvents();
    },

    bindEvents() {
      this.focus();
      this.ajax();
    },

    focus() {
      [].forEach.call(s.input, input => {
        input.addEventListener('focus', e => {
          e.target.parentNode.classList.add(s.formActive);
        });
        input.addEventListener('blur', e => {
          e.target.parentNode.classList.remove(s.formActive);
        });
      });

      [].forEach.call(s.textarea, textarea => {
        textarea.addEventListener('focus', e => {
          e.target.parentNode.classList.add(s.formActive);
        });
        textarea.addEventListener('blur', e => {
          e.target.parentNode.classList.remove(s.formActive);
        });
      });
    },

    ajax() {
      const form = document.getElementById('form');

      form.addEventListener('submit', e => {
        e.preventDefault();

        const request = new XMLHttpRequest();

        request.open('POST', s.formAction, true);
        request.setRequestHeader('accept', 'application/json');

        const formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = () => {
          if (request.readyState < 4) {
            s.formMessage.classList.remove('fade-in');
          } else if (request.readyState === 4) {
            if (request.status === 200 && request.status < 300) {
              setTimeout(() => {
                s.formMessage.classList.add('fade-in');
                s.formMessage.innerHTML = 'Message Sent';
              }, 1000);

              setTimeout(() => {
                form.reset();
              }, 3000);
            } else {
              setTimeout(() => {
                s.formMessage.classList.add('fade-in');
                s.formMessage.innerHTML = 'Something Went Wrong';
              }, 1000);
            }
          }
        };
      });
    }
  };
})();

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Formspree;
