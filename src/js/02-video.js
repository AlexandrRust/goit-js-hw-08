import Player from "@vimeo/player";
import { throttle } from 'throttle-debounce';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    const throttleFunc = throttle(1000, function (data) {
    sessionStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
    });
player.on('timeupdate', throttleFunc)


const pageInit = () => {
    const seconds = sessionStorage.getItem('videoplayer-current-time');
    if (seconds) {
        player.setCurrentTime(seconds);
    }
    
    
};


addEventListener('DOMContentLoaded', () => {
    pageInit();
});