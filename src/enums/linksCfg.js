export const headerTopMenuLinks = Object.freeze([
  //TODO: check the reason for not working on array
  {
    name: 'App Info',
    path: '/app-info',
    iconClassName: 'bi-info-circle',
  },
  {
    name: 'About Me',
    path: '/about-me',
    iconClassName: 'bi-person-fill',
    rightAligned: true,
    firstRightAligned: true,
  },
  {
    name: 'Contact Me',
    path: '/contact-me',
    iconClassName: 'bi-telephone-fill',
    rightAligned: true,
  },
  {
    name: 'Cart (0)',
    path: '/cart',
    iconClassName: 'bi-cart-fill',
    rightAligned: true,
  },
]);

export const navbarLinks = Object.freeze([
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Favorites',
    path: '/favorites',
  },
  {
    name: 'App Info',
    path: '/app-info',
    firstRightAligned: true,
  },
]);

export const beverageCardLinks = Object.freeze([
  {
    name: 'cart',
    iconClassName: 'bi-bag-fill',
  },
  {
    name: 'observe',
    iconClassName: 'bi-eye-fill',
  },
  {
    name: 'favorite',
    iconClassName: 'bi-heart',
  },
  {
    name: 'compare',
    iconClassName: 'bi-arrow-left-right',
  },
]);

export const categoriesLinks = Object.freeze([
  [
    {
      color: '#cebfb0',
      content: 'images/views/home/sections/categories/Beer.webp',
      isImg: true,
    },
    {
      color: '#aa9060',
      content: 'Food Pairs',
      hasLeftCol: true,
    },

    {
      color: '#d85e34',
      content: 'Browse Food Pairs',
      hasLeftCol: true,
      className: 'fw-bold',
    },
  ],
  [
    {
      color: '#d85e34',
      content: 'images/views/home/sections/categories/Barrel.webp',
      hasRightCol: true,
      isImg: true,
    },
    {
      color: '#cebfb0',
      content: 'First Brew',
    },
    {
      color: '#aa9060',
      content: 'Browse First Brew',
      className: 'fw-bold',
      hasLeftCol: true,
    },
  ],
  [
    {
      color: '#aa9060',
      content: 'images/views/home/sections/categories/Globe.webp',
      isImg: true,
      hasRightCol: true,
    },
    {
      color: '#cebfb0',
      content: 'Beer Name',
    },
    {
      color: '#d85e34',
      content: 'Browse Beer Name',
      className: 'fw-bold',
      hasLeftCol: true,
    },
  ],
]);

export const footerCols = Object.freeze([
  {
    heading: 'My Account',
    list: ['My Account', 'Order Status', 'My Basket', 'My Wishlist'],
  },
  {
    heading: 'Categories',
    list: ['Food Pairs', 'First Brew', 'Beer Name'],
  },
  {
    heading: 'My Working Hours',
    list: ['Saturday – Wed : 9:00am - 5:30pm', 'Thursday: 9:00am - 2:00pm'],
  },
]);

export const socialMediaIcons = Object.freeze([
  {
    iconClassName: 'bi-twitter',
  },
  {
    iconClassName: 'bi-facebook',
  },
  {
    iconClassName: 'bi-instagram',
  },
  {
    iconClassName: 'bi-youtube',
  },
  {
    iconClassName: 'vimeo',
  },
  {
    iconClassName: 'twitch',
  },
  {
    iconClassName: 'discord',
  },
]);
