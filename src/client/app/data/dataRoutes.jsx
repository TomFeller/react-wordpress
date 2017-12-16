// 'http://127.0.0.1:8083/wordpress/wp-json/wp/v2/posts/'

const root = 'http://127.0.0.1:8083/wordpress/';

const routes = {
  posts: root  + 'wp-json/wp/v2/posts',
  menus: root  + 'wp-json/wp-api-menus/v2/menus',
  categories : root + 'wp-json/wp/v2/categories'
}

export default routes;