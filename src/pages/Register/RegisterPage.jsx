import { PATHNAMES } from 'src/consts';
import { LoginPagesLayout } from 'src/layouts';

import RegisterForm from './RegisterForm';

const RegisterPage = () => (
  <LoginPagesLayout
    pageName="Регистрация"
    title={'Сделайте управление вашими финансами \nпростым и увлекательным!'}
    sublink={{
      title: 'Уже есть аккаунт?',
      text: 'Авторизироваться',
      link: PATHNAMES.login,
    }}
  >
    <RegisterForm />
  </LoginPagesLayout>
);

export default RegisterPage;
