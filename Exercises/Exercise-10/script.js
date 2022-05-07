
let bs = document.querySelector('#bs')
let ms = document.querySelector('#ms')
let ss = document.querySelector('#ss')
// run getTime once on load

getTime();

// call getTime every 1 second going forward



// set up time getting function

function getTime() {

    // get the date object



    let d = new Date();

    let secondsRotation = ((d.getTime() / 1000) % 60) * 6

    bs.style.transform = 'rotate(' + secondsRotation + 'deg)'

    let minutesRotation = ((d.getTime() / 1000 / 60) % 60) * 6

    ms.style.transform = 'rotate(' + minutesRotation + 'deg)'

    let dayRotation = (d.getTime() / 1000 / 1000 / 60 / 60 / 24) % 12 * 30
    // console.log(dayRotation / 30)

    console.log(dayRotation, minutesRotation, secondsRotation)

    ss.style.transform = 'rotate(' + dayRotation + 'deg)'

    // get hours, minutes, and seconds from the date object


    window.requestAnimationFrame(getTime)

}
