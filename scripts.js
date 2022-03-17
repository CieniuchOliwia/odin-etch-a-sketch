const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const header = document.createElement('div');
container.appendChild(header);

const button = document.createElement('button');
button.textContent = 'generate grid';
header.appendChild(button);

const placeForGrid = document.createElement('div');
placeForGrid.id = 'placeForGrid';
container.appendChild(placeForGrid);


let chosenSizeOfGrid = 16;

function createGrid() {
    for (let i = 1; i <= (chosenSizeOfGrid * chosenSizeOfGrid); i++) {
        let item = document.createElement('div');
        item.id = 'item' + i;
        item.countMouseEnters = 0;
        item.classList.add('squares');
        placeForGrid.appendChild(item);
        item.style.border = '1px solid RGB(224,224,224)';

        let placeForGridStyle = document.querySelector('#placeForGrid').style
        placeForGridStyle.display = 'grid';
        placeForGridStyle.gridTemplateColumns = `repeat(${chosenSizeOfGrid}, 1fr)`;
        placeForGridStyle.gridTemplateRows = `repeat(${chosenSizeOfGrid}, 1fr)`;
        placeForGridStyle.width = '500px';
        placeForGridStyle.height = '500px';

        let containerStyle = document.querySelector('#container').style
        containerStyle.display = 'flex';
        containerStyle.gap = '350px';

        item.addEventListener('mouseenter', function () {
            if (item.countMouseEnters == 0) {
                const red = Math.round(Math.random() * 255);
                const green = Math.round(Math.random() * 255);
                const blue = Math.round(Math.random() * 255);
                let randomColor = `RGB(${red},${green},${blue})`;
                item.style.backgroundColor = randomColor;
                item.countMouseEnters++;
            }
            else {
                let i = item.countMouseEnters;
                let rgb=item.style.backgroundColor;
                let color=rgb.substring(4,rgb.length-1).split(', ');
                let [red, green, blue]=color;
                console.log(`red:${red},green:${green},blue:${blue}`);

                console.log(rgb);
                console.log(color);
                
                newRed = red * (1 - (i / 10));
                newGreen = green * (1 - (i / 10));
                newBlue = blue * (1 - (i / 10));
                item.style.backgroundColor = `RGB(${newRed},${newGreen},${newBlue})`;
            }
        })
    }

}


createGrid();
drawBorder();


button.addEventListener('click', function () {
    document.querySelectorAll('.squares').forEach(el => el.remove());
    chosenSizeOfGrid = +prompt('Enter the number of squares per side:', 16);
    if (chosenSizeOfGrid > 100) {
        alert('Enter a number below 100!');
    }
    else {
        createGrid();
        drawBorder();
    }
});


function drawBorder() {
    console.log(chosenSizeOfGrid);
    for (let i = 1; i <= chosenSizeOfGrid; i++) {
        document.querySelector('#item' + i).style.borderTop = '2px solid RGB(224,224,224)';
    }
    for (let i = (chosenSizeOfGrid * (chosenSizeOfGrid - 1)) + 1; i <= (chosenSizeOfGrid * chosenSizeOfGrid); i++) {
        document.querySelector('#item' + i).style.borderBottom = '2px solid RGB(224,224,224)';
    }
    for (let i = 1; i <= (chosenSizeOfGrid * chosenSizeOfGrid); i = i + chosenSizeOfGrid) {
        document.querySelector('#item' + i).style.borderLeft = '2px solid RGB(224,224,224)';
    }
    for (let i = chosenSizeOfGrid; i <= chosenSizeOfGrid * chosenSizeOfGrid; i = i + chosenSizeOfGrid) {
        document.querySelector('#item' + i).style.borderRight = '2px solid RGB(224,224,224)';
    }
}






