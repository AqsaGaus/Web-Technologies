document.querySelector("button").addEventListener("click", function () {
  var amt = document.getElementById("x1").value;
  var dis = document.getElementById("x2").value;
 
  amt = Number(amt);
  dis = Number(dis);

    var discount = amt * dis / 100;
  

  document.querySelector("p").innerHTML = `Total Interest : ${interest}<br>
            Total Amoount : ${p}<br>
            Total : ${total}
            `;
});
