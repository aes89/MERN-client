import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import styles from './image.module.css' // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 100}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 100}px,${y / 6 - 100}px,0)`
const trans4 = (x, y) => `translate3d(${x / 2.5}px,${y / 2.5}px,0)`

function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 450, friction: 140 } }))
  return (
    <div class={styles.container}onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class={styles.card1}  style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class={styles.card2}  style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class={styles.card3}  style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class={styles.card4}  style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}


export default Card