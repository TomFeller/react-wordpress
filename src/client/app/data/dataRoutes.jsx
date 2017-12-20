// 'http://127.0.0.1:8083/wordpress/wp-json/wp/v2/posts/'

const root = 'http://127.0.0.1:8083/wordpress/';
const menus = root  + 'wp-json/wp-api-menus/v2/menus/';

const routes = {
  posts: root  + 'wp-json/wp/v2/posts',
  categories : root + 'wp-json/wp/v2/categories',
  mainNavigation: menus + '2',
  subNavigation: menus + '7'
}

export default routes;