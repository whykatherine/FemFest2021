// modules
import React from 'react';

function Playlist(props) {
	return (
		<div className="playlist">
      <iframe
      	title="Spotify playlist" className="spotify"
      	src="https://open.spotify.com/embed/playlist/27YwAmEiOtgthJhSM3eBBT"
      	width="100%" height="380"
      	frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
	);
}

export default Playlist;