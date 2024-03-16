// document.getElementById("btn").addEventListener("click", async () => {
//   const prodcuts = await fetch("https://fakestoreapi.com/products");
//   const data = await prodcuts.json();
//   console.log(data);
// });

document.getElementById("btn").addEventListener("click", () => {
  const prodcuts = fetch("https://fakestoreapi.com/products");
  prodcuts
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      var data1 = data;
      console.log(data1);
      data1.forEach((element) => {
        const product = document.getElementById("products");
        return (product.innerHTML += `
            <div class="card">
            <img src="${element.image}" alt="product">
            <div class="content">
            <p class="title">${element.title}</p>
            <p class='desc'><b>Description:</b> ${element.description}</p>
            <p><b>Price:</b> ${element.price}</p>
            <p><b>Category:</b> ${element.category}</p>
            <p><b>Ratings:</b> ${element.rating.rate}</p>
            <p><b>Total reviews:</b> ${element.rating.count}</p>
            </div>
            </div>
            `);
      });
    });
});
