import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import VideoItem from '../../components/VideoItem/VideoItem';
import './Home.css';

const Home = () => {
  const videos = (useLocation().state || {}).videos || [];
  const history = useHistory();

  const onVideoSelect = (video) => {
    history.push({ pathname: '/video', state: { id: video.id.videoId } })
  };

  return (
    <div className="ui container">
      <div className="ui grid video-list">
        <div className="ui relaxed divided list">
          {
            videos.map(video => {
              return <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={() => onVideoSelect(video)}
              />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
