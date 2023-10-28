
const urlParams = new URLSearchParams(window.location.search);
const searchText = urlParams.get('search');

executeSearch();



function executeSearch(){
    fetch('https://dummyjson.com/products/category/' + searchText ) 
             .then(res => res.json())
                .then(data => {
                    const response = data.products;
                    
                    category = document.getElementById('category');
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

                        produktActions = document.createElement('div');
                        produktActions.className='produktActions' ;
                        produktActions.innerHTML = '<a href="" class="hearticon-"></a> <a href="" class="carticon-"></a>'

                        produkt.appendChild(imgDiv);
                        produkt.appendChild(title);
                        produkt.appendChild(produktActions);
                        
                        productsContainer.appendChild(produkt);

                        produkt.addEventListener('click', () => {
                            // Redirect to the product details page
                            window.location.href = 'DisplayProduktDetails.html?id=' + element.id;
                            
                          });
                    })
                });
}

