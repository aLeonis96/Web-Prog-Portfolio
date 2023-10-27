



    
    



displayProduktDetails();

function displayProduktDetails(){
    

        urlParams = new URLSearchParams(window.location.hash);
        console.log(urlParams);
        id = urlParams.get('#/id'); 


    let pDS = document.getElementById('ProduktDesplaySeite');
    

    let produktDetails = document.createElement('div');
    produktDetails.id = 'produktDetails';
    

   let produkt = fetch('https://dummyjson.com/product/' + id)
                .then(res => res.json())
                .then(response =>{
                    
                    
                    
                    produktTitle = document.createElement('div');
                    produktTitle.id='produktTitle';
                    produktTitle.innerHTML= response.title;

                    imgDiv = document.createElement('div');
                    imgDiv.className='imgDiv';
                    
                    img= document.createElement('img');
                    img.src=response.images[1];
                    imgDiv.appendChild(img);

                    descriptionDiv = document.createElement('div');
                    descriptionDiv.className='descriptionDiv';
                    
                    price = document.createElement('div');
                    price.id='price';
                    price.innerHTML = 'Price: ' +response.price + '€';
                    

                    description = document.createElement('div');
                    description.innerHTML= response.description;
                    description.id='description';
                    

                    rating = document.createElement('div');
                    rating.id='rating';
                    rating.innerHTML = 'Rating: ' + response.rating + ' / 5';
                    
                    ratingPriceDiv= document.createElement('div');
                    ratingPriceDiv.className='ratingPriceDiv';

                    ratingPriceDiv.appendChild(rating);
                    ratingPriceDiv.appendChild(price);

                    descriptionDiv.appendChild(description);
                    descriptionDiv.appendChild(ratingPriceDiv);
                    
                    

                    actionsDiv = document.createElement('div');
                    actionsDiv.className='classDiv';
                
                    produktDetails.appendChild(imgDiv);
                    produktDetails.appendChild(descriptionDiv);
                    produktDetails.appendChild(actionsDiv);

                    pDS.appendChild(produktTitle);
                    pDS.appendChild(produktDetails);
                    
                    

                    
                   
                    
                });

                produkt = null;

}