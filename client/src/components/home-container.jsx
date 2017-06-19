import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchIssues, openModal } from '../actions';
import { LOGIN_MODAL } from './modals/modal-types';


class HomeContainer extends Component {

    componentDidMount() {
      this.props.fetchUser();
      this.props.fetchIssues();
    }

    render() {

        return (
          <div className="home-container">
            <h1>25:00</h1>
            <div className="buttons">
              <button className='btn' onClick={() => this.props.openModal(LOGIN_MODAL)}>Login</button>
              <button>Work!</button>
              <button>About</button>
            </div>

          </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
  user: state.user.currentUser,
  issues: state.user.issues

});

export default connect(mapStateToProps, { fetchUser, fetchIssues, openModal })(HomeContainer);
