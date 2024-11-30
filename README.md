# etchProject

1. Initialize Project
   - Create a GitHub repository and clone it.
   - Set up an HTML file with a container div and a button.
   - Link CSS and JavaScript files.

2. Create Grid
   - Function: createGrid(size)
      - Clear the container div.
      - Use a loop to generate size x size square divs.
      - Append each square to the container div.
      - Style container with Flexbox for a grid layout.

3. Add Hover Effect
   - Add event listeners to each square div.
   - On hover, change the background color of the square.

4. Add Resizing Functionality
   - Add a button with a click event listener.
   - On click:
      - Prompt the user for a grid size.
      - Validate input (1 ≤ size ≤ 100).
      - Call createGrid(size) to create a new grid.

5. Extra Credit Features
   - Random Color:
      - On hover, generate a random RGB value.
      - Apply it as the background color of the square.
   - Gradual Darkening:
      - On hover, reduce the square’s brightness or increase opacity incrementally.

6. Debug and Commit
   - Test each feature.
   - Commit changes frequently.
   - Push final project to GitHub.
