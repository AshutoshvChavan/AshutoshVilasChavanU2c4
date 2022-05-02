// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction);
var matchArr=JSON.parse(localStorage.getItem("schedule"))  || [] ;
function myfunction(){
  event.preventDefault();
  var matchObj={
    matchNum:document.querySelector("#matchNum").value,
    teamA:document.querySelector("#teamA").value,
    teamB:document.querySelector("#teamB").value,
    date:document.querySelector("#date").value,
    venue:document.querySelector("#venue").value
  };
  matchArr.push(matchObj);

  localStorage.setItem("schedule",JSON.stringify(matchArr))

  document.querySelector("#matchNum").value="" ;
  document.querySelector("#date").value="" ;
}
