const container = document.createElement('div');
container.id='container';
document.body.appendChild(container);


const header=document.createElement('div');
container.appendChild(header);

const button = document.createElement('button');
button.textContent = 'generate grid';
header.appendChild(button);


let chosenSizeOfGrid=16;
button.addEventListener('click',function(){
    document.querySelectorAll('.squares').forEach(el=>el.remove());
    chosenSizeOfGrid=prompt('Enter the number of squares per side:',16);
    if(chosenSizeOfGrid>100){
        alert('Enter a number below 100!');
    }
    else{
    for(let i=1;i<=(chosenSizeOfGrid*chosenSizeOfGrid);i++){
        let item= document.createElement('div');
        item.id='item'+i;
        item.classList.add('squares');
        placeForGrid.appendChild(item);
        item.style.border='1px solid RGB(166,162,162)';
        let placeForGridStyle=document.querySelector('#placeForGrid').style
        placeForGridStyle.display='grid';
        placeForGridStyle.gridTemplateColumns=`repeat(${chosenSizeOfGrid}, 1fr)`;
        placeForGridStyle.gridTemplateRows=`repeat(${chosenSizeOfGrid}, 1fr)`; 
        //placeForGridStyle.justifyContent='center'; 
        //placeForGridStyle.alignContent='center';  

        placeForGridStyle.width='500px';
        placeForGridStyle.height='500px';

        document.querySelector('#container').style.display='flex';
        document.querySelector('#container').style.gap='350px';

        item.addEventListener('mouseenter', function(){
            item.style.backgroundColor='RGB(222,222,222)';})


    }}
  
});


const placeForGrid=document.createElement('div');
placeForGrid.id='placeForGrid';
container.appendChild(placeForGrid);

for(let i=1;i<=256;i++){
    let item= document.createElement('div');
    item.id='item'+i;
    item.classList.add('squares');
    placeForGrid.appendChild(item);
    item.addEventListener('mouseenter', function(){
       item.style.backgroundColor='RGB(222,222,222)';
    })
}


let placeForGridStyle=document.querySelector('#placeForGrid').style;
placeForGridStyle.display='grid';
placeForGridStyle.gridTemplateColumns='repeat(16, 40px)';
placeForGridStyle.gridTemplateRows='repeat(16, 40px)';
placeForGridStyle.justifyContent='center';
placeForGridStyle.alignContent='center';
document.querySelectorAll('.squares').forEach(el=>{el.style.border='1px solid RGB(166,162,162)'});




for(let i=1;i<=16;i++){
    document.querySelector('#item'+i).style.borderTop='2px solid rgb(166,162,162)';
}

for(let i=241;i<=256;i++){
    document.querySelector('#item'+i).style.borderBottom='2px solid rgb(166,162,162)';
}

for(let i=1;i<=241;i=i+16){
    document.querySelector('#item'+i).style.borderLeft='2px solid rgb(166,162,162)';
}

for(let i=16;i<=256;i=i+16){
    document.querySelector('#item'+i).style.borderRight='2px solid rgb(166,162,162)';
}




