const apiRawg = process.env.API_KEY;
const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
  
      const displayGame = (gameData, trailers) => {
        console.log(gameData)
        console.log(trailers)
        const { name, released, description, developers, background_image, rating, rating_top, ratings_count, genres, tags, publishers, platforms, stores } = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector("p.release-date span").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector("span.rating").innerHTML = rating;
        articleDOM.querySelector("span.rating_top").innerHTML = rating_top;
        articleDOM.querySelector("span.ratings_count").innerHTML = ratings_count;
        articleDOM.querySelector("img#detail_img").setAttribute("src", background_image)
        articleDOM.querySelector("p.developer").innerHTML = developers.map(dev => dev.name).join(', ')
        articleDOM.querySelector("p.platform_detail").innerHTML = platforms.map(plats => plats.platform.name).join(', ');
        articleDOM.querySelector("p.publisher_detail").innerHTML = publishers.map(publisher => publisher.name).join(', ')
        articleDOM.querySelector("p.genres_detail").innerHTML = genres.map(genre => genre.name).join(', ')
        articleDOM.querySelector("p.tags_detail").innerHTML = tags.map(tag => tag.name).join(', ');
        articleDOM.querySelector("video.trailer").setAttribute("src", `${trailers.results[0].data.max}`)
        stores.forEach(store_detail => {
          const liStore = document.createElement("li")
          liStore.innerHTML = store_detail.store.name;  
          articleDOM.querySelector("ul.store_list").appendChild(liStore)
        });
      };
  
      const fetchGame = (url, argument, trailer_url) => {
        fetch(`${url}/${argument}?key=${apiRawg}`)
          .then((response) => response.json())
          .then((responseData) => {
            fetch(`${trailer_url}${argument}/movies?key=${apiRawg}`)
            .then((trailer_url) => trailer_url.json())
            .then((trailer_urlData) => {
              displayGame(responseData, trailer_urlData);
            })
            
          });
      };
  
      fetchGame('https://api.rawg.io/api/games', cleanedArgument, `https://api.rawg.io/api/games/`);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <img src="" id="detail_img"/>
            <div class="header_detail">
              <h1 class="title"></h1>
              <p><span class="rating"></span>/<span class="rating_top"></span> -<span class="ratings_count"></span> votes</p>
            </div>
              <p class="description"></p>
            <div>  
              <p class="release-date">Release date : <span></span></p>
              <p class="developer"></p>
              <p class="platform_detail"></p>
              <p class="publisher_detail"></p>
            </div>
            <div>
              <p class="genres_detail"></p>
              <p class="tags_detail"></p>
            </div>
            <div class="detail_store"> 
              <h3>BUY</h3>
              <ul class="store_list">
              </ul>
            </div>
            <h3>TRAILER</h3>
            <video controls width="720" class="trailer">
            </video>

          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };

  export { PageDetail };


  //https://api.rawg.io/docs/#operation/games_youtube_read
  //https://api.rawg.io/api/games/{game_pk}/screenshots
  //https://api.rawg.io/api/games/{id}/movies
  // https://api.rawg.io/docs/#operation/games_movies_read
  //https://api.rawg.io/api/games/{id}/suggested
  // https://api.rawg.io/docs/#operation/games_stores_list


  // <source type="video/mp4" class="trailer" src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"></source>
  // <source type="video/mp4" class="trailer" src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"></source>