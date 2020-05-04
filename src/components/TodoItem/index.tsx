<<<<<<< HEAD
import { Icon } from 'antd';
import * as React from 'react';
import { FormAction } from 'src/common/enum';

interface ITodoItem {
  _id: string;
  content: string;
  resolved: boolean;
  onShowModal: (action: string, todoId?: string, oldContent?: string) => void;
=======
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import React, { FC } from 'react';
import styles from './index.module.scss';
import { ModalType } from '../../common/enum';

interface ITodoItem {
  id: string;
  type: string;
  content: string;
  finished: boolean;
  onShowModal: (type: ModalType, todoId: string, content: string) => void;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
  onUpdateStatus: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

<<<<<<< HEAD
const TodoItem: React.FunctionComponent<ITodoItem> = ({
  _id,
  content,
  onUpdateStatus,
  resolved,
  onDelete,
  onShowModal
}) => (
  <li key={_id}>
    <div className='todo-item'>
      <span>{content}</span>
      <div>
        <Icon
          type='edit'
          className='todo-icon'
          onClick={() => onShowModal(FormAction.Edit, _id, content)}
        />
        {resolved ? (
          <Icon
            type='undo'
            className='todo-icon'
            onClick={() => onUpdateStatus(_id)}
          />
        ) : (
          <Icon
            type='check'
            className='todo-icon icon-check'
            onClick={() => onUpdateStatus(_id)}
          />
        )}
        <Icon
          type='delete'
          className='todo-icon icon-delete'
          onClick={() => onDelete(_id)}
        />
=======
const TodoItem: FC<ITodoItem> = ({
  id,
  content,
  onUpdateStatus,
  finished,
  onDelete,
  onShowModal,
}) => (
  <li>
    <div className={styles.item}>
      <span className={styles.content}>{content}</span>
      <div>
        <EditOutlined
          className={styles.icon}
          onClick={() => onShowModal(ModalType.Edit, id, content)}
        />
        {finished ? (
          <UndoOutlined
            className={styles.icon}
            onClick={() => onUpdateStatus(id)}
          />
        ) : (
          <CheckOutlined
            className={styles.icon}
            onClick={() => onUpdateStatus(id)}
          />
        )}
        <DeleteOutlined className={styles.icon} onClick={() => onDelete(id)} />
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
      </div>
    </div>
  </li>
);

export default TodoItem;
