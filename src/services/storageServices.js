import _ from 'lodash';

export function setDataToStorage(key, data, expirationDuration) {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      expirationTime: _.now() + expirationDuration * 1000,
    })
  );
}

export function getStoredExpirationTime(storageKey) {
  const storedVal = localStorage.getItem(storageKey);
  return JSON.parse(storedVal).expirationTime;
}

export function getStoredData(storageKey) {
  const storedVal = localStorage.getItem(storageKey);
  return JSON.parse(storedVal).data;
}

export function doesStorageKeyExist(storageKey) {
  return localStorage.getItem(storageKey) === null ? false : true;
}

export function isExpirationTimePassed(exiprationTime) {
  return _.now() >= exiprationTime;
}

export function initializeStorage(storageKey) {
  if (
    !doesStorageKeyExist(storageKey) ||
    isExpirationTimePassed(getStoredExpirationTime(storageKey))
  ) {
    setDataToStorage(storageKey, [], 0);
  }
}
