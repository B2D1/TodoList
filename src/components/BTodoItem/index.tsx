import { Icon } from 'antd';
import * as React from 'react';
import { FormAction } from 'src/common/enum';

interface ITodoItem {
  _id: string;
  content: string;
  resolved: boolean;
  onShowModal: (action: string, todoId?: string, oldContent?: string) => void;
  onUpdateStatus: (todoId: string) => void;
  onDelete: (todoId: string) => void;
}

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
      </div>
    </div>
  </li>
);

export default TodoItem;
