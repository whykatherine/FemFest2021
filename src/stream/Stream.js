import React from 'react';

function Stream(props) {
  return (
    <iframe src="https://player.twitch.tv/?channel=hasanabi&parent=femfest.online"
      frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"
      id="stream_embed"
      title="Twitch stream"></iframe>
  );
}

export default Stream;