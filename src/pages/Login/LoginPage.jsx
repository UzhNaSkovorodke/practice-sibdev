import { PATHNAMES } from 'src/consts';
import { LoginPagesLayout } from 'src/layouts';

import LoginForm from './LoginForm';

const LoginPage = () => (
  <LoginPagesLayout
    pageName="Авторизация"
    title="Добро пожаловать в Pockets! 👋🏻"
    description="Пожалуйста войдите в свой аккаунт и начните приключение"
    sublink={{
      title: 'Первый раз?',
      text: 'Создайте аккаунт',
      link: PATHNAMES.register,
    }}
  >
    <LoginForm />
  </LoginPagesLayout>
);

export default LoginPage;
