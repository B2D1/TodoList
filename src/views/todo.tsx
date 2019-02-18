import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MouseEvent } from 'react';
import { TodoState } from '../interface/TodoState';
import {
    fetchTodo,
    addTodo,
    deleteTodo,
    updateTodoStatus,
    updateTodoContent,
    searchTodo,
} from '../actions/todo';
import { FormComponentProps } from 'antd/lib/form';
import { Input, Button, Icon, Empty, message } from 'antd';
import ModalForm from '../components/formModal';
require('../style/todo.css');

interface IAddFormProps extends FormComponentProps {
    searchTodo: any;
    updateTodoContent: any;
    updateTodoStatus: any;
    deleteTodo: any;
    addTodo: any;
    fetchTodo: any;
    todo: TodoState[];
    [name: string]: any;
}

const Search = Input.Search;

class Todo extends React.Component<IAddFormProps> {
    state = {
        ResolvedStatus: false,
        modalTitle: '',
        user_id: '',
        q: '',
    };
    componentDidMount() {
        const user_id = localStorage.getItem('user_id');
        this.setState(
            {
                user_id,
            },
            () => {
                this.props.fetchTodo(user_id);
            }
        );
    }
    OnShowResolvedTodo(flag: boolean) {
        this.setState({
            ResolvedStatus: flag,
        });
    }
    addTodo = (content: string) => {
        const { user_id } = this.state;
        this.props.addTodo(user_id, content);
    };
    editTodo = (content: string, todo_id: string) => {
        this.props.updateTodoContent(todo_id, content);
    };
    OnDeleteTodo = (todo_id: string) => {
        this.props.deleteTodo(todo_id);
        message.success('删除成功');
    };
    OnUpdateTodoStatus = (todo_id: string) => {
        this.props.updateTodoStatus(todo_id);
    };
    OnSearch = (val: string) => {
        const { user_id } = this.state;
        this.props.searchTodo(user_id, val);
    };
    onRef = (ref: any) => {
        this.modalForm = ref;
    };
    onShowModal = (action: string, todo_id?: string, old_content?: string) => {
        if (action === 'add') {
            this.setState({ modalTitle: '新增Todo' });
        }
        if (action === 'edit') {
            this.setState({ modalTitle: '编辑Todo' });
        }
        this.modalForm.showModal(action, todo_id, old_content);
    };
    modalForm: any;
    render() {
        const filterTodo = this.props.todo.filter(
            v => v.status === this.state.ResolvedStatus
        );
        return (
            <div className='todo-wrapper'>
                <div className='todo-bar'>
                    <Search
                        placeholder='输入要查询的内容'
                        onSearch={value => this.OnSearch(value)}
                        style={{ width: 300 }}
                    />
                    <Button
                        type='primary'
                        onClick={(evt: MouseEvent) => this.onShowModal('add')}
                        className='open-todo'
                    >
                        新增
                    </Button>
                </div>
                <div className='todo-main'>
                    <ul className='todo-nav'>
                        <li
                            className={
                                this.state.ResolvedStatus ? '' : 'active'
                            }
                            onClick={evt => this.OnShowResolvedTodo(false)}
                        >
                            <i className='color pending' />
                            未完成
                        </li>
                        <li
                            className={
                                this.state.ResolvedStatus ? 'active' : ''
                            }
                            onClick={evt => this.OnShowResolvedTodo(true)}
                        >
                            <i className='color resolved' />
                            已完成
                        </li>
                    </ul>
                    <ul className='todo-list'>
                        {filterTodo.length ? (
                            filterTodo.map(v => {
                                return (
                                    <li key={v._id}>
                                        <div className='todo-item'>
                                            <span>{v.content}</span>
                                            <div>
                                                <Icon
                                                    type='edit'
                                                    className='todo-icon'
                                                    onClick={(
                                                        evt: MouseEvent
                                                    ) =>
                                                        this.onShowModal(
                                                            'edit',
                                                            v._id,
                                                            v.content
                                                        )
                                                    }
                                                />
                                                {this.state.ResolvedStatus ? (
                                                    <Icon
                                                        type='undo'
                                                        className='todo-icon'
                                                        onClick={evt =>
                                                            this.OnUpdateTodoStatus(
                                                                v._id || ''
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <Icon
                                                        type='check'
                                                        className='todo-icon icon-check'
                                                        onClick={evt =>
                                                            this.OnUpdateTodoStatus(
                                                                v._id || ''
                                                            )
                                                        }
                                                    />
                                                )}

                                                <Icon
                                                    type='delete'
                                                    className='todo-icon icon-delete'
                                                    onClick={evt =>
                                                        this.OnDeleteTodo(
                                                            v._id || ''
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <Empty className='no-data' />
                        )}
                    </ul>
                </div>
                <ModalForm
                    onRef={this.onRef}
                    onAddTodo={this.addTodo}
                    onEditTodo={this.editTodo}
                    title={this.state.modalTitle}
                />
            </div>
        );
    }
}

const mapStateToProps = (store: any) => {
    return { todo: store.todo };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        fetchTodo: (user_id: string) => {
            dispatch(fetchTodo(user_id));
        },
        addTodo: (user_id: string, content: string) => {
            dispatch(addTodo(user_id, content));
        },
        deleteTodo: (todo_id: string) => {
            dispatch(deleteTodo(todo_id));
        },
        updateTodoStatus: (todo_id: string) => {
            dispatch(updateTodoStatus(todo_id));
        },
        updateTodoContent: (todo_id: string, content: string) => {
            dispatch(updateTodoContent(todo_id, content));
        },
        searchTodo: (user_id: string, q: string) => {
            dispatch(searchTodo(user_id, q));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
