const state = {
  figures: ['circle','x'],
  currentplayer: 0
};

let matrix = [];
matrix[0] = [2,2,2];
matrix[1] = [2,2,2];
matrix[2] = [2,2,2];

let xcount =0;

const btnTest = document.createElement('button');
//bloques
const firstblock = document.createElement('div');
const secondblock = document.createElement('div');
const thirdblock = document.createElement('div');
const fourthblock = document.createElement('div');
const fifthblock = document.createElement('div'); 
const sixthblock = document.createElement('div');
const seventhblock = document.createElement('div');
const eigthblock = document.createElement('div');
const ninethblock = document.createElement('div');
 


let player = 0;

const render = ({figures, currentplayer}) => {
  
  //create elements
  const title = document.createElement('h1');
  const totitoboard = document.createElement('div');
 



  //inner html
title.innerHTML = "Totito";
btnTest.innerHTML = "Push";  
//class name
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
btnTest.className = "btnTest";

  
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
root.appendChild(btnTest);


  
}

//funcionalidad

btnTest.onclick = () =>{
  if(player == 0){
      firstblock.classList.add('x');
    player= 1;
    console.log(player);
  }
  
  
  else if(player ==1){
    secondblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }
  
}

firstblock.onclick = () =>{
    if(player == 0){
      firstblock.classList.add('x');
    player= 1;
    console.log(player);
      matrix[0][0]=1;
      xcount = xcount+1;
  }
  
  
  else if(player ==1){
    firstblock.classList.add('circle');
    
    player =0;
    console.log(player);
          matrix[0][0]=0;
  }
  if(matrix[0][0]==1 & matrix[0][1]==1 & matrix[0][2]==1){
    console.log('p1 won');
    firstblock.classList.add('won');
    secondblock.classList.add('won');
    thirdblock.classList.add('won');
    fourthblock.classList.add('won');
    fifthblock.classList.add('won');
    sixthblock.classList.add('won');
    seventhblock.classList.add('won');
    eigthblock.classList.add('won');
    ninethblock.classList.add('won');
  }
  
  if(matrix[0][0]+matrix[0][1]+matrix[0][2]!=3 & matrix[0][0]+matrix[0][1]+matrix[0][2]!=0 &xcount==5){
    console.log('empate');
  }
  
}
secondblock.onclick = () =>{
    if(player == 0){
      secondblock.classList.add('x');
    player= 1;
    console.log(player);
    matrix[0][1]=1;
    xcount = xcount+1;
  }
  
  
  else if(player ==1){
    secondblock.classList.add('circle');
    
    player =0;
    console.log(player);
    matrix[0][1]=0;
  }
  
   if(matrix[0][0]==1 & matrix[0][1]==1 & matrix[0][2]==1){
    console.log('p1 won');
    firstblock.classList.add('won');
    secondblock.classList.add('won');
    thirdblock.classList.add('won');
    fourthblock.classList.add('won');
    fifthblock.classList.add('won');
    sixthblock.classList.add('won');
    seventhblock.classList.add('won');
    eigthblock.classList.add('won');
    ninethblock.classList.add('won');
  }
  

}
thirdblock.onclick = () =>{
    if(player == 0){
      thirdblock.classList.add('x');
    player= 1;
    console.log(player);
    matrix[0][2]=1;
    xcount = xcount+1;

  }
  
  
  else if(player ==1){
    thirdblock.classList.add('circle');
    player =0;
    console.log(player);
    matrix[0][2]=0;
    
  }
  
   if(matrix[0][0]==1 & matrix[0][1]==1 & matrix[0][2]==1){
    console.log('p1 won');
     firstblock.classList.add('won');
     secondblock.classList.add('won');
     thirdblock.classList.add('won');
     fourthblock.classList.add('won');
     fifthblock.classList.add('won');
     sixthblock.classList.add('won');
     seventhblock.classList.add('won');
     eigthblock.classList.add('won');
     ninethblock.classList.add('won');
          
     
  }

}
fourthblock.onclick = () =>{
    if(player == 0){
      fourthblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;
  }
  
  
  else if(player ==1){
    fourthblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}
fifthblock.onclick = () =>{
    if(player == 0){
      fifthblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;
  }
  
  
  else if(player ==1){
    fifthblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}
sixthblock.onclick = () =>{
    if(player == 0){
      sixthblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;
  }
  
  
  else if(player ==1){
    sixthblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}
seventhblock.onclick = () =>{
    if(player == 0){
      seventhblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;

  }
  
  
  else if(player ==1){
    seventhblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}
eigthblock.onclick = () =>{
    if(player == 0){
      eigthblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;

  }
  
  
  else if(player ==1){
    eigthblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}
ninethblock.onclick = () =>{
    if(player == 0){
      ninethblock.classList.add('x');
    player= 1;
    console.log(player);
    xcount = xcount+1;

  }
  
  
  else if(player ==1){
    ninethblock.classList.add('circle');
    
    player =0;
    console.log(player);
  }

}


console.log(matrix[0][0]);





render(state);