import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';
import Routes from './components/Routes';

const FinanceCompact = () => {
  const mappedRoutes = Routes.map((route, index) => {
    return route.component && (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            component={route.component}
        />
    );
  }); 

  return (
    <React.Fragment>
      <CssBaseline />
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <Layout>
            { mappedRoutes }
          </Layout>
        </BrowserRouter>
      </Suspense>
    </React.Fragment>
  )
};

export default FinanceCompact;
