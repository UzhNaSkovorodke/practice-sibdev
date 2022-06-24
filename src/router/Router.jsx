import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PATHNAMES } from 'src/consts';
import { LoginPage, RegisterPage, PocketsPage } from 'src/pages';

import InitializationRoute from './InitializationRoute';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<InitializationRoute />}>
        <Route path={PATHNAMES.login} element={<LoginPage />} />
        <Route path={PATHNAMES.register} element={<RegisterPage />} />
        <Route path={PATHNAMES.pockets} element={<PocketsPage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
