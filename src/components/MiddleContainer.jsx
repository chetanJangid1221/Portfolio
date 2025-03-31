import React from "react";
import { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";

function MiddleContainer() {
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    function calculateExperience(joiningDate) {
      const startDate = new Date(joiningDate);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }
      const totalExperience = (years + months / 12).toFixed(1);

      return parseFloat(totalExperience);
    }

    setExperience(calculateExperience("2022-08-01")); // Set your actual joining date here
  }, []);

  return (
    <div className="middle-container">
      <div className="about-section" id="gotoAbout">

        {/* <img className="profile-img" src={process.env.PUBLIC_URL + "/images/profile-photo.png"} alt="Profile photo" /> */}

        <div className="text-box" >
          <h1>About Me</h1>
          <p >
            Hi there! <strong>I'm Chetan Jangid</strong>, an <strong>Automation Test Engineer</strong> with <strong><CountUp start={0} end={experience} decimals={1} duration={5} /> of experience</strong>, currently working at <strong>Cognizant</strong>.
            My expertise lies in <strong>UI and API automation</strong>, where I leverage <strong>Selenium</strong> for UI testing and <strong>Rest Assured</strong> for API automation.

            I have hands-on experience with various testing frameworks, including <strong>Cucumber</strong>, <strong>TestNG</strong>, <strong>MSTest</strong>, and <strong>SpecFlow</strong>.
            I primarily work with <strong>Java</strong> and <strong>C#</strong> for automation and have a basic understanding of <strong>React</strong> and <strong>Spring Boot</strong>.

            I am passionate about building <strong>efficient</strong>, <strong>scalable</strong>, and <strong>reliable test automation solutions</strong>.
            Feel free to explore my work and <strong>connect with me</strong>!
          </p>

        </div>

      </div>
      <div className="career-section" id="gotoCareer">
        <h3>Career</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Organization</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">August 2022 - Present ({experience} years)</td>
              <td>Cognizant</td>
              <td>Automation Test Engineer (SDET)</td>
            </tr>
            <tr>
              <td scope="row">February2022 - May 2022</td>
              <td>Cognizant</td>
              <td>Internship</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="skills-section" id="gotoSkills">
        <h1>My Skills & Certification</h1>
        <span>- An overview of my Technical Skills -</span>

        <dl className="dictionary">
          <div className="card">
            <dt>
              <div className="dictionary-top">
                <h3>Core Competencies</h3>
              </div>
            </dt>
            <dd>
              <h6>Test Automation Frameworks</h6>
              <h6>Web Application Automation</h6>
              <h6>API Testing Automation</h6>
              <h6>Agile & DevOps Methodologies</h6>
              <h6>CI/CD Integration</h6>
              <h6>Azure Cloud </h6>
            </dd>
          </div>
          <div className="card">
            <dt>
              <div className="dictionary-top">
                <h3>Technical Skills</h3>
              </div>
            </dt>
            <dd>
              <h6>Java & C#</h6>
              <h6>Selenium</h6>
              <h6>Rest Assured</h6>
              <h6>Rest Sharp</h6>
              <h6>Cucumber</h6>
              <h6>TestNG</h6>
              <h6>Page Object Model</h6>
              <h6>React & Spring Boot</h6>
              <h6>Git,Jenkins,AzureDevops</h6>
            </dd>
          </div>

          <div className="card">
            <dt>
              <div className="dictionary-top">
                <h3>Certification</h3>
              </div>
            </dt>
            <dd>
              <h6>Cognizant Certified Full Stack Automation Test Engineer </h6>
              <h6>Microsoft Certified Azure Fundamentals AZ-900</h6>
              <h6>Cognizant Certified Generative AI Associate</h6>
              <h6>Udemy Certified Selenium Expert</h6>
              <h6>Udemy Certified API Automation Tester</h6>
              <h6>Udemy Certified Spring Boot Basic</h6>
            </dd>
          </div>


        </dl>
      </div>
      <div className="project-section" id="gotoProject">
        <h1>Projects</h1>
        <span>- Some recent projects -</span>

        <dl className="Project-dictionary">
          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/FoodExpress.png"}></img>
            <div className="skill-column">
              <dt>

                <form action="https://foodexpress-jrwp.onrender.com">
                  <button className="btn d-block w-100 livePreview">Live Preview</button>
                </form>

                <h1>FoodExpress</h1>
                <h5>Food Ecommerce</h5>
              </dt>
              <dd>
                FoodExpress: Delightful food shopping made easy. Discover, order,
                and enjoy diverse culinary delights from around the world.
                Explore a world of flavors with us!</dd>
              <h5 className="tech" >Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">JavaScript</span>
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">Encryption</span>
                <span className="badge rounded-pill skill-tags ">MongoDB</span>
                <span className="badge rounded-pill skill-tags ">Mongoose</span>
                <span className="badge rounded-pill skill-tags ">Hooks</span>
                <span className="badge rounded-pill skill-tags ">Render</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/Practo-automation.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Finding Hospital</h1>
                <h5>Automation</h5>
              </dt>
              <dd>Finding hospital is an automation project which is written in java by using Selenium
                tool. Finding Hospital automate the practo health website and collect the information of nearby hospital
                and provide to the user.This automation is also log the success and failure of application and generate a report on it </dd>
              <h5 className="tech">Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">Java</span>
                <span className="badge rounded-pill skill-tags ">Selenium</span>
                <span className="badge rounded-pill skill-tags ">Maven</span>
                <span className="badge rounded-pill skill-tags ">TestNG</span>
                <span className="badge rounded-pill skill-tags ">POM</span>
                <span className="badge rounded-pill skill-tags ">Eclipse</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/Secrets-app.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Secrets</h1>
                <h5>Social Media</h5>
              </dt>
              <dd>Secrets  is a social media application that allows users to create an account,
                share Secrets anonymously.

              </dd>
              <h5 className="tech" >Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">OAuth 2.0</span>
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">Encryption</span>
                <span className="badge rounded-pill skill-tags ">md5</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">MongoDB</span>
                <span className="badge rounded-pill skill-tags ">Mongoose</span>
                <span className="badge rounded-pill skill-tags ">EJS</span>
                <span className="badge rounded-pill skill-tags ">bodyParser</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
              </div>
            </div>
          </div>
          {/*           
          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/Daily-Journal-app.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Daily Journal</h1>
                <h5>Blog</h5>
              </dt>
              <dd>A Daily Journal is a platform where individuals publish regular
                written content on various topics of interest.
                These topics can range from personal experiences, travel, food, technology,
                health, politics, and more.
              </dd>
              <h5 className="tech" >Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">EJS</span>
                <span className="badge rounded-pill skill-tags ">JavaScript</span>
                <span className="badge rounded-pill skill-tags ">bodyParser</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
              </div>
            </div>
          </div>
           */}

          {/* <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/todo-app.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>To-Do List</h1>
                <h5>Productivity </h5>
              </dt>
              <dd>Todo lists is productivity and organization tools.
                Todo list help us listing our task in order to remind us
              </dd>
              <h5 className="tech">Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">MongoDB</span>
                <span className="badge rounded-pill skill-tags ">Mongoose</span>
                <span className="badge rounded-pill skill-tags ">EJS</span>
                <span className="badge rounded-pill skill-tags ">bodyParser</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>


              </div>
            </div>
          </div>
 */}


          {/* <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/Emoji-pedia-app.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Emoji Pedia</h1>
                <h5>Knowledge </h5>
              </dt>
              <dd>Emoji Pedia online encyclopedia that contain articles on
                wide range of emoji.It explain the meaning of different types of emoji.
              </dd>
              <h5 className="tech">Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">EJS</span>
                <span className="badge rounded-pill skill-tags ">JavaScript</span>
                <span className="badge rounded-pill skill-tags ">bodyParser</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
                <span className="badge rounded-pill skill-tags ">Render</span>
              </div>
            </div>
          </div> */}

          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/keeper-app.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Keeper</h1>
                <h5 >Productivity</h5>
              </dt>
              <dd> A Keeper is a software application designed to create,
                store, and manage digital notes.Apps provide a quick and easy way to jot down ideas,
                note-writing apps also allow users With the convenience of note-taking on-the-go.
                They can help users stay organized, increase productivity, and keep track of important information.
              </dd>
              <h5 className="tech">Technologies:</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">ReactJS</span>
                <span className="badge rounded-pill skill-tags ">NodeJS</span>
                <span className="badge rounded-pill skill-tags ">MongoDB</span>
                <span className="badge rounded-pill skill-tags ">Mongoose</span>
                <span className="badge rounded-pill skill-tags ">EJS</span>
                <span className="badge rounded-pill skill-tags ">bodyParser</span>
                <span className="badge rounded-pill skill-tags ">HTML</span>
                <span className="badge rounded-pill skill-tags ">CSS</span>
                <span className="badge rounded-pill skill-tags ">bootstrap</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img className="card-img" src={process.env.PUBLIC_URL + "/images/Smart-attendance.png"}></img>
            <div className="skill-column">
              <dt>
                <h1>Smart Attendance System</h1>
                <h5>Machine Learning</h5>
              </dt>
              <dd>Smart Attendance system is developed for deploying an easy and secure way of taking down attendance.
                The software first captures an image of all the authorized persons and stores the information in the database.
                The system then stores the image by mapping it into a face coordinate structure.
                Next time whenever the registered person enters the premises the system recognizes the person and marks
                his attendance.</dd>
              <h5 className="tech" >Technologies</h5>
              <div className="technologies">
                <span className="badge rounded-pill skill-tags ">Python</span>
                <span className="badge rounded-pill skill-tags ">OpenCV2</span>
                <span className="badge rounded-pill skill-tags ">TensorFlow</span>
                <span className="badge rounded-pill skill-tags ">numpy</span>
                <span className="badge rounded-pill skill-tags ">imutils</span>
                <span className="badge rounded-pill skill-tags ">sklearn</span>
                <span className="badge rounded-pill skill-tags ">pickle</span>
                <span className="badge rounded-pill skill-tags ">'haarcascade_frontalface</span>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}
export default MiddleContainer;