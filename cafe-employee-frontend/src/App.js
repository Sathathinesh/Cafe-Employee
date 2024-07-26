import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CafePage from './pages/CafePage';
import EmployeePage from './pages/EmployeePage';
import AddEditCafePage from './pages/AddEditCafePage';
import AddEditEmployeePage from './pages/AddEditEmployeePage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/cafes" component={CafePage} />
        <Route path="/employees" component={EmployeePage} />
        <Route path="/add-cafe" component={AddEditCafePage} />
        <Route path="/edit-cafe/:id" component={AddEditCafePage} />
        <Route path="/add-employee" component={AddEditEmployeePage} />
        <Route path="/edit-employee/:id" component={AddEditEmployeePage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
