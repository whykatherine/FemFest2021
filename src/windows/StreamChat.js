import React from 'react';

function StreamChat(props) {
  return (
  	<iframe
      id="chat_embed"
      src="https://www.twitch.tv/embed/femfest2021/chat?parent=femfest.online"
      height="500"
      width="350"
      title="Twitch stream chat"></iframe>
  );
}

export default StreamChat;