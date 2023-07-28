let modal = () => {
   let modal = document.querySelector('.search-model');
   let modalBtn = document.querySelector('.icon_search');
   let modalClose = modal.querySelector('.search-close-switch');
   let searchInput = modal.querySelector('#search-input');

   modalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      searchInput.focus();
   });

   modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
      searchInput.value = '';
   });

   searchInput.addEventListener('input', (event) => {
      console.log(event.target.value);
   });
};

modal();
