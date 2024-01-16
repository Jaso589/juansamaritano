import React, { createContext, useContext, useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [spotifyApi, setSpotifyApi] = useState(null);

  useEffect(() => {
    const token = 'TU_TOKEN_DE_ACCESO_DE_SPOTIFY'; // Reemplaza con tu propio token de acceso
    const api = new SpotifyWebApi();
    api.setAccessToken(token);
    setSpotifyApi(api);
  }, []);

  return (
    <SpotifyContext.Provider value={{ spotifyApi }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotify = () => {
  return useContext(SpotifyContext);
};