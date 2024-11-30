function createGrid(size) {
    const container = document.getElementById('grid-container');

    // Clear any existing grid
    container.innerHTML = '';

    // Calculate the size of each square
    const squareSize = 960 / size;

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;


        square.addEventListener('mouseenter', () => {
            const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            square.style.backgroundColor = randomColor;
        });
        

        // Append to the container
        container.appendChild(square);
    }
}
createGrid(16)
// Select the reset button
const resetButton = document.getElementById('reset-button');

// Add event listener for the reset button
resetButton.addEventListener('click', () => {
    let gridSize = parseInt(prompt('Enter new grid size (1-100):'), 10);

    // Validate input
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100.');
    } else {
        createGrid(gridSize); // Create a new grid with the entered size
    }
});

