import React, {Component } from 'react';
import './App.scss'
import Header from './components/Header';
import Assignment from './components/Assignment'
import Acquainted from './components/Acquainted'
import Relationships from './components/Relationships'
import Requirements from './components/Requirements'
import RegisterNewUser  from "./components/Form/RegisterNewUser";
import User from "./components/Users";
import About from "./components/About"
import * as actions from './action/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class App extends Component {
    componentDidMount() {
        this.props.actions.getToken();
        this.props.actions.getPerson(true);
        this.props.actions.getPersonHeader();
    }
    submit = values => {
        this.props.actions.postForm(values);
    };
    getInitialValues () {
        return {
            email: null,
            name: null,
            phone: null,
            photo: null,
            position_id: null
        };
    }
    refsForScroll = {};

    setSkrollRef = (ref, name) => {
        this.refsForScroll[name] = ref;
    };

    render() {
    const {headerUser, lastPage} = this.props;
        return (
            <div className="App">
                <Header
                    headerUser={headerUser}
                    refsForScroll={this.refsForScroll}/>
                <Assignment
                    setSkrollRef={this.setSkrollRef}
                    refsForScroll={this.refsForScroll}/>
                <Acquainted
                    setSkrollRef={this.setSkrollRef}
                    refsForScroll={this.refsForScroll}/>
                <Relationships setSkrollRef={this.setSkrollRef}/>
                <Requirements  setSkrollRef={this.setSkrollRef}/>
                <User
                    buttonDisabled={lastPage}
                    setSkrollRef={this.setSkrollRef}/>
                <RegisterNewUser
                    onSubmit={this.submit}
                    initialValues={this.getInitialValues()}
                    showPopup={this.props.popup}
                    closePopup={this.props.actions.closePopup}
                    setSkrollRef={this.setSkrollRef}
                />
                <About setSkrollRef={this.setSkrollRef}/>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        person: state.people.person,
        headerUser: state.headerUser,
        lastPage: state.people.lastPage,
        popup: state.popup
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
