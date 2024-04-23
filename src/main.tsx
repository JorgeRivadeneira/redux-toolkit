import { render } from 'preact'
import { App } from './app.tsx'
import { Provider } from 'react-redux'
import './index.css'
import {store} from './redux/store.ts'
import React from 'preact/compat'

render(
<React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</React.StrictMode>

, document.getElementById('app')!
)
