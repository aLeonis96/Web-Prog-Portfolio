
const beliebteProdukte = document.getElementById("beliebte_produkte");




let beliebteProdukts =  fetch('https://dummyjson.com/products?limit=0')
                        .then(res => res.json())
                        .then(produkte =>{
                            produkte = produkte.products
                            produkte.forEach(element => {
                            if (element.rating > 4.9){
                                
                                
                               
                                produkt = document.createElement('div');
                                produkt.className='produkt';
                                produkt.id= element.id;
                                
                               
      
                                title = document.createElement('div');
                                title.className = 'produktTitle';
                                title.innerHTML = ''+element.title;

                                imgDiv = document.createElement('div');
                                imgDiv.className= 'produktImageSmall';
                                
                               
                                                               
                                
                                
                                img= document.createElement('img');
                                img.src= element.images[1];
                                imgDiv.appendChild(img);

                                produktActions = document.createElement('div');
                                produktActions.className='produktActions' ;
                                produktActions.innerHTML = '<a href="" class="hearticon-"></a> <a href="" class="carticon-"></a>'
                                
                                
                                produkt.appendChild(imgDiv);
                                produkt.appendChild(title);
                                produkt.appendChild(produktActions);
                                

                                
                                console.log(produkt)
                                beliebteProdukte.appendChild(produkt);
                                
                                produkt.addEventListener('click', () => {
                                    // Redirect to the product details page
                                    window.location.href = 'DisplayProduktDetails.html?id=' + element.id;
                                    
                                  });
                               
                            }
                        })
                    });



                        
                           
                       
    

   
       
  

                       
