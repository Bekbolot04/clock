// console.log('Hello');

// const timer = () => {
//     console.log('Time start');
// }

// console.log('Hello world');

// setTimeout(timer, 2000)

// const getInfo = (name, text) => {
//     console.log(`${name}: ${text}`);
// }

// getInfo('Nikita', 'Zhukov')

// const name = prompt('Name')
// const text = prompt('Text')

// const bek = setTimeout(() => {
//     getInfo(name, text)
// }, 3000)

// if (name == 'Bekbolot') {
//     clearTimeout(bek)
// }


setInterval(() => {
    console.log(i);
}, 1000);

// let i = 0

// const timer = setInterval(() => {
//     // if (i >= 10) {
//     //     clearInterval(timer)
//     // }
//     // i >= 10 ? clearInterval(timer) : null
//     i == 10 && clearInterval(timer)
//     console.log(i);
//     i++
// }, 1000);
// const btn = document.getElementById('btn')

// let i = 0

// btn.addEventListener('click', () => {

//     const timer = setInterval(() => {
//         i == 10 && clearInterval(timer)
//         console.log(i);
//         i++
//     }, 1000);

// })

// let i = 1
// const btn = document.getElementById('btn')
// let timer

// const logger = () => {
//     console.log(i);
//     i++
//     i > 10 && clearInterval(timer)
// }

// btn.addEventListener('click', () => timer = setInterval(logger, 1000))

//==================================

// const cube = document.querySelector('.cube')
// const start = document.getElementById('start')
// const stop = document.getElementById('stop')

// let left = 0
// let ctop = 0
// let cuber
// let i = 1

// const animCuber = () => {
//     cuber = setInterval(() => {
//         if (left == 0 && ctop <= 450 && ctop > 0) {
//             cube.style.top = ctop + 'px'
//             ctop -= 10
//         } else if (ctop == 450 && left <= 650 && left >= 0) {
//             cube.style.left = left + 'px'
//             left -= 10
//         } else if (ctop >= 0 && left == 650 && ctop <= 450) {
//             cube.style.top = ctop + 'px'
//             ctop += 10
//         } else if (left >= 0 && ctop == 0 && left <= 650) {
//             cube.style.left = left + 'px'
//             left += 10
//         }
//     }, 10)
// }

// animCuber()

// start.addEventListener('click', () => {
//     i == 0 ? animCuber() : null
//     i++
// })
// stop.addEventListener('click', () => {
//     clearInterval(cuber)
//     i = 0
// })

//================================================================================

// let now = new Date()
// console.log(now);

//=======Методы GET ======================
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

//=======================Методы сет ==================
// let todey = new Date()
// todey.setHours(0)
// console.log(todey);

//===================================================================================
const eyes1 = document.querySelector('.glaz1')
const eyes2 = document.querySelector('.glaz2')

// const cuber = setInterval(() => {
//     eyes1.style = `display: none;`
//     eyes1.style = `display: block;`
// }, 100)
// const cuber1 = setInterval(() => {
//     eyes2.style = `display: block;`
// }, 1000)

setInterval(() => {
    eyes2.style = `display: block;`
}, 1000)

eyes2.style = `display: none;`
// if (eyes1.style = `display: block;`) {
//     setInterval(() => {
//         eyes2.style = `display: none;`
//     }, 10)
// } else if (eyes2.style = `display: block;`) {
//     setInterval(() => {
//         eyes1.style = `display: none;`
//     }, 20)
// }




const deadline = '2023-01-01 00:00:00'
const stop = setInterval(() => {



    const getTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date())
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        const hours = Math.floor(total / (1000 * 60 * 60) % 24)
        const minutes = Math.floor(total / (1000 * 60) % 60)
        const seconds = Math.floor(total / (1000) % 60)
        if (total <= 0) {
            clearInterval(stop)
        }
        // if (seconds--) {
        //     setInterval(() => {
        //         eyes2.style = `display: block;`
        //     }, 10)
        // }

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        }
    }

    let result = () => {
        const data = getTimeRemaining(deadline)

        document.querySelector('.timer_total').innerHTML = deadline
        document.querySelector('.timer_days').innerHTML = data.days + ' Days'
        document.querySelector('.timer_hours').innerHTML = data.hours + ':'
        document.querySelector('.timer_minutes').innerHTML = data.minutes
        document.querySelector('.timer_seconds').innerHTML = data.seconds


    }
    result()

}, 0);
