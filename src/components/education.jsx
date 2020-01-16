import React from 'react';

const Education = () => {
  return (
    <div className='edu'>

      <label><em style = {{fontSize: "14pt"}}>Education</em></label>
      <ul>
        <li><b>It Bootcamp Belgrade</b><p>October-December 2019</p></li>
        <li><b>Faculty of Philology University of Belgrade</b>
          <ul><br></br>
            <li>
              Master Degree in Italian language, culture and literature <p>October 2018</p>
            </li>
            <li>Bachelor degree in Italian language, culture and literature <p>October 2017</p></li>
          </ul>
        </li>
        <li><b>High School in Smederevo</b>
          <ul><br></br>
          <li>
            Philological department, class of 2007
            </li>
          </ul>
        </li>
      </ul>
      <label><em style = {{fontSize: "14pt"}}>Working Experience</em></label>
      <ul>
        <li><b>English and Italian teacher</b></li><br></br>

        <ul>
          <li>Linguistico Lanuage School | April 2019 - present</li>
          <ul>
            <li className = "smaller">Giving lessons of English and Italian to students of different age</li>
          </ul><br></br>
          <li>St. Nicolas Language Center | November 2018 - April 2019</li>
          <ul>
            <li className = "smaller">Organizinig and preparing language lessons and school curricula</li>
          </ul>
        </ul><br></br>

        <li><b>School life coordinator</b></li><br></br>
        <ul>
          <li>Savremena International School | January 2017 - August 2018</li>
          <ul>
            <li className = "smaller">Planning extracurricular activities for students</li>
          </ul><br></br>
        </ul>

        <li><b>English teacher</b></li><br></br>
        <ul>
          <li>AZB Cooperform School | June 2016 - August 2016</li><br></br>
        </ul><br></br>

        <li><b>Transcription of audio files</b></li>
        <ul>
          <li>Rev Company California | June 2015 - June 2016</li><br></br>
        </ul><br></br>

      </ul>

    </div>
  );
}

export default Education