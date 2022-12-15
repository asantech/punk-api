function AppInfoPage() {
  return (
    <>
      <div className='app-info-page db-page-padding-2'>
        <div className='db-color-gold mb-5 fs-2 fw-bold'>App Info</div>
        <p className='fs-4'>
          I will give an overview about this app which is not the GitHub repo's
          "ReadMe" file. There I have completely explained about all the
          technical details. The github link of this project is:
          <br></br>
          <a
            className='text-decoration-none db-color-gold'
            href='https://github.com/asantech/punk-api'
          >
            https://github.com/asantech/punk-api
          </a>
        </p>
        <div className='fs-4'>
          <ol>
            <li>
              I chose to code this app in js and not ts, so that after coding a
              complete app, I could have an idea about the advantages of using
              typescript instead of javascript.
            </li>
            <li>
              I chose to use function components because of Its advantages over
              class components.
            </li>
            <li>
              I have chosen to use "CSS modules" instead of plain CSS files and
              SCSS.
            </li>
          </ol>
        </div>
        <p className='fs-4 mb-5'>
          This app is using a mock API called "punk-api", which you can get info
          about different kinds of beers. If you want some more info, you check
          out the link below:
          <br></br>
          <a
            className='text-decoration-none db-color-gold'
            href='https://punkapi.com/'
          >
            https://punkapi.com/
          </a>
        </p>
        <div className='fs-4 mb-5'>
          My goals here is:
          <ol>
            <li>
              To give a good UI which I have taken from the
              <a
                className='text-decoration-none db-color-gold'
                href='https://themeforest.net'
              >
                https://themeforest.net
              </a>
            </li>
            <li>
              To use all of the mock API's capabilities and to show it in a
              meaningful way. Just to see how far I can go.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default AppInfoPage;
