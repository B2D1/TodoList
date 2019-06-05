import { Form, Input, message, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { FormAction } from 'src/enum';

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
            message.success('新增成功');
          }
          if (this.props.formAction === FormAction.Edit) {
            this.props.onUpdateTodoContent(this.props.todoId, content);
            message.success('编辑成功');
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
