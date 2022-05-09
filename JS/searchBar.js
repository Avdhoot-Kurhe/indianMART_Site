var productData = JSON.parse(localStorage.getItem("productData")) || [];
    // console.log(productData);
    document.querySelector("#form").addEventListener("submit" , submitform); 
   
function submitform(event)
{
  event.preventDefault();
  var searchText = document.getElementById("textsearch").value;
  
  console.log(searchText);
  var filterData = productData.filter(function(elem){
    return elem.name.includes(searchText);
  });
  console.log(filterData);
  
  displayData(filterData);
}