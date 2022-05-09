var cartArr = JSON.parse(localStorage.getItem("Mycart")) ||[]
     
displayData(productData);
function displayData(productData)
{
   document.querySelector("#products");
   productData.map(function(elem,index){
       var mainDiv = document.createElement("div");

       var img = document.createElement("img");
       img.setAttribute("src",elem.image_url);

       var catagory = document.createElement("p");
       catagory.innerText = elem.catagory;

       var name = document.createElement("p");
       name.innerText = elem.name;

       var company = document.createElement("p");
       company.innerText = elem.company;

       var price = document.createElement("p");
       price.innerText= "Rs. " + elem.price ;

       var cart = document.createElement("button"); // Adding add to cart button
       cart.innerText = "Add to Cart";
       cart.addEventListener("click",function(){
           addToCart(elem);
       })

       document.querySelector("#header_icon").addEventListener("click",function()
       {
           window.location.href="https://www.masaischool.com/"
       })

       mainDiv.append(img,catagory,name,company,price,cart);
       document.querySelector("#products").append(mainDiv);
   })

}
function addToCart(elem){ // functionality of addtocart

elem.qty = 1;
cartArr.push(elem);

localStorage.setItem("cartItem",JSON.stringify(cartArr));
 window.location.href="cart.html" // This line will redirect user to cart page after clicking add to cart button.
console.log(cartArr);
}