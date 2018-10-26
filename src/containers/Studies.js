import { connect } from 'react-redux'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as studyActions from '../actions/studyActions';
import * as commonActions from '../actions/commonActions';
import update from 'immutability-helper';
import ListStudies from '../components/UpdateProfile/studies/ListStudies';
import AddStudy from '../components/UpdateProfile/studies/AddStudy';
import { StudyItem } from '../models/updateData/studies/study';
import {toastr} from 'react-redux-toastr';

class Studies extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false, itemStudy: new StudyItem(this.props.user.uid) };
        this.editStudy = this.editStudy.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
        this.handleErrorSubmit = this.handleErrorSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCareer = this.onChangeCareer.bind(this);
        this.onChangeLevels = this.onChangeLevels.bind(this);
        this.onChangeSemester = this.onChangeSemester.bind(this);
        this.onChangeUniversities = this.onChangeUniversities.bind(this);
        this.handleChangeGraduated = this.handleChangeGraduated.bind(this);
        this.handleChangeGraduated = this.handleChangeGraduated.bind(this);
        this.addStudy = this.addStudy.bind(this);
        this.deleteStudy = this.deleteStudy.bind(this);
    }

    cancelClick() {
        this.setState({ visible: false, itemStudy: new StudyItem(this.props.user.uid) });
    }

    addStudy() {
        this.setState({ visible: true, itemStudy: new StudyItem(this.props.user.uid) });
    }

    onChangeTitle = (e) => {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { title: e.target.value } });
        this.setState({
            itemStudy: itemStudyEdit
        });
    }

    onChangeSemester = (e) => {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { [e.target.name]: e.target.value } });
        this.setState({
            itemStudy: itemStudyEdit
        });
    }

    handleChangeGraduated = (e, value) => {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { [e.target.name]: value } });
        this.setState({
            itemStudy: itemStudyEdit
        })
    }

    onChangeCareer(value) {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { career: value } });
        this.setState({
            itemStudy: itemStudyEdit
        });
    }

    onChangeLevels(value) {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { level: value } });
        this.setState({
            itemStudy: itemStudyEdit
        });
    }

    onChangeUniversities(value) {
        const itemStudyEdit = update(this.state.itemStudy, { $merge: { university: value } });
        this.setState({
            itemStudy: itemStudyEdit
        });
    }




    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        if (this.state.itemStudy.level && this.state.itemStudy.career && this.state.itemStudy.university) {
            console.log(this.state.itemStudy);
            this.setState({
                visible: false
            });
            this.props.actions.addStudy(this.state.itemStudy,this.state.itemStudy.userId); 
        }
    }

    

    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }

    render() {
        return (
            <div>
                
                <button onClick={this.addStudy} className="btn btn-link float-left btn-sm">Add Study</button>
                <AddStudy handleChangeGraduated={this.handleChangeGraduated} onChangeUniversities={this.onChangeUniversities} universities={this.props.universities} onChangeSemester={this.onChangeSemester} onChangeLevels={this.onChangeLevels} onChangeTitle={this.onChangeTitle} careers={this.props.careers} levelStudies={this.props.levelStudies} handleErrorSubmit={this.handleErrorSubmit} handleSubmit={this.handleSubmit} onChangeCareer={this.onChangeCareer} itemStudy={this.state.itemStudy} cancelClick={this.cancelClick} visible={this.state.visible}></AddStudy>
                <ListStudies deleteStudy={this.deleteStudy} editStudy={this.editStudy} studies={this.props.studies} />
            </div>

        );
    }

    componentWillMount() {

        this.props.actions.LoadStudies(this.props.user.uid);
        this.props.commonActions.loadLevelsStudies();
        this.props.commonActions.loadCareers();
        this.props.commonActions.loadUniversities();
        //this.props.actions.queryEmployee(this.props.user.uid);
    }

    editStudy(e, id) {
        e.preventDefault();
        let p = this.props.studies.find((q) => {return q.id === id})
        const itemStudyEdit = update(this.state.itemStudy, {
            $merge:
            {
                title: p.title,
                id : p.id,
                userId : p.userId,
                numberSemester: p.numberSemester,
                graduate: p.graduate,
                year: p.year,
                level: this.props.levelStudies.find((e) => { return e.label === p.level }),
                career: this.props.careers.find((e) => { return e.label === p.career }),
                university: this.props.universities.find((e) => { return e.label === p.university })
            },
        });

        this.setState({ visible: true, itemStudy: itemStudyEdit });
    }

    deleteStudy(e, id) {
        e.preventDefault();

        const toastrConfirmOptions = {
            onOk: () => this.props.actions.deleteStudy(id,this.props.user.uid),
            onCancel: () => console.log('CANCEL: clicked')
          };
          toastr.confirm('Are you sure about that!', toastrConfirmOptions);
          
        
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        studies: state.user.studies || [],
        user: state.user.currentUser,
        levelStudies: state.common.levelsStudies || [],
        careers: state.common.careers || [],
        universities: state.common.universities || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(studyActions, dispatch),
        commonActions: bindActionCreators(commonActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Studies);
