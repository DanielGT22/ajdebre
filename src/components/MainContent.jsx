import React from 'react';
import MusicSection from './MusicSection';

function MainContent() {
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div id="rock">
        <h2>Rock Classics</h2>
        <MusicSection artistName="bowie"  />
      </div>
      <div id="pop">
        <h2>Pop Culture</h2>
        <MusicSection artistName="ac/dc"  />
      </div>
      <div id="hiphop">
        <h2>#HipHop</h2>
        <MusicSection artistName="post malone"  />
      </div>
    </div>
  );
}

export default MainContent;