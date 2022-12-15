function AboutMePage() {
  return (
    <>
      <div className='about-me-page db-page-padding-2'>
        <h1 className='db-color-gold fs-2 mb-5 fw-bold'>About Me</h1>

        <div
          className='img-wrapper d-flex p-2 mx-auto my-5 rounded-circle overflow-hidden'
          style={{
            width: '175px',
            borderColor: '#d0b27d',
            borderStyle: 'dashed',
            borderWidth: '4px',
          }}
        >
          <img
            className='mw-100 rounded-circle'
            src='images/profile/ProfileImage.jpg'
            alt='Me'
          />
        </div>
        <p className='fs-4'>
          Hi, I'm Mohammad Hossein Moayeri and I love programming and creating
          complicated web apps.
          <br></br>I like discussing programming topics with other programmer
          who are interested.
          <br></br>
          It's about 3.5 years that I'm doing front-end apps in the web
          platform.
        </p>
        <div className='fs-4'>
          My main goals are:
          <ol>
            <li>progressive improvement in my work and career</li>
            <li>
              gaining more knowledge and experience to deepen my skill set
            </li>
            <li>working more efficiently</li>
            <li>
              working with better companies and teams who create a great working
              environment
            </li>
          </ol>
        </div>
        <div className='fs-4'>
          Areas in programming that I like participating in are:
          <ol>
            <li>analyzing systems and app architectures</li>
            <li>solving programming problems</li>
            <li>debugging</li>
            <li>
              understanding the programming tools and using their fullest
              capability
            </li>
            <li>understanding the runtime environments</li>
          </ol>
        </div>
        <div className='fs-4'>
          Currently my skill set's are:
          <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Vanilla JS</li>
            <li>Typescript</li>
            <li>Bootstrap 5</li>
            <li>Fomantic-UI</li>
            <li>jQuery</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Metronik</li>
          </ol>
        </div>
        <p className='fs-4 mb-5'>
          If you like to see the projects that I have done, checkout my GitHub
          link:
          <br></br>
          <a
            className='text-decoration-none db-color-gold'
            href='https://github.com/asantech'
          >
            https://github.com/asantech
          </a>
        </p>
      </div>
    </>
  );
}

export default AboutMePage;
