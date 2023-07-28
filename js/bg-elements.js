let bgElements = () => {
   let elements = document.querySelectorAll('.set-bg');

   for (let i = 0; i < elements.length; i++) {
      let src = elements[i].dataset.setbg;

      elements[i].style.backgroundImage = `url(${src})`;
   }
};

bgElements();