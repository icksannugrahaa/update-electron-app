import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import { useAuth, AuthProvider } from '../authContext';

interface LoginResponse {
  sucid: BigInteger,
  slug: string,
  name: string,
  user_name: string,
  email: string,
  role_id: string,
  role_name: string,
  token: string,
  distributor_id: string
}

const Home: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { loginData } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://p1.aha.id/api/cms_v2/sessions/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      loginData(data); // Save auth data in context
      router.push('/dashboard');
      //   if (data.success) {
      //     console.log('Login successful', data.data);
      //     // Handle successful login (e.g., store token, redirect)
      //   } else {
      //     setError(data.message || 'Login failed');
      //   }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.container}>
      <Layout title="Login | Next.js + TypeScript + Electron Example">
        <h1>Login</h1>
        <p>This is the login page</p>

      </Layout>
      <Head>
        <title>Elegant Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Welcome Back</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username or Email"
              className={styles.input}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
          <p className={styles.forgotPassword}>
            Forgot your password?
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
