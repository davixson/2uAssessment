import React, {Component} from 'react'
import {connect} from 'react-redux';
import './style.css'
import alertActions from '../../redux/actions/alertActions';

class Alert extends Component {

    state ={
        display : false
    }

    render() {
        const {message} = this.props;
        console.log("el mensaje es",message);
        return (
            <div className="modal show"  tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">2ULaundry</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> 
                        </div>
                        <div className="modal-body">
                            <p>{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button"  onClick={this.props.closeAlert} className="btn btn-primary">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.invoiceReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeAlert: () => {
        dispatch(alertActions.closeAlert())
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Alert);