import { Form, Input, Modal } from 'antd';
import React, { FC, useState } from 'react';
import { ModalType } from '../../common/enum';

interface IModalFormProps {
  userId: string;
  todoId: string;
  modalType: string;
  visible: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onAdd: (content: string) => void;
  onUpdateContent: (todoId: string, content: string) => void;
}

const ModalForm: FC<IModalFormProps> = ({
  content,
  onClose,
  onAdd,
  onUpdateContent,
  visible,
  title,
  modalType,
  todoId,
}) => {
  const [text, setText] = useState('');

  const onSubmit = () => {
    if (modalType === ModalType.Add) {
      onAdd(text);
    }
    if (modalType === ModalType.Edit) {
      onUpdateContent(todoId, text);
    }
    onClose();
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onSubmit}
      onCancel={onClose}
      okText="提交"
      cancelText="取消"
      destroyOnClose={true}
    >
      <Form layout="horizontal">
        <Form.Item
          label="内容"
          name="content"
          initialValue={content}
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <Input
            placeholder="请输入内容"
            autoComplete="off"
            onChange={(evt) => setText(evt.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
