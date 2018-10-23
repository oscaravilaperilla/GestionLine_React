import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as studyActions from '../actions/studyActions';
import ListStudies from '../components/UpdateProfile/studies/ListStudies';
import AddStudy from '../components/UpdateProfile/studies/AddStudy';

class Studies extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.editStudy = this.editStudy.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    cancelClick(){

        this.setState({visible : false, itemStudy: null});

    }
    render() {
        return (
            <div>
                <AddStudy itemStudy={this.state.itemStudy} cancelClick={this.cancelClick} visible={this.state.visible}></AddStudy>
                <ListStudies editStudy={this.editStudy} studies ={this.props.studies}/>
            </div>
            
        );
    }

    componentWillMount() {
        
        this.props.actions.LoadStudies(this.props.user.uid);
        //this.props.actions.queryEmployee(this.props.user.uid);
    }

    editStudy(e,p){
        e.preventDefault();
        console.log(e,p);
        this.setState({visible : true, itemStudy: p});
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        studies: state.user.studies || [],
        user: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(studyActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Studies);
