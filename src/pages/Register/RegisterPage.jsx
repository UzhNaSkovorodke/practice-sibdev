import { PATHNAMES } from 'src/consts';
import { LoginPagesLayout } from 'src/layouts';

import RegisterForm from './RegisterForm';

const RegisterPage = () => (
  <LoginPagesLayout
    pageName="Регистрация"
    title="Приключение начинается здесь"
    description="Сделайте управление вашим приложением простым и увлекательным!"
    sublink={{
      title: 'Уже есть аккаунт?',
      text: 'Войти',
      link: PATHNAMES.login,
    }}
  >
    <RegisterForm />
  </LoginPagesLayout>
);

export default RegisterPage;
