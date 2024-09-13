// Jai Shree Ram

async function fetchRandomImage() {
    const accessKey = 'KpuGJ8wdiSJ3hsznXbO5URO2d5nFwhCJISJJKRMsBtU'; // Replace with your Unsplash API Access Key
    const url = `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&w=1920&h=1080&client_id=${accessKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }

        const data = await response.json();
        const imageUrl = data.urls.full;
        console.log(imageUrl);

        document.querySelector('.main').style.backgroundImage = `url(${imageUrl})`;

        console.log("Set Ho gaya");


    } catch (error) {
        console.error('Error:', error);
    }
}

function log(data) {
    console.log(data)
}

function clockTicingAnimation() {

    let conatiner = document.querySelector(".time span")

    let flag = true

    let tickingInterval = setInterval(() => {

        if (flag) {
            conatiner.style.visibility = "visible"
            flag = !flag
        }
        else {
            conatiner.style.visibility = "hidden"
            flag = !flag
        }


    }, 1000)



}

function realTimeClockUpdater() {

    const mainKaam = () => {

        // getting the containers
        let hourCon = document.querySelector(".hour")
        let minCon = document.querySelector(".minutes")
        let dayCon = document.querySelector(".day")

        // picking the values for first 'cause for first time set inter waits 10 sec
        let hour = new Date().getHours()
        let min = new Date().getMinutes()
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let day = daysOfWeek[new Date().getDay()]

        // condition for asthetics
        
        if (min < 10) {
            min = `0${min}`
        }


        // setting the values
        hourCon.innerHTML = hour
        minCon.innerHTML = min
        dayCon.innerHTML = day


    }

    mainKaam()

    // 10s interval for clock updation
    let clockTimeInter = setInterval(mainKaam , 10 * 1000)



}


fetchRandomImage()
clockTicingAnimation()
realTimeClockUpdater()