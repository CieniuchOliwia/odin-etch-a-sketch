const container = document.createElement('div');
container.id='container';
document.body.appendChild(container);

for(let i=1;i<=256;i++){
    let item= document.createElement('div');
    item.id='item'+i;
    item.classList.add('squares');
    //item.textContent=i;
    container.appendChild(item);
}


let containerStyle=document.querySelector('#container').style;
//containerStyle.width='640px';
//containerStyle.height='640px';
containerStyle.display='grid';
containerStyle.gridTemplateColumns='repeat(16, 40px)';
containerStyle.gridTemplateRows='repeat(16, 40px)';
//containerStyle.border='2px solid black';
containerStyle.justifyContent='center';
containerStyle.alignContent='center';
document.querySelectorAll('.squares').forEach(el=>{el.style.border='1px solid grey'});


for(let i=1;i<=16;i++){
    document.querySelector('#item'+i).style.borderTop='2px solid grey';
}

for(let i=241;i<=256;i++){
    document.querySelector('#item'+i).style.borderBottom='2px solid grey';
}

for(let i=1;i<=241;i=i+16){
    document.querySelector('#item'+i).style.borderLeft='2px solid grey';
}

for(let i=16;i<=256;i=i+16){
    document.querySelector('#item'+i).style.borderRight='2px solid grey';
}

