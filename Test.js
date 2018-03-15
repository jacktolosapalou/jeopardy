

function loadUrl(url, func) {

var xhr = new XMLHttpRequest()
    
xhr.addEventListener( 'load', function()  {

    if(xhr.status == 200) {
        func(xhr);

     } else {
        console.log(xhr.statusText);
    }
});
    
xhr.open('GET', "http://jservice.io/api/categories?count=5&offset=10")
xhr.send()
  
}
loadUrl("http://jservice.io/api/categories?count=5&offset=10", function(xhr)
{
var table = document.getElementById('output');


    var first = table.insertRow(0);
    var second = table.insertRow(1);
    var third = table.insertRow(2);
    var fourth = table.insertRow(3);
    var fifth = table.insertRow(4);
    var sixth = table.insertRow(5);
    first.setAttribute("id", "first");
    var data = xhr.response;
    var jsonCat = JSON.parse(data);
   console.log(jsonCat);

    for(i= 0; i<5; i++)
    {
  
        var td1 = first.insertCell(i);
        td1.innerHTML = jsonCat[i].title;
    }


       loadUrl("http://jservice.io/api/category?id=" + jsonCat[0].id, function(xhr)
    {
        var quest1=xhr.response;
        var jsonQuest1 = JSON.parse(quest1);
        console.log(jsonQuest1);

        for(i=0; i<5; i++)
        {
            var td2 =second.insertCell(i);
            td2.innerHTML=jsonQuest1[i].value;
        }
    });


});


