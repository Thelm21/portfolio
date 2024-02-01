import heroImg from './assets/hero-img.svg';
import education from './assets/education.png';
import exeperience from './assets/experience.png';
import arrow from './assets/arrow.png'
function About () {
    return (
        <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img
              src={heroImg}
              alt="Profile"
              class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src={exeperience}
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>2+ years <br />Frontend Development</p>
              </div>
              <div class="details-container">
                <img
                  src={education}
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
              </div>
            </div>
            <div class="text-container">
              <p>
                A Passionate and creative individual with a very good skill set in the field.
                I am motivated with passion for excellence and also accomplishing tasks and specific goals.
                I have my skills in graphic desgin and web development. My number one goal is to create impact with
                my work and achieve excellence at its peak.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
    );
};

export default About;