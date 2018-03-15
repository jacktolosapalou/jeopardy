
function loadUrl(url, func) {

var xhr = new XMLHttpRequest()
    
xhr.addEventListener( 'load', function()  {

    if(xhr.status == 200) {
        func(xhr);

     } else {
        console.log(xhr.statusText);
    }
});
    
xhr.open('GET', url)
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


    loadUrl("http://jservice.io/api/category?id=" + jsonCat[0].id, function(xh)
    {
        var quest1=xh.response;
        var jsonQuest1 = JSON.parse(quest1);
        console.log(jsonQuest1.clues[0].value);
        var table = document.getElementById('output');
        var second = table.insertRow(1);

        for(i=0; i<5; i++)
        {
            var td2 =second.insertCell(i);
            td2.innerHTML=jsonQuest1.clues[0].value;
            var td3 = third.insertCell(i);
            td3.innerHTML=jsonQuest1.clues[1].value;
            var td4 = fourth.insertCell(i);
            td4.innerHTML=jsonQuest1.clues[2].value;
            var td5 = fifth.insertCell(i);
            td5.innerHTML=jsonQuest1.clues[3].value;
            var td6 = sixth.insertCell(i);
            td6.innerHTML=jsonQuest1.clues[4].value;



        }
    });

});
