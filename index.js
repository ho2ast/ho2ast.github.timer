const remainTime = document.querySelector('h1#time');

function diffDay() {
  const masTime = new Date("2022-08-22 09:00");
  const todayTime = new Date();
  const diff = masTime - todayTime;

  const diffDay = String(Math.floor(diff / (1000*60*60*24)));
  const diffHour = String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
  const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
  const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");

  // console.log(remainTime);
  // remainTime.innerText = 'test';
  remainTime.innerHTML = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);