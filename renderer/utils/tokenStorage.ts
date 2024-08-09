import { session } from 'electron';

const TOKEN_KEY = 'aha123';
const COOKIE_URL = 'http://localhost'; // This should be your app's domain

export function saveToken(token: string): Promise<void> {
  const expirationDate = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60; // 30 days from now
  return session.defaultSession.cookies.set({
    url: COOKIE_URL,
    name: TOKEN_KEY,
    value: token,
    expirationDate,
    secure: true,
    httpOnly: true
  });
}

export async function getToken(): Promise<string | null> {
  try {
    const cookies = await session.defaultSession.cookies.get({ name: TOKEN_KEY, url: COOKIE_URL });
    return cookies.length > 0 ? cookies[0].value : null;
  } catch (error) {
    console.error('Error reading token:', error);
    return null;
  }
}

export function clearToken(): Promise<void> {
  return session.defaultSession.cookies.remove(COOKIE_URL, TOKEN_KEY);
}