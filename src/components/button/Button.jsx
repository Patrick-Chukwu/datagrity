import React from 'react';

import model1 from '../../assets/model1.jpeg';
import model2 from '../../assets/model2.jpeg';
import model3 from '../../assets/model3.jpeg';


import './button.css';

const Button = () => {
  return (
    <div className='button_page column' id='models'>
    <div className="button_title column">
        <h2>Models</h2>
        <p>We leverage highly enhanced Artificial Intelligence based models to offer integrity in data capturing, verification and validation</p>
    </div>
    <div className="button_body row">
        <div className="button_boxes column">
            <img src={model1} alt="" />
            <h3>Deep Learning Model for Amputee Verification</h3>
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
        
        <div className="button_boxes column">
            <img src={model3} alt="" />
            <h3>Facial-Based Model for Twins and Minors</h3>
    
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
        <div className="button_boxes column">
            <img src={model2} alt="" />
            <h3>Enhanced Deep Transfer Learning Model</h3>
    
            <div className="services_read-more">
                <a>Read more &#11157;</a>
            </div>
        </div>
    </div>
</div>  )
}

export default Button;