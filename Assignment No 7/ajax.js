document.querySelector("button").addEventListener("click", function () {
  const API = "https://restcountries.com/v3.1/all";
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  console.log(xhr.readyState, xhr.status);
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState, xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var result = xhr.responseText;
            console.log(result);
            
            var record = JSON.parse(result)
            console.log(record)

            record.forEach(function (value, j)
            {
                console.log(value);
                console.log(value.flags.png, value.name.common);
                var divtag = document.createElement('div');
                console.log(divtag);
                divtag.className = 'cal-xl-3 text-center';
                
                var imgtag = document.createElement('img');
                var ptag = document.createElement("p");

                imgtag.src = value.flags.png;
                ptag.innerText = value.name.common;
                divtag.append(imgtag, ptag);

                document.querySelector('.row').append(divtag);
        })
        }
  }
    xhr.open("get", API);
    xhr.send();
});
