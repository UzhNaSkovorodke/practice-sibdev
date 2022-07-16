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
      <Box mt={26} hElastic>
        <DefaultInput
          value={email}
          errorText={errorText}
          isError={!!errorText}
          placeholder="Введите почту"
          onFocus={handleOnFocus}
          onChange={onChangeLogin}
        />
      </Box>
      <Box mb={40}>
        <PasswordInput
          isError={!!errorText}
          onFocus={handleOnFocus}
          onChange={onChangePassword}
          additionalPseudoLabel={
            <Box ml={16}>
              <Link to={PATHNAMES.forgetPassword} textSize="m">
                Забыли пароль?
              </Link>{' '}
            </Box>
          }
        />
      </Box>
      <Button isDisabled={!email || !password || !!errorText} variant="brand" onClick={authUser}>
        <Text color="contrast" weight={700} align="center" size="xl">
          Войти
        </Text>
      </Button>
    </>
  );
};

export default LoginForm;
