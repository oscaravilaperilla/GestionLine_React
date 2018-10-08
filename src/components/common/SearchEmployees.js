import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as commonActions from '../../actions/commonActions';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import EmployeeItem from './EmployeeItem';
import { bindActionCreators } from 'redux';


class SearchEmployees extends Component {
  state = {
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: [],
  };
  render() {
    return (
      <div>
        <AsyncTypeahead
          {...this.state}
          labelKey="busqueda"
          minLength={3}
          onSearch={this._handleSearch}
          placeholder="Search for a Github user..."
          renderMenuItemChildren={(option, props) => (
            <EmployeeItem key={option.identificacion} employee={option} />
          )}
        />
      </div>

    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.employees.length > 0) {
      return {
        isLoading: false,
        options: props.employees,
      }
    }
    return null;

  }

/*   componentDidUpdate(prevProps, prevState) {
    if (prevProps.employees !== this.props.employees) {

      this.setState({
        isLoading: false,
        options: this.props.employees
      });
    }


  } */



  _handleSearch = (query) => {
    this.setState({ isLoading: true });
    this.props.actions.searchEmployees(query);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    employees: state.common.searchEmployees,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(commonActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchEmployees)



