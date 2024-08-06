const countdown = () => {
    const countDate = new Date('2022/09/01 00:00:00').getTime();
    const now = new Date().getTime();
    const span = countDate - now;

    // Time values
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Time calculation
    const textDay = Math.floor(span / day);
    const textHour = Math.floor((span % day) / hour);
    const textMinute = Math.floor((span % hour) / minute);
    const textSecond = Math.floor((span % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
}
setInterval(countdown, 1000);
 