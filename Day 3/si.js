document.querySelector("button").addEventListener("click", function () {
  var p = document.getElementById("x1").value;
  var r = document.getElementById("x2").value;
  var n = document.getElementById("x3").value;

  p = Number(p);
  r = Number(r);
  n = Number(n);

  var interest = (p * r * n) / 100;
  var total = interest + p;

  document.querySelector("p").innerHTML = `Total Interest : ${interest}<br>
          Total Amoount : ${p}<br>
          Total : ${total}
          `;
});
