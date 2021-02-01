import React from 'react';

function StreamChat(props) {
  // <div id="chat_embed__container">
  return (
    <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/hasanabi/chat?parent=localhost"
        height="500"
        width="350"></iframe>
  );
}

export default StreamChat;