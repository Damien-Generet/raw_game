import { routes } from './routes'

const apiRawg = process.env.API_KEY;
console.log("Hello World!");
const searchBar = document.getElementById("searchBar");
const research = document.getElementById("research");

const callRoute = () => {
    const { hash } = window.location;
    const pathParts = hash.substring(1).split('/');
    const pageName = pathParts[0];
    console.log(routes)
    const pageArgument = pathParts[1] || '';
    const pageFunction = routes[pageName];
    console.log(pageFunction)
  
    if (pageFunction !== undefined) {
      pageFunction(pageArgument);
    }
  };
  
  window.addEventListener('hashchange', () => callRoute());
  window.addEventListener('DOMContentLoaded', () => callRoute());
  searchBar.addEventListener('submit', function(){
    console.log(searchBar.value)
      window.location.assign(`${window.location}` + "/" + `${research.value}`)
  })