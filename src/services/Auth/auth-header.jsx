export default function authHeader() {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));

  if (accessToken) {
    return { Authorization: 'Bearer ' + accessToken };
  } else {
    return {};
  }
}