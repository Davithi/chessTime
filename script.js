let refresh = document.createElement("p");
refresh.style.position = 'absolute';
refresh.style.zIndex = '2';
refresh.style.top = '41%';
refresh.style.color = '#ffffff';
refresh.style.fontSize = '100px'
refresh.style.width = '100%';
refresh.style.display = 'flex';
refresh.style.alignItems = 'center';
refresh.style.justifyContent = 'center';
refresh.innerText = 'Refresh';



timeOne.innerHTML = '10:00';
timeTwo.innerHTML = '10:00';
console.log(timeOne);
let oneInterval;
let twoInterval;
function userOne() {
    clearInterval(twoInterval);
    oneUser.checked = true;
    if(oneUser.checked){
        twoUserLab.style.background = 'lightgrey';    
        oneUserLab.style.background = 'green';
    }
    let minute = 10;
    let second = 59;
    oneInterval = setInterval( () => {
        timeTwo.innerHTML = `${minute}:${second}`;
        if(minute === 0 && second === 0 ){
            clearInterval(oneInterval);
            document.body.appendChild(refresh);
            refresh.onmouseup = () => {
                minute = 10;
                second = 0;
                timeTwo.innerHTML = `${minute}:${second}0`;

             }
             
            }
            if(second === 0){
                minute--;
                second = 60;
            }
        second--;
    },1000)
}
function userTwo() {
    clearInterval(oneInterval);
    twoUser.checked = true;
    if(twoUser.checked){
        oneUserLab.style.background = 'lightgrey';
        twoUserLab.style.background = 'green';
    }
    let minute = 10;
    let second = 59;
    twoInterval = setInterval( () => {
        timeOne.innerHTML = `${minute}:${second}`;
        if(minute === 0 && second === 0 ){
            clearInterval(twoInterval);
            document.body.appendChild(refresh);
            refresh.onmouseup = () => {
                minute = 10;
                second = 0;
                timeOne.innerHTML = `${minute}:${second}0`;
             }
             
        }
        if(second === 0){
            minute--
            second = 60
        }
        second--;
    },1000)
}

