// script

function Roll() {

  const dc = document.getElementById('text').value
  const diceResult = document.getElementById('diceResult')
  const imgResult = document.getElementById('imgResult')
  let dices = []
  let imgs = []

  for (let i = 0; i < dc; i++) {
    const values = Math.floor(Math.random() * 6) + 1
    dices.push(values)
    imgs.push(`<img src="img/${values}.png" alt="Dice ${values}">`)
  }

  diceResult.textContent = "dice: " + dices.join(", ")
  imgResult.innerHTML = imgs.join(' ')
}
