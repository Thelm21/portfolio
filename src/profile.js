import heroImg from './assets/hero-img.svg';
import linkedIn from './assets/linkedin.png';
import github from './assets/github.png';

function Profile () {
    return (
        <section id="profile">
        <div class="section__pic-container">
          <img src={heroImg} alt="hero" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Oluwadolapo Sarah Oguntimoju</h1>
          <p class="section__text__p2">Frontend Developer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            <button class="btn btn-color-1" onclick="location.href='./#contact'">
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedIn}
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://linkedin.com/'"
            />
            <img
              src={github}
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/'"
            />
          </div>
        </div>
      </section>
    );
}

export default Profile;