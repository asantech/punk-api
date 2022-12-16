const FullOverlaySplashScreen = () => {
  return (
    <div
      className='full-overlay-splash-screen position-fixed top-0 left-0 d-grid justify-content-center align-items-center text-bg-light opacity-75'
      style={{ width: '100%', height: '100%', zIndex: 1020 }}
    >
      <div className='container text-center'>
        <div
          className='spinner-border border-5 text-warning mb-4'
          role='status'
          aria-hidden='true'
          style={{ width: '100px', height: '100px' }}
        ></div>
        <div className='fs-1 fw-bold'>Loading...</div>
      </div>
    </div>
  );
};

export default FullOverlaySplashScreen;
