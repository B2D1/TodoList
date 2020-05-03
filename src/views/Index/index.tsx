import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import LoginForm from '../../components/LoginForm';
import RegForm from '../../components/RegForm';
import { LocalStorage } from '../../utils';
import styles from './index.module.scss';

const Home: FC<RouteComponentProps> = ({ history }) => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (LocalStorage.get('userId')) {
      history.push('/todo');
    }
  }, []);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Todo List</h1>
        {showLogin ? <LoginForm /> : <RegForm />}
        <p className={styles.tip}>
          <span>Or&nbsp;&nbsp;</span>
          <span onClick={toggleForm}>
            {showLogin ? '现在注册!' : '已有账号!'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Home);
