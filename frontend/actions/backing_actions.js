import * as APIBacking from '../util/backing_util';
export const RECEIVE_BACKING = 'RECEIVE_BACKING';

const receiveBacking = (backing) =>({
    type: RECEIVE_BACKING,
    backing
})

export const createBacking = (backing) => dispatch => {
    return APIBacking.createBacking(backing)
        .then( backing => dispatch(receiveBacking(backing)))
}