document.querySelector("button").addEventListener("click", function () {
  var unit1 = document.getElementById("x1").value;
  var price1 = document.getElementById("x2").value;
  var unit2 = document.getElementById("x3").value;
  var price2 = document.getElementById("x4").value;

  unit1 = Number(unit1);
  unit2 = Number(unit2);

  price1 = Number(price1);
  price2 = Number(price2);

  var result1 = unit1 * price1;
  var result2 = unit2 * price2;

  var quantity = unit1 + unit2;
  var totalPrice = result1 + result2;

  var averagePrice = totalPrice / quantity;

  document.querySelector("p").innerHTML = `Total Price : ${totalPrice}<br>
        Total Quantity : ${quantity}<br>
        Average : ${averagePrice}
        `;
});
