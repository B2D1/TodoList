import { Form, Input, Modal } from 'antd';
import React, { FC, useEffect } from 'react';

import { ModalType } from '../../common/enum';

interface IModalFormProps {
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
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ content });
  },[content]);

  const onSubmit = () => {
    if (modalType === ModalType.Add) {
      onAdd(form.getFieldValue('content'));
    }
    if (modalType === ModalType.Edit) {
      onUpdateContent(todoId, form.getFieldValue('content'));
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
      forceRender={true}
    >
      <Form layout="horizontal" form={form}>
        <Form.Item
          label="内容"
          name="content"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <Input placeholder="请输入内容" autoComplete="off" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
