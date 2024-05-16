import React from 'react'
import './about.css'
import ME from '../../imagesAndFiles/me2.jpg'

const About = () => {
  return (
    <section id='about'>      

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={ME} alt="me2" />
          </div>
        </div>

        <div className='about-content'>
          <h2>About me</h2>
          <p>After graduating and working for three years as a teacher, 
          I have decided to change my career and look for new challenges in IT.  In addition to various online courses, 
          I have completed Codecool's Front-End Developer program which further increased my passion and motivation in working in this field. Since 2022, I am working as a Creative Developer at McCann Erickson where I had the opportunity to develop both my hard and soft skillset necessary for different projects. Overall, I am a highly motivated and easy-going person who always looks for opportunity to learn and develop as a collegue.
          </p>
{/*           <div className='education'>
            <h2>Education</h2>
            <div className="frontend-cont">
              <p className="first-line">Frontend Developer <br /> Codecool, Budapest <br /> 2022 </p>
            </div>
            <div className="elementary-cont">
              <p className="first-line">Elementary School Teacher <br /> University of ELTE <br /> 2014-2018</p>
            </div>
          </div>
          <div className='skills'>
            <h2>My skills</h2>
            <p>Frontend Developer Codecool Budapest 2022</p>
          </div>
 */}        </div>
      </div>
    </section>
  )
}

export default About