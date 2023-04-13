const queensAttack = (n, k, r_q, c_q, obstacles) => {
  let attackCount = 0;
  
  // Create a set of obstacle positions for constant-time lookup
  const obstacleSet = new Set(obstacles.map(obstacle => obstacle.join(',')));
  
  // Check for attacks in each of the eight directions from the queen's position
  const directions = [
    [-1, 0], // up
    [-1, 1], // up-right
    [0, 1], // right
    [1, 1], // down-right
    [1, 0], // down
    [1, -1], // down-left
    [0, -1], // left
    [-1, -1], // up-left
  ];
  
  for (const [dr, dc] of directions) {
    let r = r_q + dr;
    let c = c_q + dc;
    
    // Keep moving in the current direction until we hit an obstacle or the edge of the board
    while (r >= 1 && r <= n && c >= 1 && c <= n && !obstacleSet.has(`${r},${c}`)) {
      attackCount++;
      r += dr;
      c += dc;
    }
  }
  
  return attackCount;
};


const queensAttack1 = (n, k, r_q, c_q, obstacles) => {
  // Create a set of obstacle positions for constant-time lookup
  const obstacleSet = new Set(obstacles.map(obstacle => obstacle.join(',')));
  
  // Define a helper function to recursively check attacks in a given direction
  const checkDirection = (r, c, dr, dc) => {
    // If we've gone off the board or hit an obstacle, we can't attack any more squares in this direction
    if (r < 1 || r > n || c < 1 || c > n || obstacleSet.has(`${r},${c}`)) {
      return 0;
    }
    
    // Otherwise, we can attack this square and continue in the current direction
    return 1 + checkDirection(r + dr, c + dc, dr, dc);
  }
  
  // Check for attacks in each of the eight directions from the queen's position
  const directions = [
    [-1, 0], // up
    [-1, 1], // up-right
    [0, 1], // right
    [1, 1], // down-right
    [1, 0], // down
    [1, -1], // down-left
    [0, -1], // left
    [-1, -1], // up-left
  ];
  
  let attackCount = 0;
  for (const [dr, dc] of directions) {
    attackCount += checkDirection(r_q + dr, c_q + dc, dr, dc);
  }
  
  return attackCount;
};


console.log(queensAttack1(5,3,4,3,[[5,5], [4,2], [2,3]]));