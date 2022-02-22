import React from "react";

const Player = () => {
  return (
      <>
    <iframe
      style={`border: 0; width: 10%; height: 120px;`}
      title="player"
      src="https://bandcamp.com/EmbeddedPlayer/album=2562109330/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://waketheband.bandcamp.com/album/-"> by WAKE</a>
    </iframe>
    </>
  );
};

export default Player;
