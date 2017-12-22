// 'http://127.0.0.1:8083/wordpress/wp-json/wp/v2/posts/'

const siteRoot = 'http://127.0.0.1:8083/wordpress/';
const json = siteRoot + 'wp-json/';
const menus = json + 'wp-api-menus/v2/menus/';

const routes = {
  site: json,
  posts: json + 'wp/v2/posts',
  categories : json + '/wp/v2/categories',
  mainNavigation: menus + '2',
  subNavigation: menus + '7'
}

export default routes;