console.log('JS OK!!!');

// start button
const button = document.getElementById('start-btn');

button.addEventListener('click', function () {
    console.log('cliccato');
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';

    // creating cells with number from 1 to 100
    for (let index = 1; index <= 100; index++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cells';
        cellElement.innerHTML = index;

        // cells clicked
        cellElement.addEventListener('click', function () {
            console.log('cells clicked', index)
            const isEven = isNumberEven(index);

            if (isEven) {
                cellElement.classList.add('even');
            } else {
                this.classList.add('odd');
            }

        });

        gridElement.append(cellElement);
    }
})

function isNumberEven(number) {
    return number % 2 === 0;
}