<<<<<<< HEAD
import './index.scss';

import { Button, Empty, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FormAction } from 'src/common/enum';
import ModalForm from 'src/components/FormModal';
import TodoItem from 'src/components/TodoItem';
import { AppStore } from 'src/store';
import { addTodo, deleteTodo, fetchTodo, searchTodo, updateTodoContent, updateTodoStatus } from 'src/store/todo/actions';
import { ITodoState } from 'src/store/todo/types';
import { IUserState } from 'src/store/user/types';

interface ITodoProps extends FormComponentProps {
  dispatch: Dispatch;
  searchTodo: (todo: Partial<ITodoState & { q: string }>) => void;
  updateTodoContent: (todo: Partial<ITodoState>) => void;
  updateTodoStatus: (todoId: Partial<ITodoState>) => void;
  deleteTodo: (todoId: Partial<ITodoState>) => void;
  addTodo: (todo: Partial<ITodoState>) => void;
  fetchTodo: (userId: Partial<ITodoState>) => void;
  history: History;
  todo: ITodoState[];
  user: IUserState;
}
const initialState = {
  resolvedStatus: false,
  showModal: false,
  oldContent: '',
  todoId: '',
  userId: '',
  username: '',
  formAction: '',
  modalTitle: '',
  q: ''
};
type ISate = Readonly<typeof initialState>;
const Search = Input.Search;

class Todo extends React.Component<ITodoProps, ISate> {
  public state = initialState;
  public componentDidMount() {
    const userId = localStorage.getItem('userId')!;
    const username = localStorage.getItem('username')!;
    this.setState({
      userId,
      username
    });
    if (!userId) {
      this.props.history.push('/');
    } else {
      this.props.fetchTodo({ userId });
    }
  }
  public logout = () => {
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('username');
    this.props.history.push('/');
  };
  public handleShowResolved(flag: boolean) {
    this.setState({
      resolvedStatus: flag
    });
  }
  public handleAddTodo = (content: string) => {
    const { userId } = this.state;
    this.props.addTodo({ userId, content });
    this.setState({
      resolvedStatus: false
    });
    message.success('新增成功');
  };
  public handleUpdateTodoContent = (todoId: string, content: string) => {
    this.props.updateTodoContent({ _id: todoId, content });
    message.success('编辑成功');
  };
  public handleDeleteTodo = (todoId: string) => {
    this.props.deleteTodo({ _id: todoId });
    message.success('删除成功');
  };
  public handleUpdateTodoStatus = (todoId: string) => {
    this.props.updateTodoStatus({ _id: todoId });
  };
  public handleSearch = (val: string) => {
    const { userId } = this.state;
    this.props.searchTodo({ userId, q: val });
  };
  public handleToggleModal = (isShow: boolean) => {
    this.setState({
      showModal: isShow
    });
  };
  public handleShowModal = (
    action: string,
    todoId?: string,
    oldContent?: string
  ) => {
    this.handleToggleModal(true);
    if (action === FormAction.Add) {
      this.setState({
        modalTitle: '新增Todo',
        formAction: FormAction.Add,
        oldContent: ''
      });
    }
    if (action === FormAction.Edit) {
      this.setState({
        modalTitle: '编辑Todo',
        formAction: FormAction.Edit,
        oldContent: oldContent!,
        todoId: todoId!
      });
    }
  };
  public render() {
    const filterTodo = this.props.todo.filter(
      (v) => v.status === this.state.resolvedStatus
    );
    return (
      <div className='todo-wrapper'>
        <div className='user'>
          <span>Hello，{this.state.username}</span>
          <Button type='ghost' size='small' onClick={this.logout}>
            退出
          </Button>
        </div>
        <div className='todo-bar'>
          <Search
            placeholder='输入要查询的内容'
            onSearch={(value) => this.handleSearch(value)}
            className='todo-bar-input'
          />
          <Button
            type='primary'
            onClick={() => this.handleShowModal(FormAction.Add)}
            className='open-todo'>
            新增
          </Button>
        </div>
        <div className='todo-main'>
          <ul className='todo-nav'>
            <li
              className={this.state.resolvedStatus ? '' : 'active'}
              onClick={() => this.handleShowResolved(false)}>
              <i className='color pending' />
              未完成
            </li>
            <li
              className={this.state.resolvedStatus ? 'active' : ''}
              onClick={(evt) => this.handleShowResolved(true)}>
              <i className='color resolved' />
              已完成
            </li>
          </ul>
          <ul className='todo-list'>
            {filterTodo.length ? (
              filterTodo.map((v) => (
                <TodoItem
                  {...v}
                  key={v._id}
                  resolved={this.state.resolvedStatus}
                  onShowModal={this.handleShowModal}
                  onDelete={this.handleDeleteTodo}
                  onUpdateStatus={this.handleUpdateTodoStatus}
                />
              ))
            ) : (
              <Empty className='no-data' />
            )}
          </ul>
        </div>
        <ModalForm
          userId={this.state.userId}
          todoId={this.state.todoId}
          formAction={this.state.formAction}
          oldContent={this.state.oldContent}
          visible={this.state.showModal}
          title={this.state.modalTitle}
          onClose={this.handleToggleModal}
          onAddTodo={this.handleAddTodo}
          onUpdateTodoContent={this.handleUpdateTodoContent}
        />
      </div>
    );
  }
}

