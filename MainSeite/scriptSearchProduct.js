const input = document.getElementById('input');

const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', searchProdukts);
input.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        searchProdukts();
      }
});



function searchProdukts(){
    
    window.location.href='searchResult.html?search=' + input.value;

    
}