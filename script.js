//create a title for the website by using h1 tag in the div tag
var division1 = document.createElement('div');
division1.innerHTML =`<h1>M A K E U P - A P I</h1>
`;
document.body.append(division1);
division1.setAttribute("class","head-container");

//write quote using blockquote
var navbar = document.createElement('div')
document.body.append(navbar);
navbar.setAttribute("class","navbar")
navbar.innerHTML=`<blockquote>“Joy is the best makeup. But a little lipstick is a close runner-up.” - <i>Anne Lamott</i></blockquote>`

//creating the input box and search button. Here inputbox have a select option (no need of typing)
var division2 = document.createElement('div')
division2.innerHTML=`
<select class="form-select" id="text">
<option selected>Choose your Products</option>
<option id="text" class="items">blush</option>
<option id="text" class="items">bronzer</option>
<option id="text" class="items">Eyebrow</option>
<option id="text" class="items">eyeliner</option>
<option id="text" class="items">eyeshadow</option>
<option id="text" class="items1">foundation</option>
<option id="text" class="items1">lip liner</option>
<option id="text" class="items1">lipstick</option>
<option id="text" class="items1">mascara</option>
<option id="text" class="items1">nail polish</option>
</select>
<button type="button" class="srcbutton" onClick="srcProducts()">Search</button>
</button>
`;
document.body.append(division2);
division2.setAttribute("class","pro-container");

//create the cards
var cards = document.createElement('div')
document.body.append(cards);
cards.setAttribute("id","cards");


//give the function for the search button

async function srcProducts(){

    let product_type = document.getElementById("text").value 

    let result = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`)
    let data = await result.json();
    
    let input="";
    console.log(data);

try {
   

for(i=0;i<data.length;i++){

input +=`<div class="card">
<h1 class="name">${data[i].name}</h1>
<img src="${data[i].api_featured_image}" alt="" class="images">
<p class="brand">${data[i].brand}</p>
<p class="price">${data[i].price}</p>
<p class="description">${data[i].description}</p>

</div>
`

cards.innerHTML=input;

}

} catch(err){
    console.log("Some error occured"+ err)
    document.body.innerHTML=`error`;
}

}



