import React from 'react'

function Hero() {
    if (heroName === 'Joker') {
        throw new Error('Not a hero!')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero