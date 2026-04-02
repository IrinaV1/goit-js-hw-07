const listCategories = document.querySelector("#categories");
const itemCategories = document.querySelectorAll(".item");



console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(item => {
const categories = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elements}`);
})




