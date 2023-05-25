
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupPage from './SignupPage';
import LineChart from './LineChart';

const RoutesPath = () => {
  return (
    <Router>
      
        <Route exact path="/" component={SignupPage} />
        <Route exact path="/chart" component={LineChart} />
      
    </Router>
  );
};

export default RoutesPath;
