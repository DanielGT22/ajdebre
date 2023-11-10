
import React, { useState, useEffect } from 'react';

const AlbumCard = ({ songInfo }) => {
  return (
    <div className="col text-center" id={songInfo.id}>
      <img className="img-fluid" src={songInfo.album.cover_medium} alt="track" />
      <p>
       "{songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}"<br />
        Artist: {songInfo.artist.name}
      </p>
    </div>
  );
};

const MusicSection = ({ artistName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setData(result.data.slice(0, 4));
        } else {
          throw new Error('Error in fetching songs');
        }
      } catch (err) {
        console.log('error', err);
      }
    };

    fetchData();
  }, [artistName]);

  return (
    <div className="row">
      {data.map((song) => (
        <AlbumCard key={song.id} songInfo={song} />
      ))}
    </div>
  );
};

export default MusicSection;
