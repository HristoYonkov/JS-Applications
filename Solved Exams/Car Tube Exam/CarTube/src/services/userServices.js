export function setUser(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function getToken() {
    return getUser().accessToken;
}
