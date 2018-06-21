import React, { Component } from 'react'
import { init } from '@rematch/core'
import { Provider } from 'react-redux'

import Routes from './Routes'
import * as models from './models'

const store = init({
  models,
})

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
