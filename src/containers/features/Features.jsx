import React from 'react'

// import snap from '../../assets/snap.png';
import face from '../../assets/face.jpg';
import toe from '../../assets/toe.jpeg';
import finger from '../../assets/hand.jpeg';


import './features.css';
const Features = () => {
  return (
    <div className='features column' id='features'>
    <div className="features_title column">
        <h2>Features</h2>
        <p>Datagrity offers a range of convenient ways to ensure integrity in capturing your data</p>
    </div>
    <div className="features_body row">
        <div className="features_boxes column">
            <img src={finger} alt="" />
            <h3>Finger Detection</h3>
            <p>Access hassle-free finger detection technology at a glance.</p>
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
        <div className="features_boxes column">
            <img src={face} alt="" />
            <h3>Facial recognition </h3>
            <p> Detect unique facial pattern of any human, regardless of age.</p>
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
        <div className="features_boxes column">
            <img src={toe} alt="" />
            <h3>Finger and toe prints</h3>
            <p>Access the uniqueness of finger-printing and toe-printing.</p>
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Features