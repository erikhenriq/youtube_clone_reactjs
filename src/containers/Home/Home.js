import React, { useState, useEffect } from 'react';
import VideoItem from '../../components/VideoItem/VideoItem';
import axios from '../../apis/youtube';

const videos = [
  {
    title: '1',
    url: 'https://media.metrolatam.com/2019/02/14/nopuedoestoygordito-66f2ef8c0cc974fe89c3db077a3aa2e9-1200x0.jpg'
  },
  {
    title: '2',
    url: 'https://media.metrolatam.com/2019/02/14/nopuedoestoygordito-66f2ef8c0cc974fe89c3db077a3aa2e9-1200x0.jpg'
  },
  {
    title: '3',
    url: 'https://media.metrolatam.com/2019/02/14/nopuedoestoygordito-66f2ef8c0cc974fe89c3db077a3aa2e9-1200x0.jpg'
  }
];

const Home = () => {
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {

    const response = await axios.get('/search', {
      params: {
        q: 'Reactjs',
        maxResults: 20,
      }
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="ui container">
      <div className="ui grid video-list">
        <div className="ui relaxed divided list">
          {
            videos.map((video) => {
              return <VideoItem key={video.id.videoId} title={video.snippet.title} url={video.snippet.thumbnails.medium.url} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;