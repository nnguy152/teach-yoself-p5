var streams = []
var symbolSize = 45

// setUp to set up the canvas size, start color if needed, etc
// p5 always needs setup and draw function
setup = () => {
   createCanvas(990, 500)

   var x = 0
   for (var i = 0; i <= width / symbolSize; i++) {
      var stream = new Stream()
      stream.generateSymbols(x, random(-2000, 0))
      streams.push(stream)
      x += symbolSize
   }
   textSize(symbolSize)
}

// renders the function art from below
draw = () => {
   background(255)
   streams.forEach(stream => {
      stream.render()
   })
}


function Symbol(x, y, speed) {
   this.x = x
   this.y = y
   this.value = '\u{1F4A9}'

   this.speed = speed

   this.poopEmoji = () => {
      this.value
   }

   this.rain = () => {
      this.y = (this.y >= height) ? 0 : this.y += this.speed
   }

}

function Stream() {
   this.symbols = []
   this.speed = random(1, 10)

   this.generateSymbols = function (x, y) {
      for (var i = 0; i <= 1; i++) {
         symbol = new Symbol(
            x,
            y,
            this.speed
         )
         symbol.poopEmoji()
         this.symbols.push(symbol)
      }
   }

   this.render = () => {
      this.symbols.forEach(symbol => {
         text(symbol.value, symbol.x, symbol.y)
         symbol.rain()
         symbol.poopEmoji()
      })
   }
}
