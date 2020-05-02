import './index.scss';

import { Button, Empty, Input, message } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { FormAction } from '../../common/enum';
import ModalForm from '../../components/FormModal';
import TodoItem from '../../components/TodoItem';
import { AppStore } from '../../store';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
} from '../../store/todo/actions';
import { ITodoState } from '../../store/todo/types';
import { IUserState } from '../../store/user/types';
import { LocalStorage } from '../../utils';

const mapState = ({ todo, user }: AppStore) => ({
  todo,
  user,
});

const mapDispatch = {
  addTodo,
  deleteTodo,
  fetchTodos,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITodoProps extends PropsFromRedux {
  todo: ITodoState[];
  user: IUserState;
}
const Search = Input.Search;

const Todo: FC<ITodoProps & RouteComponentProps> = ({
  todo,
  history,
  deleteTodo,
  addTodo,
  fetchTodos,
  searchTodo,
  updateTodoContent,
  updateTodoStatus,
}) => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [status, setStatus] = useState(false);
  const [content, setContent] = useState('');
  const [modalType, setModalType] = useState('');
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId')!;
    const username = localStorage.getItem('username')!;
    setUserId(userId);
    setUsername(username);

    if (!userId) {
      history.push('/');
    } else {
      fetchTodos(userId);
    }
  }, []);

  const logout = () => {
    LocalStorage.remove('userId');
    window.localStorage.removeItem('username');
    history.push('/');
  };
  const handleShowResolved = (flag: boolean) => {
    setStatus(flag);
  };
  const handleAddTodo = (content: string) => {
    addTodo(userId, content);
    setStatus(false);
    message.success('新增成功');
  };
  const handleUpdateTodoContent = (todoId: string, content: string) => {
    updateTodoContent(todoId, content);
    message.success('编辑成功');
  };
  const handleDeleteTodo = (todoId: string) => {
    deleteTodo(todoId);
    message.success('删除成功');
  };
  const handleUpdateTodoStatus = (todoId: string) => {
    updateTodoStatus(todoId);
  };
  const handleSearch = (val: string) => {
    searchTodo(userId, val);
  };
  const handleToggleModal = (isShow: boolean) => {
    setShowModal(isShow);
  };
  const handleShowModal = (action: string) => {
    handleToggleModal(true);
    if (action === FormAction.Add) {
      setModalTitle('新增Todo');
      setContent('');
      setModalType(FormAction.Add);
    }
    if (action === FormAction.Edit) {
      setModalTitle('编辑Todo');
      setModalType(FormAction.Edit);
      setContent(content);
      setTodoId(todoId);
    }
  };

  const filterTodo = todo.filter((v) => v.status === status);

  return (
    <div className="todo-wrapper">
      <div className="user">
        <span>Hello，{username}</span>
        <Button type="ghost" size="small" onClick={logout}>
          退出
        </Button>
      </div>
      <div className="todo-bar">
        <Search
          placeholder="输入要查询的内容"
          onSearch={(value) => handleSearch(value)}
          className="todo-bar-input"
        />
        <Button
          type="primary"
          onClick={() => handleShowModal(FormAction.Add)}
          className="open-todo"
        >
          新增
        </Button>
      </div>
      <div className="todo-main">
        <ul className="todo-nav">
          <li
            className={status ? '' : 'active'}
            onClick={() => handleShowResolved(false)}
          >
            <i className="color pending" />
            未完成
          </li>
          <li
            className={status ? 'active' : ''}
            onClick={(evt) => handleShowResolved(true)}
          >
            <i className="color resolved" />
            已完成
          </li>
        </ul>

        <ul className="todo-list">
          {filterTodo.length ? (
            filterTodo.map((v: ITodoState) => (
              <TodoItem
                {...v}
                key={v._id}
                resolved={status}
                onShowModal={handleShowModal}
                onDelete={handleDeleteTodo}
                onUpdateStatus={handleUpdateTodoStatus}
              />
            ))
          ) : (
            <Empty className="no-data" />
          )}
        </ul>
      </div>
      <ModalForm
        userId={userId}
        todoId={todoId}
        formAction={modalType}
        oldContent={content}
        visible={showModal}
        title={modalTitle}
        onClose={handleToggleModal}
        onAddTodo={handleAddTodo}
        onUpdateTodoContent={handleUpdateTodoContent}
      />
    </div>
  );
};

export default Todo;
