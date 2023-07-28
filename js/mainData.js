let mainData = () => {
   fetch('https://anime-database-29349-default-rtdb.firebaseio.com/anime.json')
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         console.log(data);
      })
};

mainData();