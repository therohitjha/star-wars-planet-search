import {shallow} from 'enzyme'
import React from 'react'
import App from './App'

it('App length testing',()=>{
    expect(shallow(<App/>).length).toEqual(1)
})