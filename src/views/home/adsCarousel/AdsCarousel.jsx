import Carousel from 'react-bootstrap/Carousel';

function AdsCarousel() {
  return (
    <div className='ads-carousel-wrapper m-0' style={{ minHeight: '625px' }}>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className='d-block w-100 border-end border-white'
            src='images/views/home/adCarousel/AD-1.webp'
            alt='First AD'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 border-end border-white'
            src='images/views/home/adCarousel/AD-2.webp'
            alt='Second AD'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AdsCarousel;
