import React from 'react';

function Stream(props) {
  return (
    <iframe src="https://player.twitch.tv/?channel=hasanabi&parent=localhost"
      frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"
      id="stream_embed"></iframe>
  );
}

export default Stream;