"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearToken = exports.getToken = exports.saveToken = void 0;
const electron_1 = require("electron");
const TOKEN_KEY = 'aha123';
const COOKIE_URL = 'http://localhost'; // This should be your app's domain
function saveToken(token) {
    const expirationDate = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // 30 days from now
    return electron_1.session.defaultSession.cookies.set({
        url: COOKIE_URL,
        name: TOKEN_KEY,
        value: token,
        expirationDate,
        secure: true,
        httpOnly: true
    });
}
exports.saveToken = saveToken;
async function getToken() {
    try {
        const cookies = await electron_1.session.defaultSession.cookies.get({ name: TOKEN_KEY, url: COOKIE_URL });
        return cookies.length > 0 ? cookies[0].value : null;
    }
    catch (error) {
        console.error('Error reading token:', error);
        return null;
    }
}
exports.getToken = getToken;
function clearToken() {
    return electron_1.session.defaultSession.cookies.remove(COOKIE_URL, TOKEN_KEY);
}
exports.clearToken = clearToken;
