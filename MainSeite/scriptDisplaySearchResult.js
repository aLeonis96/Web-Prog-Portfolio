
const urlParams = new URLSearchParams(window.location.search);
const searchText = urlParams.get('search');



const productsContainer = document.getElementById('productsContainer');


executeSearch();



function executeSearch(){
    fetch('https://dummyjson.com/products/category/' + searchText ) 
             .then(res => res.json())
                .then(data => {
                    const response = data.products
                    category = document.getElementById('produktTitle');
                    category.innerHTML= response[0].category;
                    response.forEach(element => {
                        
                        const imgDiv = document.createElement('div')
                        imgDiv.className = 'produktImageSmall';

                        const title = document.createElement('div');
                        title.className = 'produktTitle';
                        title.innerHTML = element.title;
                        
                        const img = document.createElement('img');
                        img.src= element.images[1];
                        imgDiv.appendChild(img);

                        const produkt = document.createElement('div');
                        produkt.className='produkt';
                        produkt.id = element.id;

                        produkt.appendChild(imgDiv);
                        produkt.appendChild(title);
                        
                        productsContainer.appendChild(produkt);

                        produkt.addEventListener('click', () => {
                            // Redirect to the product details page
                            window.location.href = 'DisplayProduktDetails.html?id=' + element.id;
                            
                          });
                    })
                });
}

