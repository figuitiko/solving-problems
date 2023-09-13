const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  const stronger = Math.max(yourLeft, yourRight)
  const friendStronger = Math.max(friendsLeft, friendsRight)
  const myTotal = yourRight + yourLeft
  const friendTotal = friendsLeft + friendsRight
  return stronger === friendStronger && myTotal === friendTotal
}
