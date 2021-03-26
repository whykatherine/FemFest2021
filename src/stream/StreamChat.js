import React from 'react';

function StreamChat(props) {
  // <div id="chat_embed__container">
  return (
    <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/hasanabi/chat?parent=femfest.online"
        height="500"
        width="350"
        title="Twitch stream chat"></iframe>
  );
}

export default StreamChat;