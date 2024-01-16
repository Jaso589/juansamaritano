// SpotifyPlayer.js
import React from 'react';

const SpotifyPlayerComponent = ({ playlistUri}) => {
  return (
    <iframe
        title="Spotify Player"
        src={`https://open.spotify.com/embed/playlist/${playlistUri}`}
        width="100%"
        height="200"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    
  );
};

export default SpotifyPlayerComponent;
{/* <SpotifyPlayer
      token={token}
      uris={uris}
      autoPlay
      callback={(state) => console.log(state)}
    /> */}