import React from 'react';
import './Gallery.css';

function Gallery({ items }) {
  const listItems =
    items &&
    items.map(item => {
      return (
        <div className="Gallery__Square">
          <div className="Gallery__Item">
            <img
              className="Gallery__Background"
              src={item.logo}
              alt={`${item.title}'s logo`}
            />
            <a target="_blank" href={item.url}>
              <div className="Gallery__Overlay">
                <div className="Gallery__Title">{item.title}</div>
                <div className="Gallery__Desc">{item.description}</div>
              </div>
            </a>
          </div>
        </div>
      );
    });

  return <div className="Gallery">{listItems}</div>;
}

export default Gallery;
