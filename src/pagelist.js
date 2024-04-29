const apiRawg = process.env.API_KEY;
const PageList = (argument = '') => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
      console.log(cleanedArgument)
      const displayResults = (articles, platform) => {
        console.log(platform)
        const resultsContent = articles.map((article) => (
          `
          <div class="col cardGame">
            <div class="card">
              <img src="${article.background_image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${article.name}</h5>
                  <icon></icon>
              </div>
          </div>
      </div>`
        ));
        const resultsContainer = document.querySelector('.page-list .articles');
        console.log(resultsContainer)
        resultsContainer.innerHTML = resultsContent.join("\n");
      };
  
      const fetchList = (url, argument, platform) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => { 
            fetch(platform)
            .then((platResponse) => platResponse.json())
            .then((platData) =>{
              displayResults(responseData.results, platData.results);
            } )
            });
          //   return responseData.results
            // displayResults(responseData.results)
            displayResults(game.results, plat.results);
      };
      fetchList(`https://api.rawg.io/api/games?key=${apiRawg}`, cleanedArgument, `https://api.rawg.io/api/platforms?key=${apiRawg}`);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <div class="page-list">
          <div class="articles card-group row row-cols-1 row-cols-md-3 g-4">Loading...</div>
        </div>
      `;
  
      preparePage();
    };
    console.log("LE RENDER")
    render();
  };

  console.log("fichier pagelist.js")

  export{ PageList }