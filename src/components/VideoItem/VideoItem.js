import React from 'react';

const VideoItem = (props) => {
  const { url, title } = props;

  return (
    <div className="video-item item">
      <img className="ui image" alt={title} src={url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
