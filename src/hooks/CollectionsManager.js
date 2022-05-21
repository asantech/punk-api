import React, { Component } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';

import * as storageServices from '../services/storageServices';

class CollectionsManager extends Component {
  state = {
    cart: [],
    favourites: [],
  };

  mountCollections = () => {
    const newState = { ...this.state };
    storageServices.initializeStorage('cart');
    storageServices.initializeStorage('favourites');

    newState['cart'] = storageServices.getStoredData('cart');
    newState['favourites'] = storageServices.getStoredData('favourites');

    this.setState(newState);
  };

  isItemAdded = (collection, itemInfo) => {
    const selectedItem = _.filter(collection, function (item) {
      return item.id === itemInfo.id;
    });
    return selectedItem.length ? true : false;
  };

  addToCollection = (collectionName, item, newState, expirationDuration) => {
    if (!isItemAdded(this.state[collectionName], item)) {
      let collection = [...this.state[collectionName]];
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
  };

  removeFromCollection = (collectionName, item, newState) => {
    if (isItemAdded(this.state[collectionName], item)) {
      let collection = [...this.state[collectionName]];
      collection = collection.filter(_item => _item.id !== item.id);
      if (collection.length === 0)
        storageServices.setDataToStorage(collectionName, [], 0);
      newState[collectionName] = collection;
      toast.success(
        `The item got successfully removed from ${collectionName}.`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } else {
      toast.error(`This item is already removed from ${collectionName}.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    return newState;
  };
}

export default {
  mountCollections,
  isItemAdded,
  addToCollection,
  removeFromCollection,
};
