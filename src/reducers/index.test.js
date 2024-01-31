import rootReducer from './index';
import * as actions from '../actions';
import {stack, stacks} from '../data/fixtures';

const defaultReducer = {
    stack: {},
    stacks: []
}

describe('root reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({},{})).toEqual(defaultReducer);
    });

    it('sets the main stack', () => {
        expect(rootReducer({}, {type: actions.SET_STACK, stack})).toEqual({stack, stacks:[]});
    });

    it('loads stacks', () => {
        expect(rootReducer({}, {type: actions.LOAD_STACKS, stacks})).toEqual({stack: {}, stacks});
    });

    it('add a stack', () => {
        expect(rootReducer({}, {type: actions.ADD_STACK, stack})).toEqual({stack: {}, stacks: [ stack ]});
    });
});
