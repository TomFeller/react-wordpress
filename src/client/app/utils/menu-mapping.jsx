var menuMap = (menu, index) => {
  if (menu != undefined) {
    return (
    {
      id: menu.ID,
      name: menu.name,
      slug: menu.slug,
      length: menu.count,
      description: menu.description,
      items: menu.items
    }
    );
  }
}


function mapMenuItems(item) {
  return (
  {
    id: item.id,
    order: item.order,
    parent: item.parent,
    title: item.title,
    url: item.url,
    attr: item.attr,
    target: item.target,
    classes: item.classes,
    xfn: item.xfn,
    description: item.description,
    objectId: item.object_id,
    object: item.object,
    type: item.type,
    typeLabel: item.type_label
  }
  )
}

export default menuMap;