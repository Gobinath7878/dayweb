var division1 = document.createElement('div');
division1.innerHTML =`<h1>M A K E U P - A P I</h1>`;
document.body.append(division1);
division1.setAttribute("class","head-container");

var navbar = document.createElement('div')
document.body.append(navbar);
navbar.setAttribute("class","navbar")
navbar.innerHTML=`<blockquote>“Joy is the best makeup. But a little lipstick is a close runner-up.” - <i>Anne Lamott</i></blockquote>`

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
`;
document.body.append(division2);
division2.setAttribute("class","pro-container");




async function srcProducts(){

    let product_type = document.getElementById("text").value 



    //let result = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${product_type}`)
    let result = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`)


    let data = await result.json();

    console.log(data);
// create container for api website
try {
   
        
    

for(i=0;i<data.length;i++){
var container = document.createElement('div')
document.body.append(container);
container.setAttribute("class","container");

var makeupbox = document.createElement('div')
container.appendChild(makeupbox)
makeupbox.setAttribute("class","makeupbox");

var mpproductlist = document.createElement('div')
makeupbox.appendChild(mpproductlist)
mpproductlist.setAttribute("class","mpproductlist");

var mpproductbox = document.createElement('div')
mpproductlist.appendChild(mpproductbox)
mpproductbox.setAttribute("class","mpproductbox");

var mpproduct = document.createElement('div')
mpproductbox.appendChild(mpproduct)
mpproduct.setAttribute("class","mpproduct");

var img = document.createElement('img')
mpproduct.appendChild(img)
img.setAttribute("class","img");
img.src=`${data[i].api_featured_image}`


var mpname = document.createElement('h4')
mpproduct.appendChild(mpname)
mpname.setAttribute("class","mpname");
mpname.innerText=`Name:${data[i].name}`;

var mpbrand = document.createElement('h4')
mpproduct.appendChild(mpbrand)
mpbrand.setAttribute("class","mpbrand");
mpbrand.innerHTML =`Brand:${data[i].brand}`

var mpprice = document.createElement('h4')
mpproduct.appendChild(mpprice)
mpprice.setAttribute("class","mpprice");
mpprice.innerHTML = `price:${data[i].price}`;

var mpdescription = document.createElement('small')
mpproduct.appendChild(mpdescription)
mpprice.setAttribute("class","mpdescription");
mpdescription.innerHTML = `<b>Description</b>:${data[i].description}`;

}
} catch(err){
    console.log("Some error occured"+ err)
}

}

