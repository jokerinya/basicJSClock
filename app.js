const secondBg = document.getElementById('second-bg');
const minuteBg = document.getElementById('minute-bg');
const hourBg = document.getElementById('hour-bg');
const startDegree = {
  second: 0,
  minute: 0,
  hour: 0,
};

function makeKeyframes(degree) {
  return [
    { transform: `rotateZ(${degree - 90}deg)` },
    { transform: `rotateZ(${degree + 270}deg)` },
  ];
}
function makeTiming(duration) {
  return {
    duration: duration,
    iterations: Infinity,
  };
}

function timeStart() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours() % 12 || 12;

  startDegree.second = seconds * 6;
  startDegree.minute = minutes * 6;
  startDegree.hour = hour * 30;

  secondBg.animate(makeKeyframes(startDegree.second), makeTiming(60 * 1000));
  minuteBg.animate(makeKeyframes(startDegree.minute), makeTiming(60 * 60 * 1000));
  hourBg.animate(makeKeyframes(startDegree.hour), makeTiming(60 * 60 * 60 * 1000));
}

timeStart();
