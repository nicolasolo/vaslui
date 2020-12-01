$(function () {
  var url = "json/places.json";
    
  getData(url);


});
function getData(url) {
    $.ajax({
        type: "GET",
        url: url,
        data:'json',
        success: function (response,e) {
   
getAlim(response)
getAgro(response)
},
    });
  }


function getAlim(response) {
  $.each(response.alim, function (i, v) {
      
    $("#shopp").append(model(i,v));
  });
}
function model(i,v) {
  console.log(i,v)
    var 
    html =[],
    cat = v,
     name = cat.name,
     adresa = cat.adress,
     strada = adresa.strada,
     nCiv = cat.adress.nr,
     orar = cat.orar,
     phone1 = cat.phone.tel1;
   phone2 = cat.phone.tel2;
   html +=
  `<div class="card" id="${i}">
    <h1 id="index">${name}</h1>
    <p>
    ${strada},${nCiv}
    </p>
    <p>l-v:${orar.lv}</p>
    <p>s:${orar.s}</p>
    <p>d:${orar.d}</p>
    <p>tel:${phone1}</p>
    <p>tel:${phone2}</p>
  </div>`
  return html;
}

function getAgro(response) {
  $.each(response.agro, function (i, v) {

    $("#shopping").append(model(i,v));
  });
}



