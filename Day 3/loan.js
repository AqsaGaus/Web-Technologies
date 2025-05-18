document.querySelector("button").onclick = function () {
  console.log(document.getElementById("x1"));
  var amount = document.getElementById("x1").value;
  var rateOfInterest = document.getElementById("x2").value;
  var duration = document.getElementById("x3").value;

  console.log(amount, rateOfInterest, duration);
  if (amount == "" || rateOfInterest == "" || duration == "") {
    document.querySelector("p").innerText = "All values are required.";
    document.querySelector("p").className = "alert alert-danger";
  } else {
    console.log(isNaN(amount));
    if (isNaN(amount) || isNaN(rateOfInterest) || isNaN(duration)) {
      document.querySelector("p").innerText = "All values must be a number.";
      document.querySelector("p").className = "alert alert-danger";
    } else {
      console.log(typeof amount);
      var p = parseInt(amount);
      var r = parseFloat(rateOfInterest);
      var n = Number(duration);

      r = r / 12 / 100;
      n = n * 12;

      var emi = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
      console.log(emi);

      emi = Math.round(emi);
      var totalPaid = emi * n;
      var totalInterest = totalPaid - p;

      document.querySelector("p").innerHTML = `
            EMI = ${emi}<br>
            Loan AMount = ${p} <br>
            Total Paid Amount = ${totalPaid} <br>
            Total Interest = ${totalInterest}      
            `;
      document.querySelector("p").className = "alert alert-success";

      Highcharts.chart("container", {
        chart: {
          type: "pie",
          zooming: {
            type: "xy",
          },
          panning: {
            enabled: true,
            type: "xy",
          },
          panKey: "shift",
        },
        title: {
          text: "Egg Yolk Composition",
        },
        tooltip: {
          valueSuffix: "%",
        },
        subtitle: {
          text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: [
              {
                enabled: true,
                distance: 20,
              },
              {
                enabled: true,
                distance: -40,
                format: "{point.percentage:.1f}%",
                style: {
                  fontSize: "1.2em",
                  textOutline: "none",
                  opacity: 0.7,
                },
                filter: {
                  operator: ">",
                  property: "percentage",
                  value: 10,
                },
              },
            ],
          },
        },
        series: [
          {
            name: "Percentage",
            colorByPoint: true,
            data: [
              {
                name: "Loan Amount",
                y: p,
              },
              {
                name: "Total Interest",
                sliced: true,
                selected: true,
                y: totalInterest,
              },
            ],
          },
        ],
      });
    }
  }
};
