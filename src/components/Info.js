import React from 'react';
import browseImage from '../res/Globe.png';
import downloadImage from '../res/Download.png';


const Info = () => {
  return (
    <div className="info">
      <div className="info-section info-browse">
        <img src={browseImage} alt="Browse" className="info-image" />
        <p>Explore our vast collection of PDF files using your favorite browser.</p>
      </div>
      <div className="info-section info-download">
        <img src={downloadImage} alt="Download" className="info-image" />
        <p>Download your selected PDF files hassle-free and enjoy offline access.</p>
      </div>
    </div>
  );
};

export default Info;


