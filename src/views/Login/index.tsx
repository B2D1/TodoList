import UserForm from 'components/UserForm';
import { FC, useState } from 'react';

import styles from './index.module.scss';

const Login: FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>To-Do List</h1>
        <UserForm showLogin={showLogin} />
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

export default Login;
