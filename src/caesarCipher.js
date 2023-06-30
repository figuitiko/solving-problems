const caesarCipher = (s, k) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(k)
  return s.split('').map(item => {
    let idx = alphabet.indexOf(item)
    idx = alphabet.indexOf(item.toLowerCase())
    if (idx !== -1) {
      const idxVal = idx + k
      return (item !== item.toLowerCase()) ? alphabet[idxVal].toUpperCase() : alphabet[idxVal]
    }
    return item
  }).join('')
}

// console.log(caesarCipher('middle-Outz', 2))
// console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5))
console.log(caesarCipher('!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U', 62))
