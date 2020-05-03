import styles from './index.module.scss';

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
import { LocalStorage } from '../../utils';

const mapState = ({ todo, user }: AppStore) => ({
  todo,
  user,
});

const mapDispatch = {
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
  deleteTodo,
  updateTodoContent,
  updateTodoStatus,
  fetchTodo,
  addTodo,
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
    if (userId && username) {
      setUserId(userId);
      setUsername(username);
      fetchTodo(userId);
    } else {
      history.push('/');
    }
  }, []);

  const logout = () => {
    LocalStorage.remove('userId');
    LocalStorage.remove('username');
    history.push('/');
  };

  const onToggleStatus = (flag: boolean) => {
    setStatus(flag);
  };
  const onAdd = (content: string) => {
    addTodo(userId, content);
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
    searchTodo(userId, query);
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
        <span>Hello，{username}</span>
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
                  _id={v._id}
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
        userId={userId}
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
