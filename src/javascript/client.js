const render = () => {
  //create elements
  const title = document.createElement('h1');
  const totitoboard = document.createElement('div');
  const firstblock = document.createElement('div');
  const secondblock = document.createElement('div');
  const thirdblock = document.createElement('div');
  const fourthblock = document.createElement('div');
  const fifthblock = document.createElement('div'); 
  const sixthblock = document.createElement('div');
  const seventhblock = document.createElement('div');
  const eigthblock = document.createElement('div');
  const ninethblock = document.createElement('div');



  //inner html
title.innerHTML = "Totito";
totitoboard.className = "board";
firstblock.className = "firstblock";
secondblock.className = "secondblock";
thirdblock.className = "thirdblock";
fourthblock.className = "fourthblock";
fifthblock.className = "fifthblock";
sixthblock.className = "sixthblock";
seventhblock.className = "seventhblock";
eigthblock.className = "eigthblock";
ninethblock.className = "ninethblock";


  
  //append
root.appendChild(title);
root.appendChild(totitoboard);
totitoboard.appendChild(firstblock);
totitoboard.appendChild(secondblock);
totitoboard.appendChild(thirdblock);
totitoboard.appendChild(fourthblock);
totitoboard.appendChild(fifthblock);
totitoboard.appendChild(sixthblock);
totitoboard.appendChild(seventhblock);
totitoboard.appendChild(eigthblock);
totitoboard.appendChild(ninethblock);


}

render();