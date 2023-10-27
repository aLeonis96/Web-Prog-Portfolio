


displayMainSeite();


function displayMainSeite(){
    const mainSection = document.getElementById('startSeite');
    
    const beliebteProdukte = document.createElement('div');
    beliebteProdukte.id = 'beliebte_produkte';
    beliebteProdukte.className='Container_for_Products';

    let selectedBeliebteProdukten =  fetch('https://dummyjson.com/products?limit=0')
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
                                
                                rootIdentifier = document.createElement('a');
                                rootIdentifier.href= `MainSeite.html#/id=${element.id}`;
                                
                                rootIdentifier.appendChild(produkt);
                                beliebteProdukte.appendChild(rootIdentifier);
                                
                                mainSection.appendChild(beliebteProdukte);

                               
                               produkt.addEventListener('click', () => {
                                
                                
                                displayProduktDetails();
                            });
                                
                               
                            }
                        })
                    });

                }

                        
                           
                       
    

   
       
  

                       
