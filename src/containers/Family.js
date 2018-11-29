import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as relativesActions from '../actions/relativesActions';
import { Relative } from '../models/updateData/family/relative';


class Family extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: false, itemStudy: new Relative(this.props.user.uid) };
    }

    componentWillMount() {
        this.props.actions.LoadRelatives(this.props.user.uid);
    }

    rowRelative(item, index) {
        return (
            <div key={index} className="row">
                <div className="col-sm-4 text-left">
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.lastName}
                    </div>
                </div>
                <div className="col-sm-4 text-left">{item.lastName}</div>
                <div className="col-sm-4 text-left">{item.relationship}</div>

            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <button className="btn btn-link float-left btn-sm">Add Relative</button>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-left bg-success text-white">Name</div>
                    <div className="col-sm-4 text-left bg-success text-white">LastName</div>
                    <div className="col-sm-4 text-left bg-success text-white">Relationship</div>
                </div>
                {this.props.relatives.map(this.rowRelative)}
            </div>

        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.currentUser,
        relatives: state.relatives.relatives || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(relativesActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Family)