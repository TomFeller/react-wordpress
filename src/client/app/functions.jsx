import classNames from 'classnames';

var customFields = ['image', 'description', 'price'];

function getPostClasses(post, category) {
  return classNames(
    'post',
    'post-id-' + post.id,
    category ? 'post-cat-' + category : 'post--single'
    );
}


export {customFields, getPostClasses};