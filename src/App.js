import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props vs. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>Please select a Topic</h3>
      )}
    />
  </div>
);

Topics.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const App = () => (
  <Router>
    <Fragment>
      <h1>Test routing page to see if App is set up and working</h1>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Fragment>
  </Router>
);

export default App;
