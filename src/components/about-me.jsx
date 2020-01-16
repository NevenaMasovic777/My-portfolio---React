import React from 'react';

const AboutMe = () => {



    return (
      <>
      <div className = 'about-wrapper'>
        <div className="about">
          I strive to gain as much knowledge as possible. It all started with
          languages and continued to the area of Infromation Technologies.
          Having discovered Web Design and programming languages like JavaScript
          and Python, I started building up my knowledge in order to enrich it
          and combine it with liguistic skills I've gained throughout my
          studies.
        </div>
        </div>
        <div className="wrapper">
          <div className="personal-interests">
            <label>
              <b>Personal interests and hobbies</b>
            </label>
            <p>Pole fitness</p>
            <p>Running</p>
            <p>Natural Language Processing</p>
            <p>Russian literature</p>
          </div>
        </div>
        <div className = 'languages-wrapper'>
          <div className="languages">
            <label>
              <b>Languages</b>
            </label>
            <p>Serbian(native)</p>
            <p>English C1</p>
            <p>Italian C1</p>
          </div>
        </div>
      </>
    );
}

export default AboutMe