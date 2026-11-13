// const timeEl = document.getElementsByClassName('time')[0];
// const plusBtn = document.getElementById('btn-plus');
// const minusBtn = document.getElementById('btn-minus');
// const startBtn = document.getElementById('start');
// const stopBtn = document.getElementById('stop');


// const stepSize = 60; // 60 seconds
// let time = 0;

// function updateTime() {
//     const hours = Math.floor(time / 3600);
//     const minutes = Math.floor((time % 3600) / 60);
//     const seconds = time % 60;
//     timeEl.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }


// // "" + hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
// // `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`


// plusBtn.addEventListener('click', () => {
//     time += stepSize;
//     updateTime();
// });

// minusBtn.addEventListener('click', () => {
//     time -= stepSize;
//     if (time < 0) {
//         time = 0;
//     }
//     updateTime();
// });


// let timerId = null;

// startBtn.addEventListener('click', () => {
//     if (timerId !== null) return; // Timer is already running
//     timerId = setInterval(() => {
//         time--;
//         updateTime();
//     }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//     if (timerId === null) return; // Timer is not running
//     clearInterval(timerId);
//     timerId = null;
// });


// Event Propagation - How event traverls through the DOM tree.


// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');
// const div3 = document.getElementById('div3');

// div1.addEventListener('click', () => {
//     console.log('Div 1 clicked');
// }, false); // true - capture phase, false - bubble phase

// div2.addEventListener('click', (event) => {
//     event.stopPropagation(); 
//     console.log('Div 2 clicked');
// }, false); // true - capture phase, false - bubble phase

// div3.addEventListener('click', () => {
//     console.log('Div 3 clicked');
// }, false); // true - capture phase, false - bubble phase

// Event Bubbling - The event starts from the target element and bubbles up to the root of the DOM tree.
// Event Capturing - The event starts from the root of the DOM tree and captures down to the target element.

// Event Delegation 
//    - We use a single to handle events for multiple child elements.

// const buttonContainer = document.getElementsByClassName('buttons')[0];
// const output = document.getElementsByClassName('output')[0];

// buttonContainer.addEventListener('click', (event) => {
//     output.innerText = `Button ${event.target.value} clicked`;
// });

// Assignment:
//   1. Create calculator, +, -, *, /