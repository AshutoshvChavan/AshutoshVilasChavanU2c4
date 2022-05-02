// write js code here corresponding to favourites.html


var favourites=JSON.parse(localStorage.getItem("favourites"))

favourites.map(function(elem){
        var row = document.createElement("tr")

        var td1 =document.createElement("td") ;
        td1.innerText =elem.matchNum ;

        var td2 =document.createElement("td") ;
        td2.innerText =elem.teamA ;

        var td3 =document.createElement("td") ;
        td3.innerText =elem.teamB ;

        var td4 =document.createElement("td") ;
        td4.innerText =elem.date ;

        var td5 =document.createElement("td") ;
        td5.innerText =elem.venue ;

        row.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(row)
})