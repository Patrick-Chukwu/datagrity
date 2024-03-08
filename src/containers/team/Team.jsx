import React from 'react'

import './team.css';

import kemi from '../../assets/kemi.jpeg';
import pat from '../../assets/patrick.png';
import haruna from '../../assets/haruna.jpeg';
import oketayo from '../../assets/oketayo.jpeg';
import morgak from '../../assets/morgak.jpeg';
import julius from '../../assets/julius.jpeg';

const Team = () => {
  return (
    <div className="team column" id='team'>
    <div className="team_title column"><h2>Our Team</h2></div>
  <div className="team_body row">
  <div className="team_boxes column">
              <img src={haruna} alt="" />
              <h3>Haruna Abdu</h3>
              <p>Artificial Intelligence lead</p>
              <div className="read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
          <div className="team_boxes column">
              <img src={kemi} alt="" />
              <h3>Oduwole Oluwakemi</h3>
              <p>Presentation lead.</p>
              <div className="team_read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
          <div className="team_boxes column">
              <img src={oketayo} alt="" />
              <h3>Oketayo Abimbola</h3>
              <p>Research lead.</p>
              <div className="read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
          <div className="team_boxes column">
              <img src={morgak} alt="" />
              <h3>Morgak Gotip</h3>
              <p>Cyber Security lead.</p>
              <div className="read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
          <div className="team_boxes column">
              <img src={pat} alt="" />
              <h3>Patrick Chukwu</h3>
              <p>Frontend Development lead.</p>
              <div className="read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
          <div className="team_boxes column">
              <img src={julius} alt="" />
              <h3>Attah Francis Julius</h3>
              <p>Deep learning lead.</p>
              <div className="read-more">
                  <a>Read more &#11157;</a>
              </div>
          </div>
  </div>
  </div>
  )
}

export default Team