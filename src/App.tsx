import Navigation from 'app/components/NavBar';
import routes from 'app/routes';
import * as React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
        {routes}
    </React.Fragment>
  );
}

export default App;
