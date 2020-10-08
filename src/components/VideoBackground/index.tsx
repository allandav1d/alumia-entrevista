import React from 'react';

import './styles.css'
import videoFile from '../../assets/video_demo.mp4';
import videoFileOgg from '../../assets/video_demo.ogg';

const VideoBackground: React.FC = () => {
  return (
    <div id="background-video" className="header"> 
      <div className="video-conteiner">    
    <video loop autoPlay muted>
      <source src={videoFile} type="video/mp4" />
      <source src={videoFileOgg} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
      </div>
      <div className="video-text">
      <h1 className="text-course">Unity</h1>
      <h2 className="text-sub">Uma MasterClass para os contadores de história.</h2>
      </div>
    </div>
  );
};

export default VideoBackground;
