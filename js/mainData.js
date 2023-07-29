let mainData = () => {

   let renderAnimeList = (array, ganres) => {
      console.log(array);
      console.log(ganres);
   };

   let renderTopAnime = (anime) => {
      let wrapper = document.querySelector('.filter__gallery');

      wrapper.innerHTML = ``;

      anime.forEach(item => {
         wrapper.insertAdjacentHTML('afterbegin', `
         <div class="product__sidebar__view__item set-bg mix"
         data-setbg="${item.image}">
            <div class="ep">${item.rating} / 10</div>
            <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
            <h5><a href="/anime-details.html">${item.title}</a></h5>
         </div>
         `);
      });

      wrapper.querySelectorAll('.set-bg').forEach((elem) => {
         elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });
   };


   fetch('https://anime-database-29349-default-rtdb.firebaseio.com/anime.json')
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         let ganres = new Set();

         renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

         data.forEach(item => {
            ganres.add(item.ganre);
         });

         renderAnimeList(data, ganres);
      })
};

mainData();