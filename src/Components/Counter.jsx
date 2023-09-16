import { connect } from "react-redux";
import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {

    return (
        <>
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={inc}>INC</button>
            <button className="btn btn-primary" onClick={dec}>DEC</button>
            <button className="btn btn-primary" onClick={rnd}>RND</button>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        inc: () => (dispatch({type: 'INC'})),
        dec: () => (dispatch({type: 'DEC'}))
    }
}

export default connect(mapStateToProps, actions)(Counter)