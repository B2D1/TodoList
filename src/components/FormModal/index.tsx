import { Form, Input, Modal } from 'antd';
<<<<<<< HEAD
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { FormAction } from 'src/common/enum';

interface IModalFormProps extends FormComponentProps {
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

class ModalForm extends React.Component<IModalFormProps> {
  public handleCancel = () => {
    this.props.onClose(false);
  };
  public handleSubmit = () => {
    this.props.form.validateFields(
      (err: Error, values: { content: string }) => {
        if (!err) {
          const { content } = values;
          if (this.props.formAction === FormAction.Add) {
            this.props.onAddTodo(content);
          }
          if (this.props.formAction === FormAction.Edit) {
            this.props.onUpdateTodoContent(this.props.todoId, content);
          }
          this.props.onClose(false);
        }
      }
    );
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title={this.props.title}
        visible={this.props.visible}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        okText='提交'
        cancelText='取消'
        destroyOnClose={true}>
        <Form layout='horizontal'>
          <Form.Item label='内容'>
            {getFieldDecorator('content', {
              rules: [{ required: true, message: '请输入内容!' }],
              initialValue: this.props.oldContent
            })(<Input placeholder='请输入内容' autoComplete='off' />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const WrapperModalForm = Form.create<IModalFormProps>()(ModalForm);

export default WrapperModalForm;
=======
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
  });
  
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
    >
      <Form layout="horizontal" form={form}>
        <Form.Item
          label="内容"
          name="content"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <Input
            placeholder="请输入内容"
            autoComplete="off"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
