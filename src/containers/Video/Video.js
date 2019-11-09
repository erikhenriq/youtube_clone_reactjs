import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import VideoDetail from '../../components/VideoDetail/VideoDetail';
import VideoItem from '../../components/VideoItem/VideoItem';
import youtubeAPI from '../../apis/youtube';

const Video = () => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { id } = useLocation().state;

  const getVideoById = async () => {
    const response = await youtubeAPI.get('/videos', {
      params: {
        id
      }
    });

    setselectedVideo(response.data.items[0]);
  };

  const getRelatedVideos = async () => {
    const response = await youtubeAPI.get('/search', {
      params: {
        relatedToVideoId: id
      }
    })

    setRelatedVideos(response.data.items);
  };

  const onVideoSelect = (video) => {
    setselectedVideo(video);
    getRelatedVideos(video.id.videoId);
  };

  useEffect(() => {
    getVideoById(id);
    getRelatedVideos(id);
  }, []);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
        </div>
        <div className="five wide column">
          <div className="ui relaxed divided list">
            {
              relatedVideos.map(relatedVideo => {
                return <VideoItem video={relatedVideo} onVideoSelect={() => onVideoSelect(relatedVideo)} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
