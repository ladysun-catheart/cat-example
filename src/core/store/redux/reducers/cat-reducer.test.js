import catReducer from './cat-reducer'
import Adapter from 'enzyme-adapter-react-16'
import {config} from 'enzyme'

config({adapter: new Adapter()})

describe('Given a cat reducer...', () => {

    test('when enters GET_CAT_LIST actions the state change', () => {
        
    })

})

