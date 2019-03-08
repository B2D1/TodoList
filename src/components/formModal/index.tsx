import { Form, Input, message, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';

interface IAddFormProps extends FormComponentProps {
    title: string;
    onAddTodo: any;
    onEditTodo: any;
    [name: string]: any;
}

class ModalForm extends React.Component<IAddFormProps> {
    public state = { visible: false, action: '', todoId: '', oldContent: '' };
    public componentDidMount() {
        this.props.onRef(this);
    }
    public showModal = (
        action: string,
        todoId?: string,
        oldContent?: string
    ) => {
        this.setState({
            visible: true,
            action,
            todoId,
            oldContent,
        });
    };
    public handleCancel = () => {
        this.setState({
            visible: false,
            action: '',
        });
    };
    public handleSubmit = () => {
        this.props.form.validateFields(
            (err: Error, values: { content: string }) => {
                if (!err) {
                    const { content } = values;
                    if (this.state.action === 'add') {
                        this.props.onAddTodo(content);
                        message.success('新增成功');
                    }
                    if (this.state.action === 'edit') {
                        this.props.onEditTodo(content, this.state.todoId);
                        message.success('编辑成功');
                    }
                    this.setState({
                        visible: false,
                    });
                }
            }
        );
    };
    public render() {
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
                            initialValue: this.state.oldContent,
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
