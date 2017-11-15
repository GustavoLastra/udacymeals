import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'                               //imported Store from redux
import reducer from './reducers'                                 //imported Reducer

const store = createStore(                                       //create store
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <App store={store} />,                                       //pass store as prop to App component
  document.getElementById('root')
)
registerServiceWorker()
