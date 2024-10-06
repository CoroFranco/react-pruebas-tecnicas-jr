import { gsap } from 'gsap'

const pokemonCards = document.querySelectorAll('.pokemonCard')

pokemonCards.forEach((card) => {
  gsap.fromTo(card, {
    opacity: 0,
    ease: 'power2.inOut'
  }, {
    opacity: 1,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.1
  })
})
