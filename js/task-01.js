const categoryList = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categoryList.length}`);
categoryList.forEach((categories) => {
  const categoryTitle = categories.querySelector("h2").textContent;
  const categoryItemNumber = categories.querySelectorAll("ul > li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemNumber}`);
});
