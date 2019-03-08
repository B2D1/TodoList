import '../style/todo.scss';

import { Button, Empty, Icon, Input, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { History } from 'history';
import * as React from 'react';
import { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodo, deleteTodo, fetchTodo, searchTodo, updateTodoContent, updateTodoStatus } from '../actions/todo';
import ModalForm from '../components/formModal';
import { ITodoState } from '../interface/TodoState';

interface IAddFormProps extends FormComponentProps {
    searchTodo: any;
    updateTodoContent: any;
    updateTodoStatus: any;
    deleteTodo: any;
    addTodo: any;
    fetchTodo: any;
    history: History;
    todo: ITodoState[];
    [name: string]: any;
}

const Search = Input.Search;

class Todo extends React.Component<IAddFormProps> {
    public modalForm: any;
    public state = {
        ResolvedStatus: false,
        modalTitle: '',
        userId: '',
        q: '',
    };
    public componentDidMount() {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            this.props.history.push('/');
        }
        this.setState(
            {
                userId,
            },
            () => {
                this.props.fetchTodo(userId);
            }
        );
    }
    public OnShowResolvedTodo(flag: boolean) {
        this.setState({
            ResolvedStatus: flag,
        });
    }
    public addTodo = (content: string) => {
        const { userId } = this.state;
        this.props.addTodo(userId, content);
    };
    public editTodo = (content: string, todoId: string) => {
        this.props.updateTodoContent(todoId, content);
    };
    public OnDeleteTodo = (todoId: string) => {
        this.props.deleteTodo(todoId);
        message.success('删除成功');
    };
    public OnUpdateTodoStatus = (todoId: string) => {
        this.props.updateTodoStatus(todoId);
    };
    public OnSearch = (val: string) => {
        const { userId } = this.state;
        this.props.searchTodo(userId, val);
    };
    public onRef = (ref: any) => {
        this.modalForm = ref;
    };
    public onShowModal = (
        action: string,
        todoId?: string,
        oldContent?: string
    ) => {
        if (action === 'add') {
            this.setState({ modalTitle: '新增Todo' });
        }
        if (action === 'edit') {
            this.setState({ modalTitle: '编辑Todo' });
        }
        this.modalForm.showModal(action, todoId, oldContent);
    };
    public render() {
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
        fetchTodo: (userId: string) => {
            dispatch(fetchTodo(userId));
        },
        addTodo: (userId: string, content: string) => {
            dispatch(addTodo(userId, content));
        },
        deleteTodo: (todoId: string) => {
            dispatch(deleteTodo(todoId));
        },
        updateTodoStatus: (todoId: string) => {
            dispatch(updateTodoStatus(todoId));
        },
        updateTodoContent: (todoId: string, content: string) => {
            dispatch(updateTodoContent(todoId, content));
        },
        searchTodo: (userId: string, q: string) => {
            dispatch(searchTodo(userId, q));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
