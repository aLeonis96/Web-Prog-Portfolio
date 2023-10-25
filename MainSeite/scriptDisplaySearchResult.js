
const urlParams = new URLSearchParams(window.location.search);
const searchText = urlParams.get('search');

console.log(searchText);

fetch('https://dummyjson.com/products/category/' + searchText + '?/limit=0')
            .then(res => res.json())
            .then(console.log);