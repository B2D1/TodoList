import * as React from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Input, Modal, Form, message } from 'antd';
require('../../style/todo.css');

interface IAddFormProps extends FormComponentProps {
    title: string;
    onAddTodo: any;
    onEditTodo: any;
    [name: string]: any;
}

class ModalForm extends React.Component<IAddFormProps> {
    state = { visible: false, action: '', todo_id: '', old_content: '' };
    componentDidMount() {
        this.props.onRef(this);
    }
    showModal = (action: string, todo_id?: string, old_content?: string) => {
        this.setState({
            visible: true,
            action,
            todo_id,
            old_content,
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
            action: '',
        });
    };
    handleSubmit = () => {
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                const { content } = values;
                if (this.state.action === 'add') {
                    this.props.onAddTodo(content);
                    message.success('新增成功');
                }
                if (this.state.action === 'edit') {
                    this.props.onEditTodo(content, this.state.todo_id);
                    message.success('编辑成功');
                }
                this.setState({
                    visible: false,
                });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
                title={this.props.title}
                visible={this.state.visible}
                onOk={this.handleSubmit}
                onCancel={this.handleCancel}
                okText='提交'
                cancelText='取消'
                destroyOnClose={true}
            >
                <Form layout='horizontal'>
                    <Form.Item label='内容'>
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: '请输入内容!' }],
                            initialValue: this.state.old_content,
                        })(
                            <Input
                                placeholder='请输入内容'
                                autoComplete='off'
                            />
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

const WrapperModalForm = Form.create({ name: 'form_modal' })(ModalForm);

export default WrapperModalForm;
