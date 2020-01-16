import React from 'react';
import git_img from '../img/github_ico.png'
import linked_img from '../img/linkedin_ico.png'
import contact_img from '../img/contact_ico.png'




const Contact = () => {
    return(
        <>
        <img src={contact_img} alt = "contact-pic" style={{ width: '40px', height: '40px' }}></img><br></br>
        <p>email: nevenasd2@gmail.com</p>
        <a href="https://github.com/NevenaMasovic777" target="blank"><img src={git_img} alt="github-pic" style={{ width: '40px', height: '40px', marginRight: '20px' }}></img></a>
        <a href="https://www.linkedin.com/in/nevena-masovic-816332142/" target="blank"><img src={linked_img} alt="github-pic" style={{ width: '40px', height: '40px' }}></img></a>   
        </>
    )
}

export default Contact