$(() => {
  let frameCount = 0;

  const animate = () => {
    for (let i = 0; i < 36; i++) {
      const distance = 400
      const digree = i * 10 + frameCount
      const radin = digree * Math.PI / 180
      const x = distance * Math.cos(radin)
      const z = distance * Math.sin(radin)

      $('li').eq(i).attr({'style': `transform: translate3d(${x}px, 0px, ${z}px);z-index: ${Math.floor((z + 400) * 100)}`})

      if (frameCount > 360) frameCount = 0
    }
    frameCount++
  }

  let timer = setInterval(() => {
    animate()
  }, 1000/10)
})
