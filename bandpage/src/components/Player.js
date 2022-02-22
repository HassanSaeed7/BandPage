import React from "react";
import Iframe from "react-iframe";

const Player = () => {
  return (
    <>
      <Iframe
        url="https://bandcamp.com/EmbeddedPlayer/album=2562109330/size=large/bgcol=ffffff/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
        width="700px"
        height="120px"
        id="player"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </>
  );
};

export default Player;
