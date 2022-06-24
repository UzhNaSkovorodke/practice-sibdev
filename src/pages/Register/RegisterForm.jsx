import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register, auth } from 'src/api/requests';
import { Box, Checkbox, DefaultInput, PasswordInput, Button, Text } from 'src/components';
import { PATHNAMES } from 'src/consts';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onChangeName = (e) => setUsername(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeIsAgree = () => setIsAgree(!isAgree);

  const onUsernameFocus = () => setUsernameError('');
  const onPasswordFocus = () => setPasswordError('');
  const onEmailFocus = () => setEmailError('');

  const handleError = (error) => {
    error?.username && setUsernameError(error.username[0]);
    error?.password && setPasswordError(error.password[0]);
    error?.email && setEmailError(error.email[0]);
  };

  const handleAuthSuccess = () => navigate(PATHNAMES.pockets);
  const authErrorHandler = () => navigate(PATHNAMES.login);

  const handleRegisterSuccess = () => {
    auth(
      {
        email,
        password,
      },
      handleAuthSuccess,
      authErrorHandler
    );
  };

  const registerUser = () => {
    register(
      {
        username,
        email,
        password,
      },
      handleRegisterSuccess,
      handleError
    );
  };

  return (
    <>
      <Box mb={16} hElastic>
        <DefaultInput
          value={username}
          isError={!!usernameError}
          errorText={usernameError}
          placeholder="Vasya_1337"
          labelText="Логин"
          onFocus={onUsernameFocus}
          onChange={onChangeName}
        />
      </Box>
      <Box mb={16} hElastic>
        <DefaultInput
          value={email}
          isError={!!emailError}
          errorText={emailError}
          placeholder="johndoe@gmail.com"
          labelText="Почта"
          onFocus={onEmailFocus}
          onChange={onChangeEmail}
        />
      </Box>
      <Box mb={16}>
        <PasswordInput
          labelText="Пароль"
          isError={!!passwordError}
          errorText={passwordError}
          onFocus={onPasswordFocus}
          onChange={onChangePassword}
        />
      </Box>
      <Box mb={16}>
        <Checkbox isChecked={isAgree} text="Я со всем согласен отпутите" onClick={onChangeIsAgree} />
      </Box>
      <Button
        isDisabled={!username || !email || !isAgree || !password || !!usernameError || !!emailError || !!passwordError}
        variant="brand"
        onClick={registerUser}
      >
        <Text weight={700} color="contrast" align="center">
          Зарегистрироваться
        </Text>
      </Button>
    </>
  );
};

export default RegisterForm;
