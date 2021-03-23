import React, { useEffect, useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';


// function BookPile({ data }) {
//   // similar to keyframe syntax in css
// const to = (i) => ({
//   x: 0,
//   y: i * -10,
//   scale: 1,
//   rot: -10 + Math.random() * 20,
//   delay: i * 100,
// });

// // similar to keyframe
// const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });

// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

//   const [nope] = useState(() => new Set());
//   // sets up multiple springs to show where data moves
//   const [springs, set] = useSprings(data.length, (i) => ({
//     ...to(i),
//     from: from(i),
//   }));

//   const bind = useGesture(
//     ({
//       args: [index],
//       down,
//       delta: [xDelta],
//       distance,
//       direction: [xDir],
//       velocity,
//     }) => {
//       // how fast/hard swipe occurs
//       const trigger = velocity > 0.2;
//       // direction should be left or right
//       const dir = xDir < 0 ? -1 : 1;

//       if (!down && trigger) {
//         nope.add(index);
//       }
//       set((i) => {
//         if (index !== i) {
//           return;
//         }
//         const isNope = nope.has(index);
//         // swpies left or right or goes back to zero
//         const x = isNope ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
//         // how far card tilts. harder button faster rotation
//         const rot = xDelta / 100 + (isNope ? dir * 10 * velocity : 0);
//         // card used is scaled up a bit for UI
//         const scale = down ? 1.1 : 1;
//         return {
//           x,
//           rot,
//           scale,
//           delay: undefined,
//           config: { friction: 50, tension: down ? 800 : isNope ? 200 : 500 },
//         };
//       });
//       if (!down && nope.size === data.length) {
//         setTimeout(() => nope.clear() || set(i => to(i)), 600);
//       }
//   }
//   )
 
//   return springs.map(({ x, y, rot, scale }, i) => (
//       <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {
//         // This is the card itself, we're binding our gesture to it (and inject its index so we know which is which)
//       }
//       <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${data[i].volumeInfo.imageLinks.thumbnail})` }} />
//     </animated.div>
//     ));
// }

// export default BookPile;


