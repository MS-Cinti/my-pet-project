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
          I have completed Codecool's Front-End Developer program which further increased my passion and motivation in working in this field. From 2022 until February 2025, I worked as a Creative Developer at McCann Erickson Agency in Budapest, where I had the opportunity to strengthen both my hard and soft skills across a variety of projects. Since March 2025, I have been participating in the FemaleTech program at Deutsche Telekom IT Solutions Hungary, where I am working on a new internal project that will serve as a knowledge-sharing platform. Overall, I am a highly motivated and easy-going person who always looks for opportunity to learn and develop as a colleague.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About