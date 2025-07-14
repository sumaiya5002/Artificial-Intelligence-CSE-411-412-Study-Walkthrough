# Chess Python

## How to Run
1. Make sure you have Python installed on your system.
2. Install the required libraries by running:
   ```
   pip install pygame python-chess
   ```
3. Run the game with:
   ```
   python chess_gui_ai_py
   ```

## Required Libraries
- pygame
- python-chess

## How to Play
- You play as White; the AI plays as Black.
- Click on your piece, then click the destination square to move.
- The game displays whose turn it is and highlights possible moves.
- The game ends with checkmate or draw.

## Game Screenshots
Below are the chess piece images used in the game (located in the `images/` folder):

![White King](images/white%20king.jpeg)
![Black Queen](images/black%20queen.jpeg)

*You can add a screenshot of the game board here if available.*

## Algorithm Used
The AI uses the Minimax algorithm with a simple material evaluation function to select moves for Black. The search depth is set to 2 for reasonable performance. 