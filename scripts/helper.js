class Helper {

  playPauseAndUpdate(song) {
    player.playPause(song);
    let totalTime = 'null';
    if (song !== undefined){
      totalTime =song.duration;
    } else {
      totalTime = player.getDuration();
  }

  /* prettified! */
    $('#time-control .total-time').text(player.prettyTime(totalTime));

};

}
const helper = new Helper();
