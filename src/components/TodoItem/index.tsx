import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import React, { FC } from 'react';
import { FormAction } from '../../common/enum';

interface ITodoItem {
  _id: string;
  content: string;
  resolved: boolean;
  onShowModal: (action: string, todoId?: string, oldContent?: string) => void;
  onUpdateStatus: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

const TodoItem: FC<ITodoItem> = ({
  _id,
  content,
  onUpdateStatus,
  resolved,
  onDelete,
  onShowModal,
}) => (
  <li key={_id}>
    <div className="todo-item">
      <span>{content}</span>
      <div>
        <EditOutlined
          className="todo-icon"
          onClick={() => onShowModal(FormAction.Edit, _id, content)}
        />
        {resolved ? (
          <UndoOutlined
            className="todo-icon"
            onClick={() => onUpdateStatus(_id)}
          />
        ) : (
          <CheckOutlined
            className="todo-icon icon-check"
            onClick={() => onUpdateStatus(_id)}
          />
        )}
        <DeleteOutlined
          className="todo-icon icon-delete"
          onClick={() => onDelete(_id)}
        />
      </div>
    </div>
  </li>
);

export default TodoItem;
