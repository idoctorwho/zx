# redux 用 actionCreators 创建 action

- 文件目录

```bash
├── index.js
├── store
|  ├── actionCreators.js
|  ├── actionTypes.js
|  ├── index.js
|  └── reducer.js
└── TodoList.js
```

- `actionTypes.js`

```js
export const CHANGE_INPUT_VALUE = 'change_input_value'
export const ADD_TODO_ITEM = 'add_todo_item'
export const DELETE_TODO_ITEM = 'delete_todo_item'
```

- `actionCreators.js`

```js {7,12,16}
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
```

- `store/index.js`

```js
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
```

- `reducer.js`

```js
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reducer 可以接收 state, 但是绝不能修改 state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
```

- `TodoList.js`

```js {5,6,7,8,9,51,61,66}
import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'; // 引入 antd 的 css
import { Input, Button, List } from 'antd'; // 根据需要引入 antd 组件
import store from './store' // 引入 store
import { 
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.hanleClick = this.hanleClick.bind(this)
    this.handleStorChange = this.handleStorChange.bind(this)
    store.subscribe(this.handleStorChange) // 监测 store 变化然后执行一个函数.
  }
  render(){
    return (
      <Fragment>
        <div style={{marginTop: 10, marginLeft: 10}}>
          <Input 
            value={this.state.inputValue} 
            placeholder='todo' 
            style={{width: 300, marginRight: 10}}
            onChange={this.handleInputChange}
          />
          <Button 
            type='primary'
            onClick={this.hanleClick}
          >
            提交
          </Button>
          <List
            style={{marginTop: 10, width: 300}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
            <List.Item
              onClick={this.handleDeleteItem.bind(this, index)}
            >{item}</List.Item>)}
          />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStorChange() {
    // 当感知到 store 数据发生变化时, 重新取数据替换当前组件数据.
    this.setState(store.getState())
  }

  hanleClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
```