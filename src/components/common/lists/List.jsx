import { isFunction } from 'lodash';

const getListItemClassName = (listItemClassName, itemConfig) =>
  isFunction(listItemClassName)
    ? listItemClassName(itemConfig)
    : listItemClassName;

const getListItemChildren = (children, itemConfig) =>
  isFunction(children) ? children(itemConfig) : children;

function List(props) {
  const {
    ListType = 'ul',
    listClassName,
    listItemClassName,
    itemsConfigs,
    children,
  } = props;

  return (
    <ListType className={listClassName}>
      {itemsConfigs.map((itemConfig, i) => (
        <li
          key={i}
          className={getListItemClassName(listItemClassName, itemConfig)}
        >
          {getListItemChildren(children, itemConfig)}
        </li>
      ))}
    </ListType>
  );
}
export default List;
