import { filter } from 'lodash';
import { toast } from 'react-toastify';
import * as storageServices from './storageServices';

export function isItemAdded(collection, itemInfo) {
  const selectedItem = filter(collection, function (item) {
    return item.id === itemInfo.id;
  });
  return selectedItem.length ? true : false;
}

export function addToCollection(...params) {
  const [collectionName, item, state, newState, expirationDuration] = params;
  if (!isItemAdded(state[collectionName], item)) {
    let collection = [...state[collectionName]];
    collection.push(item);
    storageServices.setDataToStorage(
      collectionName,
      collection,
      expirationDuration
    );
    newState[collectionName] = collection;
    toast.success(`The item got successfully added to ${collectionName}.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } else {
    toast.error(`This item is already added to ${collectionName}.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return newState;
}

export function removeFromCollection(...params) {
  const [collectionName, item, state, newState] = params;
  if (isItemAdded(state[collectionName], item)) {
    let collection = [...state[collectionName]];
    collection = collection.filter(_item => _item.id !== item.id);
    if (collection.length === 0)
      storageServices.setDataToStorage(collectionName, [], 0);
    newState[collectionName] = collection;
    toast.success(`The item got successfully removed from ${collectionName}.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  } else {
    toast.error(`This item is already removed from ${collectionName}.`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return newState;
}
