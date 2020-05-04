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
  onUpdateStatus: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

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
      </div>
    </div>
  </li>
);

export default TodoItem;
