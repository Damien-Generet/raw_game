const apiRawg = process.env.API_KEY;
const PageList = (argument = '') => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
      console.log(cleanedArgument)
      const displayResults = (articles) => {
        const resultsContent = articles.map((article) => (
          `<article class="cardGame">
            <h1>${article.name}</h1>
            <h2>${article.released}</h2>
            <a href="#pagedetail/${article.id}">${article.id}</a>
          </article>`
        ));
        const resultsContainer = document.querySelector('.page-list .card-games');
        resultsContainer.innerHTML = resultsContent.join("\n");
      };
  
      const fetchList = (url, argument) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => {
            displayResults(responseData.results)
          });
      };
      fetchList(`https://api.rawg.io/api/games?key=${apiRawg}`, cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <div class="page-list nononono">
          <div class="articles">Loading...</div>
        </div>
      `;
  
      preparePage();
    };
    console.log("LE RENDER")
    render();
  };

  console.log("fichier pagelist.js")

  export{ PageList }