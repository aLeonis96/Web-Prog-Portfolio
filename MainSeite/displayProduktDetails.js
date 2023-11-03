

function displayProduktDetails(matches){
    

        id= matches[1];


    let pDS = document.getElementById('ProduktDesplaySeite');
    pDS.innerHTML = '';

    let produktDetails = document.createElement('div');
    produktDetails.className = 'produktDetails';

    let commentThread = document.createElement('div');

    let comment = document.createElement('div');
    comment.className = 'comment';

    

   let produkt = fetch('https://dummyjson.com/product/' + id)
                .then(res => res.json())
                .then(response =>{
                    
                    
                    
                    produktTitle = document.createElement('h1');
                    produktTitle.className='bodyHeader';
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

                   

                    fetch('https://dummyjson.com/comments/post/' + id)
                            .then(res => res.json())
                            .then(data =>{
                                    comments = data.comments
                                    
                                
                                    comments.forEach(commentData => {
                                        
                                        

                                        userName = document.createElement('div');
                                        userName.className='userName';
                                        userName.textContent = `Benutzer: ${commentData.user.username}`;
                                        

                                        commentBody = document.createElement('div');
                                        commentBody.className='commentBody';
                                        commentBody.textContent = commentData.body;

                                        comment.appendChild(userName);
                                        comment.appendChild(commentBody);
                                        commentThread.appendChild(comment);

                                        
                                    })
                            })




                    pDS.appendChild(produktTitle);
                    pDS.appendChild(produktDetails);
                    pDS.appendChild(commentThread);
            });
}