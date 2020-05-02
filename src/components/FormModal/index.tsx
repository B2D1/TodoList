import { Form, Input, Modal } from 'antd';
import React from 'react';
import { FormAction } from '../../common/enum';
import { Store } from 'antd/lib/form/interface';

interface IModalFormProps {
  onClose: (isShow: boolean) => void;
  userId: string;
  todoId: string;
  formAction: string;
  visible: boolean;
  title: string;
  oldContent: string;
  onAddTodo: (content: string) => void;
  onUpdateTodoContent: (todoId: string, content: string) => void;
}

const ModalForm: React.FC<IModalFormProps> = ({
  oldContent,
  onClose,
  onAddTodo,
  onUpdateTodoContent,
  visible,
  title,
  formAction,
  todoId,
}) => {
  const [form] = Form.useForm();
  const handleCancel = () => {
    onClose(false);
  };
  const handleSubmit = (values: Store) => {
    const { content } = values;
    if (formAction === FormAction.Add) {
      onAddTodo(content);
    }
    if (formAction === FormAction.Edit) {
      onUpdateTodoContent(todoId, content);
    }
    onClose(false);
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okText="提交"
      cancelText="取消"
      destroyOnClose={true}
    >
      <Form layout="horizontal">
        <Form.Item
          label="内容"
          initialValue={oldContent}
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <Input placeholder="请输入内容" autoComplete="off" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
