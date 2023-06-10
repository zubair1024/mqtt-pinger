import styles from './index.module.css';

/* eslint-disable-next-line */
export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LoginScreen!</h1>
    </div>
  );
}

export default LoginScreen;
