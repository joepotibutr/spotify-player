import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers'

const middleware = [ thunk ]
middleware.push(createLogger())

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'))
registerServiceWorker()
