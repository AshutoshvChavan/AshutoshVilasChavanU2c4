// write js code here corresponding to matches.html


var matchName=JSON.parse(localStorage.getItem("schedule"));
var favourites=JSON.parse(localStorage.getItem("favourites"))  || []
window.addEventListener("load",function(){
    displayData(matchName);
});

function displayData(matchName){
    document.querySelector("tbody").innerHTML="" ;

    matchName.map(function(elem){
        var row =document.createElement("tr") ;

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

        var td6=document.createElement("td") ;
        td6.innerText="Favourites" ;
        td6.style.color="green"

        td6.addEventListener("click",function(){
            addToFavourites(elem);
        })

        row.append(td1,td2,td3,td4,td5,td6) ;

        document.querySelector("tbody").append(row) ;
    }) ;
}


    function addToFavourites(elem){
        console.log(elem) ;
        favourites.push(elem) ;
        localStorage.setItem("favourites",JSON.stringify(favourites));
    }