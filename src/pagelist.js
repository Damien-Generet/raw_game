const apiRawg = process.env.API_KEY;
const PageList = (argument = '') => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
      console.log(cleanedArgument)

      const displayResults = (articles, publishers, iMin = 0, iMax = 9) => {
        const showMoreBtn = document.getElementById("show-more__btn");
        const resultsContent = [];
        console.log(articles);
        console.log(publishers);
        
        const generateHTML = (article) => {
          const genreNames = article.genres.map(genre => genre.name); //recuperation of all genre of the game
          // const publisherLoop = publishers.forEach(publisher => {
          //     publisher.games.forEach(game => {
          //   if(game.name == article.name){
          //     return publisher
          //   }
          // });
          // });
          
          const findPublisher = (article) => {
            for (const publisher of publishers) {
              const publisherGame = publisher.games.find(game => game.name === article.name);
              if (publisherGame) {
              return publisher;
            }               
          }
            return null;
        }
          const publisher = findPublisher(article);
          console.log(publisher)
          const svgHash = {
            "pc": "windows.svg",
            "playstation": "ps4.svg",
            "xbox": "xbox.svg",
            "linux": "linux.svg",
            "nintendo": "switch.svg",
            "mobile": "mobile.svg",
            "mac": "windows.svg",
            "android": "mobile.svg",
            "web": "windows.svg"
          }
          // const publisher = publisherLoop(article);
          return `
          <div class="col cardGame">
            <div class="card">
              <div class="default-view">
                <div style="background-image: url('${article.background_image}')" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${article.name}</h5>
                    ${article.parent_platforms.map(platform => `<img class="cardGame__platforms__logo" src="./img/${svgHash[platform.platform.slug]}" alt="">`).join(' ')}
                </div>
              </div>
              <div class="hover-view">
                <div class="card-body">
                  <h5 class="card-title">${article.name}</h5>
                  <p>Date de sortie: ${article.released}</p>
                  <p>Éditeur: ${publisher ? publisher.name : 'Inconnu'}</p>
                  <p>Genre(s): ${genreNames.join(', ')}</p>
                  <p>Note: ${article.rating}/5 (${article.ratings_count} votes)</p>
                  <a href="#pagedetail/${article.id}">More info...</a>
                </div>   
              </div>
            </div>
          </div>
          `;
        };

        const addNewResult = (article) => {
          const articleHTML = generateHTML(article);
          resultsContent.push(articleHTML);          
        };
        
        

        articles.slice(iMin, iMax).forEach(article => addNewResult(article));

        if (resultsContent.length > 18) {
          console.log("coucou je suis 27")
          showMoreBtn.classList.add("toggle-display");
        } else {
          showMoreBtn.classList.remove("toggle-display")
        }
        //  resultsContent = articles.slice(iMin, iMax).map((article) => (
          
        // ));
        showMoreBtn.addEventListener('click', function(){
          displayResults(articles, publishers, iMin, iMax + 9)
        })
        const resultsContainer = document.querySelector('.page-list .articles');
        console.log(resultsContainer)
        resultsContainer.innerHTML = resultsContent.join("\n");
      }
  
      const fetchList = (url, argument, urlDev) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => { 
              fetch(urlDev)
              .then((devResponse) => devResponse.json())
              .then((devResponse) => {
                displayResults(responseData.results, devResponse.results);
              })
            });
          //   return responseData.results
            // displayResults(responseData.results)
      };
      fetchList(`https://api.rawg.io/api/games?&page_size=27&key=${apiRawg}`, cleanedArgument, `https://api.rawg.io/api/publishers?&page_size=100&key=${apiRawg}`);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <div class="page-list">
          <div class="articles card-group row row-cols-md-3 g-4">Loading...</div>
        </div>
      `;
  
      preparePage();
    };
    console.log("LE RENDER")
    render();
  };

  console.log("fichier pagelist.js")

  export{ PageList }