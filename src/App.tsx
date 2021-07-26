import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/Landing';
import { SessionContext } from 'context/SessionContext';
import { ConditionalRoute } from 'components/ConditionalRoute';

const App: React.FC = () => {
  const {
    data: { sessionId },
  } = useContext(SessionContext);
  return (
    <Router>
      <Switch>
        {/* <ConditionalRoute
          path="/film"
          canActivate={sessionId !== undefined}
          redirectTo="/"
          component={FilmMenuPage}
        /> */}
        <ConditionalRoute
          path="/"
          canActivate={sessionId === undefined}
          redirectTo="/film"
          component={LandingPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
