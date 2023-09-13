document.addEventListener('DOMContentLoaded', () => {
  // Your code goes here
  const bgDiv = document.querySelector('.bgImg')
  let backgroundImageIndex = 0
  const backgroundImageList = [
    'url("http://oflcorp.com/wp-content/uploads/2023/05/bg_main_1.jpeg")',
    'url("http://oflcorp.com/wp-content/uploads/2023/05/bg-3.jpg")',
    'url("http://oflcorp.com/wp-content/uploads/2023/05/6.jpeg")'
  ]

  function changeBackgroundImage () {
    backgroundImageIndex = (backgroundImageIndex + 1) % backgroundImageList.length
    bgDiv.style.opacity = 0
    setTimeout(() => {
      bgDiv.style.backgroundImage = backgroundImageList[backgroundImageIndex]
      bgDiv.style.opacity = 1
    }, 3000) // Change the value here to adjust the duration of the transition
  }

  // Call changeBackgroundImage() to change the background image
  setInterval(changeBackgroundImage, 5000) // Change the value here to adjust the duration between each background image change
  // changeBackgroundImage();
  console.log('Document loaded!')
})
