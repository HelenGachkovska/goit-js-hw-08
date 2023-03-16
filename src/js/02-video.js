import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);

// const stopTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
let stopTime = 0;

function getStopTime() {
  if (localStorage.length !== 0) {
    console.log(localStorage);
    const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    let stopTime = time.seconds; 
  } 
}

getStopTime();

player
  .setCurrentTime(stopTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
