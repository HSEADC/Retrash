document?.addEventListener('DOMContentLoaded', function () {
  const colors = document.querySelectorAll('.A_MindMapPageChooseButton3')
  const playButton = document.getElementById('play3')
  const game = document.querySelector('.Q_MindMapPagePlayImage')
  const result = document.getElementById('result')

  const colorAnswers = {
    MindMap1Food1: 'breakfast',
    MindMap1Food2: 'all',
    MindMap1Food3: 'dinner',
    MindMap1Food4: 'breakfast',
    MindMap1Food5: 'dinner',
    MindMap1Food6: 'breakfast',
    MindMap1Food7: 'breakfast',
    MindMap1Food8: 'lunch',
    MindMap1Food9: 'breakfast',
    MindMap1Food10: 'dinner',
    MindMap1Food11: 'lunch'
  }
  let correctAnswers = 0
  let currentImage = 0

  function showNextImage() {
    if (currentImage >= Object.keys(colorAnswers).length) {
      return
    }

    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    game.className = 'Q_MindMapPagePlayImage'
    game.classList.add(`MindMap1Food${currentImage + 1}`)
    imageContainer.appendChild(image)
    game.appendChild(imageContainer)
    currentImage++
  }

  function startGame() {
    correctAnswers = 0
    currentImage = 0
    showNextImage()
    result.textContent = ''
    game.dataset.playing = true
  }

  function restartGame() {
    startGame()
  }

  function handleColorClick(e) {
    if (!game.dataset.playing) {
      return
    }

    const selectedColor = e.target.id

    if (colorAnswers[`MindMap1Food${currentImage}`] === selectedColor) {
      correctAnswers++
      e.target.classList.add('correct')
    } else {
      e.target.classList.add('incorrect')
    }

    setTimeout(function () {
      e.target.classList.remove('correct', 'incorrect')
      if (currentImage >= Object.keys(colorAnswers).length) {
        game.dataset.playing = false
        result.textContent = `У вас ${correctAnswers} из ${
          Object.keys(colorAnswers).length
        } баллов!`
        return
      }
      showNextImage()
    }, 500)
  }

  playButton?.addEventListener('click', startGame)

  colors.forEach(function (color) {
    color?.addEventListener('click', handleColorClick)
  })
})
