import heapq

# Graph structure (with edge costs, although not used in greedy best-first)
graph = {
    'A': [('B', 11), ('C', 4), ('D', 7)],
    'B': [('E', 15)],
    'C': [('E', 10), ('F', 12)],
    'D': [('F', 25)],
    'E': [('H', 9)],
    'H': [('G', 10)],
    'F': [('G', 20)],
    'G': [],
}

# Heuristic values (from node to G)
heuristic = {
    'A': 40,
    'B': 10,
    'C': 35,
    'D': 25,
    'E': 19,
    'F': 17,
    'H': 10,
    'G': 0,
}

def beamSearch(start, goal, beam_width=1):  # // Default beam width is 1  
    open_list = []
    heapq.heappush(open_list, (heuristic[start], start))
    closed_list = []
    while open_list:
        _, current = heapq.heappop(open_list)
        closed_list.append(current)

        if current == goal:
            break

        # Add neighbors to open list
        for neighbor, _ in graph[current]:
            if neighbor not in open_list and neighbor not in [n for _, n in open_list]:
                heapq.heappush(open_list, (heuristic[neighbor], neighbor))
                open_list= heapq.nsmallest(beam_width, open_list)
        
    return "->".join(closed_list)
print(beamSearch('A', 'G'))



