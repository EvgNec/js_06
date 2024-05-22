const listCategory = document.querySelectorAll('#categories li.item');
  console.log("Number of categories: ", listCategory.length)
listCategory.forEach(function (category) {
    let nameCategory = category.querySelector('h2');
    console.log("Category: ", nameCategory.textContent);    
    let listItem = category.querySelectorAll('li');;
    console.log("Elements: ", listItem.length)
});
   

  