const mapStateToProps = (store: AppStore) => ({
  todo: store.todo,
  user: store.user
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodo: (userId: Partial<ITodoState>) => dispatch(fetchTodo(userId)),
  addTodo: (todo: Partial<ITodoState>) => dispatch(addTodo(todo)),
  deleteTodo: (todoId: Partial<ITodoState>) => dispatch(deleteTodo(todoId)),
  updateTodoStatus: (todoId: Partial<ITodoState>) =>
    dispatch(updateTodoStatus(todoId)),
  updateTodoContent: (todo: Partial<ITodoState>) =>
    dispatch(updateTodoContent(todo)),
  searchTodo: (todo: Partial<ITodoState & { q: string }>) =>
    dispatch(searchTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
=======
import { Button, Empty, Input } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { ModalType } from '../../common/enum';
import ModalForm from '../../components/FormModal';
import TodoItem from '../../components/TodoItem';
import { AppStore } from '../../store';
import {
  addTodo,
  deleteTodo,
  fetchTodo,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
} from '../../store/todo/actions';
import { keepLogin, logout } from '../../store/user/actions';
import { LocalStorage } from '../../utils';
import styles from './index.module.scss';

const mapState = ({ todo, user }: AppStore) => ({
  todo,
  user,
});

const mapDispatch = {
  logout,
  keepLogin,
  addTodo,
  deleteTodo,
  fetchTodo,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITodoProps extends PropsFromRedux, RouteComponentProps {}
const Search = Input.Search;

const Todo: FC<ITodoProps> = ({
  history,
  todo,
  user,
  logout,
  keepLogin,
  deleteTodo,
  updateTodoContent,
  updateTodoStatus,
  fetchTodo,
  addTodo,
  searchTodo,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [status, setStatus] = useState(false);
  const [content, setContent] = useState('');
  const [modalType, setModalType] = useState('');
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    const userId = LocalStorage.get('userId');
    const username = LocalStorage.get('username');
    if (userId && username) {
      if (user.userId) {
        fetchTodo(user.userId);
      } else {
        keepLogin({ userId, username, errMsg: '' });
      }
    } else {
      history.push('/');
    }
  }, [user]);

  const onToggleStatus = (flag: boolean) => {
    setStatus(flag);
  };
  const onAdd = (content: string) => {
    addTodo(user.userId, content);
    setStatus(false);
  };
  const onUpdateContent = (todoId: string, content: string) => {
    updateTodoContent(todoId, content);
  };
  const onDelete = (todoId: string) => {
    deleteTodo(todoId);
  };
  const onUpdateStatus = (todoId: string) => {
    updateTodoStatus(todoId);
  };
  const onSearch = (query: string) => {
    searchTodo(user.userId, query);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const onShowModal = (type: ModalType, todoId?: string, content?: string) => {
    setShowModal(true);
    if (type === ModalType.Add) {
      setModalTitle('新增待办事项');
      setContent('');
      setModalType(ModalType.Add);
    }
    if (type === ModalType.Edit) {
      setModalTitle('编辑待办事项');
      setModalType(ModalType.Edit);
      setContent(content!);
      setTodoId(todoId!);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <span>Hello，{user.username}</span>
        <Button type="ghost" size="small" onClick={logout}>
          退出
        </Button>
      </div>
      <div className={styles.queryBar}>
        <Search
          placeholder="输入要查询的内容"
          onSearch={(value) => onSearch(value)}
        />
        <Button
          type="primary"
          onClick={() => onShowModal(ModalType.Add)}
          className={styles.newTodo}
        >
          新增
        </Button>
      </div>
      <div className={styles.main}>
        <ul className={styles.nav}>
          <li
            className={status ? '' : styles.active}
            onClick={() => onToggleStatus(false)}
          >
            <i className={`${styles.dot} ${styles.pending}`} />
            未完成
          </li>
          <li
            className={status ? styles.active : ''}
            onClick={(evt) => onToggleStatus(true)}
          >
            <i className={`${styles.dot} ${styles.resolved}`} />
            已完成
          </li>
        </ul>

        <ul className={styles.list}>
          {todo.length ? (
            todo
              .filter((v) => v.status === status)
              .map((v) => (
                <TodoItem
                  key={v._id}
                  content={v.content}
                  id={v._id}
                  type={modalType}
                  finished={status}
                  onShowModal={onShowModal}
                  onDelete={onDelete}
                  onUpdateStatus={onUpdateStatus}
                />
              ))
          ) : (
            <Empty className={styles.noData} />
          )}
        </ul>
      </div>
      <ModalForm
        todoId={todoId}
        modalType={modalType}
        content={content}
        visible={showModal}
        title={modalTitle}
        onClose={onClose}
        onAdd={onAdd}
        onUpdateContent={onUpdateContent}
      />
    </div>
  );
};

export default connector(Todo);
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
