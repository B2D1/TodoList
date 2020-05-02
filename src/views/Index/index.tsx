import styles from './index.module.scss';

import { message } from 'antd';
import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import LoginForm from '../../components/LoginForm';
import RegForm from '../../components/RegForm';
import { LocalStorage } from '../../utils';

const Home: FC<{} & RouteComponentProps> = ({ history }) => {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (LocalStorage.get('userId')) {
      history.push('/todo');
    }
  }, []);

  const toTodo = () => {
    history.push('/todo');
    message.destroy();
  };
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={styles.wrapper}>
      {showLogin ? (
        <LoginForm onToTodo={toTodo} triggerForm={toggleForm} />
      ) : (
        <RegForm triggerForm={toggleForm} />
      )}
    </div>
  );
};

export default withRouter(Home);
