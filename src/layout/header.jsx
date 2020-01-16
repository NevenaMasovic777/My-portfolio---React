import React from 'react';
import image from '../img/slika.jpeg'

const Header = () => {

    

    return (
      <>
        <img className="profile-img" src={image} alt="slika-neka"></img>
        <p style={{ fontSize: "14pt", color: "rgb(2, 55, 77)" }}>
          <em>Hello. I'm Nevena Masovic.</em>
        </p>
      </>
    );
}

export default Header