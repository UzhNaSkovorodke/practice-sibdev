import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from 'src/api/requests';
import { DefaultInput, PasswordInput, Box, Button, Link, Text } from 'src/components';
import { PATHNAMES } from 'src/consts';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [errorText, setErrorText] = useState('');

  const onChangeLogin = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPaswword(e.target.value);

  const handleAuthSuccess = () => navigate(PATHNAMES.pockets);

  const handleOnFocus = () => setErrorText('');

  const errorHandler = (error) => setErrorText(error);

  const authUser = () => {
    auth(
      {
        email,
        password,
      },
      handleAuthSuccess,
      errorHandler
    );
  };

  return (
    <>
      <Box mb={16} hElastic>
        <DefaultInput
          value={email}
          errorText={errorText}
          isError={!!errorText}
          placeholder="johndoe@gmail.com"
          labelText="Email"
          onFocus={handleOnFocus}
          onChange={onChangeLogin}
        />
      </Box>
      <Box mb={40}>
        <PasswordInput
          labelText="Пароль"
          isError={!!errorText}
          onFocus={handleOnFocus}
          onChange={onChangePassword}
          additionalPseudoLabel={
            <Link to={PATHNAMES.forgetPassword} textSize="xs">
              Забыли пароль?
            </Link>
          }
        />
      </Box>
      <Button isDisabled={!email || !password || !!errorText} variant="brand" onClick={authUser}>
        <Text color="contrast" weight={700} align="center">
          Войти
        </Text>
      </Button>
    </>
  );
};

export default LoginForm;
