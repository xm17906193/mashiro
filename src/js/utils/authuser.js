import Cookies from 'js-cookie';

const UserKey = 'Admin-User';

export function getUser() {
  return Cookies.get(UserKey);
}

export function setUser(user) {
  return Cookies.set(UserKey, user);
}

export function removeUser() {
  return Cookies.remove(UserKey);
}
