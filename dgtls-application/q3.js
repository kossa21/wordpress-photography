function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");
  var length = allDivs.length;
  var newArray = [...allDivs];
  console.log(`length linea 4 es ${length}`);

  for (var i = 0; i < [...allDivs].length; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
    console.log(`allDivs al final del var es ${allDivs} y allDivs.length es ${allDivs.length} y length es ${length}`);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

appendChildren(function(div) {});
console.log(document.body.innerHTML);