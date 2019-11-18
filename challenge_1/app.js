

let squares = document.getElementsByClassName("square");


for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = function(event){
    var idx = event.toElement.attributes.id.nodeValue;
    console.log(idx);
  };
}