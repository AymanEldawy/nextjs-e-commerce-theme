const images = [
  '/images/items/image 2.png',
  '/images/items/image 3.png',
  '/images/items/image 4.png',
  '/images/items/image 5.png',
];
const categories = [
  '/images/categories/1.png',
  '/images/categories/2.jpg',
  '/images/categories/3.png',
  '/images/categories/4.png',
  '/images/categories/5.png',
];
const random = (num) => Math.floor(Math.random() * num);

export const Categories = [
  {
    name: 'Packages',
    slug: 'packages',
    product_length: Math.floor(Math.random() * 24),
    img: categories[0],
  },
  {
    name: 'Clothes',
    slug: 'clothes',
    product_length: Math.floor(Math.random() * 24),
    img: categories[1],
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    product_length: Math.floor(Math.random() * 24),
    img: categories[2],
  },
  {
    name: 'uncategories',
    slug: 'uncategories',
    product_length: Math.floor(Math.random() * 24),
    img: categories[3],
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    product_length: Math.floor(Math.random() * 24),
    img: categories[4],
  },
  {
    name: 'Packages',
    slug: 'packages',
    product_length: Math.floor(Math.random() * 24),
    img: categories[0],
  },
  {
    name: 'Clothes',
    slug: 'clothes',
    product_length: Math.floor(Math.random() * 24),
    img: categories[1],
  },
  {
    name: 'Shoes',
    slug: 'shoes',
    product_length: Math.floor(Math.random() * 24),
    img: categories[2],
  },
  {
    name: 'uncategories',
    slug: 'uncategories',
    product_length: Math.floor(Math.random() * 24),
    img: categories[3],
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    product_length: Math.floor(Math.random() * 24),
    img: categories[4],
  },
];

export const menuItems = [
  { name: 'Menu' },
  { name: 'Best Seller' },
  { name: 'New arrival' },
  { name: 'About us', slug: 'about-us' },
  { name: 'Contact us', slug: 'contact-us' },
];
export const menuItemsFooter = [
  { name: 'Menu', slug: 'menu' },
  { name: 'Best Seller', slug: 'best-seller' },
  { name: 'New arrival', slug: 'new-arrival' },
  { name: 'About us', slug: 'about-us' },
  { name: 'Contact us', slug: 'contact-us' },
];

export const newArrivalList = [
  { name: 'ICE-CREAM TORTES', slug: 'ICE-CREAM-TORTES' },
  { name: 'TORTES', slug: 'TORTES' },
  { name: 'BITES', slug: 'BITES' },
  { name: 'GATEAUX LUX', slug: 'GATEAUX-LUX' },
];

export const bestSellerList = [
  { name: 'TORTES', slug: 'TORTES' },
  { name: 'ORIENTAL', slug: 'ORIENTAL' },
  { name: 'CHOCOLATE', slug: 'CHOCOLATE' },
  { name: 'BAKERY', slug: 'BAKERY' },
  { name: 'GATEAUX', slug: 'GATEAUX' },
  { name: 'MINI SANDWICHES', slug: 'MINI SANDWICHES' },
  { name: 'COOKIES', slug: 'COOKIES' },
];

export const userSettingsMenu = [
  { name: 'my account', slug: 'profile' },
  { name: 'my wishlist', slug: 'profile/wishlist' },
  { name: 'my orders', slug: 'profile/orders' },
  { name: 'my addresses', slug: 'profile/addresses' },
];

export const useFulLinks = [
  { name: 'privacy policy', slug: 'privacy-policy' },
  { name: 'termes & conditions', slug: 'termes&conditions' },
  { name: 'support', slug: 'support' },
];

export const locations = [
  {
    name: 'Port Said Street  ',
    street:
      'Port Said St, Al Mansi, Bab El Sharia, Downtown Cairo, Cairo, Egypt  ',
    phone: '19918',
  },
  {
    name: 'Al Hosary  ',
    street:
      '425 , El Mehwar El Markazi, Behind 6th October University, Giza, Egypt  ',
    phone: '19918',
  },
  {
    name: 'Genena Mall - Nasr City  ',
    street: 'Al Manteqah Al Oula, Nasr City, Nasr City,  Cairo, Egypt',
    phone: '19918',
  },
  {
    name: 'Port Said Street  ',
    street:
      'Port Said St, Al Mansi, Bab El Sharia, Downtown Cairo, Cairo, Egypt  ',
    phone: '19918',
  },
  {
    name: 'Al Hosary  ',
    street:
      '425 , El Mehwar El Markazi, Behind 6th October University, Giza, Egypt  ',
    phone: '19918',
  },
  {
    name: 'Genena Mall - Nasr City  ',
    street: 'Al Manteqah Al Oula, Nasr City, Nasr City,  Cairo, Egypt',
    phone: '19918',
  },
];

export const products = [
  {
    id: 1,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 200,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[0],
  },
  {
    id: 2,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 540,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[0],
  },
  {
    id: 3,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 123,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: false,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[1],
  },
  {
    id: 42,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: false,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[1],
  },
  {
    id: 42,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: false,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[2],
  },
  {
    id: 46,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[2],
  },
  {
    id: 6,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[3],
  },
  {
    id: 14,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: false,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[3],
  },
  {
    id: 24,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: false,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[4],
  },
  {
    id: 34,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[4],
  },
  {
    id: 454,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: true,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[5],
  },
  {
    id: 453,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 454,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4512,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4435,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4535,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4512,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4345,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4215,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 4545,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 45431,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
  {
    id: 43235,
    title: 'white forest torte',
    description:
      'Vanilla Sponge- White Cream- Strawberry Sauce-White Vanilla Sponge- White Cream- Strawberry Sauce-White ...',
    price: 453,
    img: images[Math.floor(Math.random() * (images.length - 1))],
    discount: Math.floor(Math.random() * 15),
    inWishlist: true,
    rating: Math.floor(Math.random() * 6),
    in_stock: false,
    size: Math.max(33, Math.floor(Math.random() * 50), 50),
    category: Categories[6],
  },
];
export const cart = [
  { id: 1, productId: 1, quantity: 2, price: 200 },
  { id: 2, productId: 2, quantity: 4, price: 540 },
  { id: 3, productId: 3, quantity: 3, price: 123 },
  { id: 4, productId: 45, quantity: 2, price: 453 },
  { id: 5, productId: 46, quantity: 4, price: 453 },
  { id: 6, productId: 34, quantity: 4, price: 453 },
];

export const getItemById = (productId) => {
  console.log(productId);
  let item = products.find((product) => product.id === +productId);
  console.log(productId);
  return item;
};
export const calculateTotal = (items) => {
  if (items?.length)
    return items.reduce((result, cur) => {
      return result + cur.quantity * cur.price;
    }, 0);
};
const statusDelivery = ['Completed', 'Delivered', 'Pending', 'Canceled'];
export const orders = [
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
  {
    id: random(2545),
    status: statusDelivery[random(statusDelivery.length - 1)],
    date: new Date(),
    items: products.slice(0, random(4)),
    total: this?.item ? calculateTotal(this.items) : random(3000),
  },
];

export const addresses = [
  {
    id: 1,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 2,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 3,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },

  {
    id: 4,
    name: 'Damitta 1',
    city: 'Cairo',
    country: 'Egypt',
    street: 'El Shrabassy St , Damietta',
    default: true,
  },
];
