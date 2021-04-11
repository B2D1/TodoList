import { FC, useEffect } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { LocalStorage } from 'utils';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from 'store';
import { keepLogin } from 'store/user/actions';

const mapState = ({ user }: AppState) => ({
  user,
});

const mapDispatch = {
  keepLogin,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: FC<RouteComponentProps & PropsFromRedux> = ({
  user,
  keepLogin,
}) => {
  useEffect(() => {
    const userId = LocalStorage.get('userId');
    const username = LocalStorage.get('username');
    // local 有用户信息，但 session 无 userId，自动登录
    if (userId && username && !user.userId) {
      keepLogin({ userId, username });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return user.userId ? <Redirect to="/todo" /> : <Redirect to="/login" />;
};

export default connector(Home);
