import React from 'react';
// import git_img from '../img/github_ico.png'
import web from '../img/web_ico.png'

const Projects = () => {
  return (
    <div>
      <div>
        <div className='proj'>
          <label style={{ textAlign: "center", display: "block", margin: "10px", fontSize: "14pt" }}><em>Git projects</em></label>
          <div className='git-projects'>
            <div className='project1'>
              <a href="https://github.com/NevenaMasovic777/SpaceX-React" target="blank"><img src={web} alt="github-pic" style={{ width: '40px', height: '40px', marginRight: '20px' }}></img></a>
              <p>SpaceX project React</p>
              <p style={{ textAlign: "justify" }}>
            Inspired by work of "Space X" company and using its API, I made this project using React library while attending IT Bootacamp course. </p>
            </div>
            <div>
          <a href="https://github.com/NevenaMasovic777/Chatbox" target="blank"><img src={web} alt="github-pic" style={{ width: '40px', height: '40px', marginRight: '20px' }}></img></a>
          <p>Chatbox</p>
          <p>Simple chat platform made in Java Script. </p>
          </div>
          <div>
          <a href="https://github.com/NevenaMasovic777/Forum" target="blank"><img src={web} alt="github-pic" style={{ width: '40px', height: '40px', marginRight: '20px' }}></img></a>
          <p>Forum</p>
          <p>Users put their topics and discuss them after being registered. </p>
          </div>
          </div>
        </div>
      </div>
      <div className='other' style = {{marginTop: "60px"}}>
      <label style={{ textAlign: "center", display: "block", margin: "10px", fontSize: "14pt" }}><em>Other projects</em></label>
        <ul id="list">
          <li>Red Info Portal - Italian to Serbian Translator</li>
          <li>Kampster Platform - Serbian to English Translator</li>
          <li>
            Translation of preliminary encounter program of Italian and Serbian
            military forces
            </li>
          <li>
            Translation of contract between the University of Perugia and the
            University of Belgrade - certification of Italian as L2
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects