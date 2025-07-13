# AI Projects for CSE 411 & 412

## Course Overview

Purpose:
This course is designed to introduce students to the core concepts and practical applications of Artificial Intelligence. The main focus is on classic search algorithms and how they can be used to solve real-world problems. The goal is to help students develop strong problem-solving skills and understand the impact of AI in various fields.

What I learned:
Throughout this course, I learned how to implement classic AI search algorithms using Python and JavaScript. I also explored how these algorithms can be applied in games like Chess and Tic Tac Toe, as well as in solving mazes. The course helped me analyze the complexity and performance of different algorithms, build interactive demos and graphical interfaces, and improve my ability to present and explain technical ideas.

Session:
Spring 2025 Semester (Course Duration 6 months)

Supervisor:
Razorshi Prozzwal Talukder, Lecturer at Northeast University Bangladesh

## Walkthrough Video

You can watch a walkthrough video of the projects here:
[Watch the walkthrough video here.](https://drive.google.com/drive/folders/1mQ7gnCUrN7M4RGkybfGNuxw0nBBzx6Qo?usp=sharing)

## Folder Overview

- Ai python implementation/: Contains Python scripts for classic AI search algorithms like A*, Alpha-Beta Pruning, AO*, Beam Search, Best-First Search, BFS, Bidirectional Search, DFS, DLS, Hill Climbing, IDS, and Min-Max.
- chess python/: A chess AI project with a graphical user interface and an AI opponent. All assets and dependencies are included.
- maze ai/: A web-based demo for maze-solving AI, built with HTML, CSS, and JavaScript for interactive visualization.
- TIC TAC TOE AI/: A web-based Tic Tac Toe game with an AI opponent, implemented using HTML, CSS, and JavaScript.
- presentation slide/: Contains presentation materials, including a PowerPoint slide deck summarizing the AI projects and concepts.
- video/: Includes a demonstration video showing the AI projects in action.

---

## About the Algorithms

How the algorithms work:
The algorithms in this repository are designed to solve search and decision-making problems. For example, A*, Best-First, Beam, BFS, DFS, DLS, IDS, and Bidirectional Search are used to explore paths in graphs or mazes to find the best or a feasible solution. Hill Climbing is a heuristic-based approach that tries to improve the solution step by step. Min-Max and Alpha-Beta are used in game AI to choose the best moves by simulating possible future states. AO* is useful for problems with multiple solution paths, especially in AND-OR graphs.

Applications:
These algorithms have a wide range of applications. Pathfinding algorithms like A*, BFS, and DFS are used in robotics, navigation systems, and puzzle solving. Game AI algorithms such as Min-Max and Alpha-Beta are used in games like Chess and Tic Tac Toe. They are also useful in automated planning, decision making, and optimization problems.

Complexity:
- BFS and DFS have a time complexity of O(V + E), where V is the number of vertices and E is the number of edges.
- A* can be as efficient as O(E) with a good heuristic, but in the worst case, it can be exponential.
- Min-Max has a complexity of O(b^d), where b is the branching factor and d is the depth of the game tree.
- Alpha-Beta pruning can reduce this to O(b^(d/2)) with optimal move ordering.
- Hill Climbing's complexity depends on the problem landscape, but it can be O(n) for simple cases.
- Beam Search has a complexity of O(b * d), where b is the beam width and d is the depth.

Input & Output Images:
Please check the individual project folders for sample input and output images. I recommend keeping screenshots of your program’s input and output to help illustrate how the algorithms work in practice.

