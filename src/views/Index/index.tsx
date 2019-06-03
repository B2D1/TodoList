import './index.scss';

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import LoginForm from 'src/components/LoginForm';
import RegForm from 'src/components/RegForm';

const initialState = {
  showLogin: true
};

type IState = Readonly<typeof initialState>;

class Home extends React.Component<RouteComponentProps, IState> {
  public state = initialState;
  public toggleForm = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };
  public render() {
    return (
      <React.Fragment>
        <div className='bg form-wrapper'>
          {this.state.showLogin ? (
            <LoginForm
              history={this.props.history}
              triggerForm={this.toggleForm}
            />
          ) : (
            <RegForm
              history={this.props.history}
              triggerForm={this.toggleForm}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
