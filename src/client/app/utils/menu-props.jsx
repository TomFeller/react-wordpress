var menuProps = (menu) => {
  return ([{
    id: menu.id,
    order: menu.order,
    parent: menu.parent,
    title: menu.title,
    url: menu.url,
    attr: menu.attr,
    target: menu.target,
    classes: menu.classes,
    xfn: menu.xfn,
    description: menu.description,
    objectId: menu.object_id,
    object: menu.object,
    type: menu.type,
    typeLabel: menu.type_label
  }]
  )
}

export default menuProps;

