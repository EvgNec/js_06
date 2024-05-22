const listCategory = document.querySelectorAll('#categories li.item');
  console.log("Number of categories: ", listCategory.length)
listCategory.forEach(function (el) {
    let nameCategory = el.querySelector('h2');
    console.log("Category: ", nameCategory.textContent);    
    let listItem = el.querySelectorAll('li');;
    console.log("Elements: ", listItem.length)
});
console.log("");
console.log("________________________________________________________________")
console.log("");

const liItem = document.querySelectorAll("#categories > li.item")
console.log("Number of categories: ", liItem.length);

liItem.forEach(el => {
    console.log("Category: ", el.firstElementChild.textContent)
    console.log("Elements: ",el.lastElementChild.children.length)
})
   

  

