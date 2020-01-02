import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as CatReducer from './cat-reducer'
import Error from '../../../config/error-code'
import {
    success,
    error,
    pending
} from './utils'

configure({ adapter: new Adapter() })

describe('Given a cat reducer...', () => {

    // GET_CAT_LIST
    test('when enters GET_CAT_LIST_fullfilled actions the state change', () => {
        const type = success('GET_CAT_LIST')
        const payload = { catTotalStored: 1, catList: [] }
        const stateExpected = { ...CatReducer.initialState, ...payload }
        const stateResult = CatReducer.reducer(CatReducer.initialState, { type, payload })
        expect(stateResult).toEqual(stateExpected)
    })

    test('when enters GET_CAT_LIST_error actions the state change', () => {
        const type = error('GET_CAT_LIST')
        const payload = {}
        const stateExpected = {
            ...CatReducer.initialState,
            catList: [],
            catTotalStored: 0,
            page: 1,
            rows: 10,
            pending: false,
            error: Error.CAT_LIST_NOT_FETCHED
        }
        const stateResult = CatReducer.reducer(CatReducer.initialState, { type, payload })
        expect(stateResult).toEqual(stateExpected)
    })

    test('when enters GET_CAT_LIST_pending actions the state change', () => {
        const type = pending('GET_CAT_LIST')
        const payload = {}
        const stateExpected = {
            ...CatReducer.initialState,
            pending: true,
            error: 0
        }
        const stateResult = CatReducer.reducer(CatReducer.initialState, { type, payload })
        expect(stateResult).toEqual(stateExpected)
    })

})

