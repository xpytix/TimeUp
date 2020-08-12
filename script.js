//selectors
const btnStoper = document.querySelector('.button-stoper');
const btnMinutnik = document.querySelector('.button-minutnik');
const btnLearnApp = document.querySelector('.button-learnapp');
let container = document.querySelector('.container');

//Event Listeners
btnStoper.addEventListener('click', addStoper)

btnMinutnik.addEventListener('click', addMinutnik)
btnLearnApp.addEventListener('click', addLearnApp)




function addStoper() {

    removeElement();


    let html;
    html = '<div id="stoper"><div class="time-stoper"><p id="res"><span id="min">0</span>:<span id="sec">00</span>:<span id="msec">000</span></p></div><div class="btn-stoper"><button class="start" >START </button><button class="stop" >STOP </button><button class="reset" >RESET</button></div></div>';
    document.querySelector('.container').insertAdjacentHTML('beforeend', html);


    //STOPER CODE
    document.querySelector('.start').addEventListener('click', startWatch);
    document.querySelector('.stop').addEventListener('click', stopWatch);
    document.querySelector('.reset').addEventListener('click', resetWatch);

    let timer = null;
    let min_txt = document.getElementById("min");
    let min = Number(min_txt.innerHTML);
    let sec_txt = document.getElementById("sec");
    let sec = Number(sec_txt.innerHTML);
    let msec_txt = document.getElementById("msec");
    let msec = Number(msec_txt.innerHTML);
    function stopTimeMilliseconds(timer) {
        if (timer) {
            clearInterval(timer);
            return timer;
        }
        else return timer;
    }
    function startTimeMilliseconds() {
        let currDate = new Date();
        return currDate.getTime();
    }
    function getElapsedTimeMilliseconds(startMilliseconds) {
        if (startMilliseconds > 0) {
            let currDate = new Date();
            elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
            return elapsedMilliseconds;
        }
        else {
            return elapsedMilliseconds = 0;
        }
    }
    function startWatch() {
        // START TIMER
        timer = stopTimeMilliseconds(timer);
        let startMilliseconds = startTimeMilliseconds();
        timer = setInterval(function() {
            let elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds);
            if (msec < 10) {
                msec_txt.innerHTML = "00" + msec;
            }
            else if (msec < 100) {
                msec_txt.innerHTML = "0" + msec;
            }
            else {
                msec_txt.innerHTML = msec;
            }
            if (sec < 10) {
                sec_txt.innerHTML = "0" + sec;
            }
            else {
                sec_txt.innerHTML = sec;
            }
            min_txt.innerHTML = min;
            msec = elapsedMilliseconds;
            if (min >= 59 && sec >=59 && msec > 900) {
                timer = stopTimeMilliseconds(timer);
                return true;
            }
            if (sec > 59) {
                sec = 0;
                min++;
            }
            if (msec > 999) {
                msec = 0;
                sec++;
                startWatch();
            }
        }, 10);
    }
    function stopWatch() {
        // STOP TIMER
        timer = stopTimeMilliseconds(timer);
        return true;
    }
    function resetWatch() {
        // REZERO TIMER
        timer = stopTimeMilliseconds(timer);
        msec_txt.innerHTML = "000";
        msec = 0;
        sec_txt.innerHTML = "00";
        sec = 0;
        min_txt.innerHTML = "0";
        min = 0;
        return true;
    }









}
function addMinutnik() {
    removeElement();

    let html;
    let reset = true;
    html = '<div id="minutnik"><div class="time-minutnik"><select class="form-control" id="edt-minute"><option>00&nbsp;&nbsp;</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option><option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option><option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option></select> <select class="form-control" id="edt-second"><option>00</option></select> </div>  <div class="countdown">  <p id="count"> --:--</p></div> <div class="btn-minutnik"> <button class="start">START</button><button class="reset">RESET</button> </div></div>';
    document.querySelector('.container').insertAdjacentHTML('beforeend', html);

    document.querySelector('.start').addEventListener('click', start);
    document.querySelector('.reset').addEventListener('click', restart );
    function restart() {
        reset =false;

    }
    let time =0;
    let startingMinutes =0;
    function start()
    {
        reset =true;
        let second, minute;

        if(document.querySelector('#edt-minute').value >= 0) {
            minute = document.querySelector('#edt-minute').value;
        }
        startingMinutes = minute;
        time = startingMinutes*60;
        let minutes = 0;
        let seconds =0;

        let x = setInterval(updateCountdown, 1000);


            function updateCountdown() {


                if(reset ===true && time>=0){
                    minutes = Math.floor(time / 60);
                    seconds = time % 60;

                    seconds = seconds <10 ? '0' +seconds:seconds;
                    document.getElementById('count').innerText = minutes + ':' + seconds;
                    time--;

                }
                else if (reset === false || document.getElementById('count').innerText === '0:00' || time <0)
                {
                    document.getElementById('count').innerText = '0:00';
                    clearInterval(x);

                     minutes = 0;
                     seconds =0;
                     time = 0;
                }
            }

    }

}
function addLearnApp() {
    removeElement();

    let html;
    html = '<div id="learnApp"><div class="type"> <button class="pomodoro">Pomodoro</button> <button class="shortBreak" >Short Break </button> <button class="longBreak" >Long Break </button></div> <div class="time-learnApp"> 25:00</div><div class="btn-learnApp"> <button class="start" >Start</button><button class="reset" >Reset </button></div></div>';
    document.querySelector('.container').insertAdjacentHTML('beforeend', html);

    let pomodoro, shortBreak, longBreak, start, reset;
    pomodoro = document.querySelector('.pomodoro');
    shortBreak =document.querySelector('.shortBreak');
    longBreak =document.querySelector('.longBreak');
    start = document.querySelector('.start');
    reset = document.querySelector('.reset');

    pomodoro.addEventListener('click', twentyFive);
    shortBreak.addEventListener('click', five);
    longBreak.addEventListener('click', ten);


    let min =25;
    let restart;
    let time =0;
    let startingMinutes =0;
    const timeDisplay =  document.querySelector('.time-learnApp');



    start.addEventListener('click', startFun);
    reset.addEventListener('click', resetFun );

    function end() {
        timeDisplay.innerText = '0:00'
    }
    let temp = 0;
    function startFun() {

        restart = true;
        let x = setInterval(updateCountdown, 1000);
        startingMinutes = min;
        time = startingMinutes * 60;
        let minutes = 0;
        let seconds = 0;
        temp = min;


        function updateCountdown() {

            if(restart===true)
            {

                minutes = Math.floor(time / 60);
                seconds = time % 60;

                seconds = seconds < 10 ? '0' + seconds : seconds;
                timeDisplay.innerText = minutes + ':' + seconds;
                time--;
                switch (time === 0 && temp ) {
                    case 25:
                        alert("TIME TO BREAK");
                        break;
                    case 5:
                        alert("TIME TO STUDY");
                        break;
                    case 10:
                        alert("TIME TO STUDY");
                        break;
                }

            }
            if(restart === false || timeDisplay.innerText === '0:00' || time < 0)
            {
                restart=  false;
                minutes = 0;
                seconds =0;
                time = 0;
                clearInterval(x);
                end();


            }


        }
    }
    function resetFun() {
        restart=  false;
    }


    function twentyFive() {
        timeDisplay.innerHTML= '25:00';
        min = 25;
       return min;

    }

    function five() {
        timeDisplay.innerHTML= '5:00'
        min = 5;
        return min;
    }

    function ten() {
        timeDisplay.innerHTML= '10:00'
        min= 10;
        return min;
    }


}
function removeElement() {
    container.innerHTML = "";
}
