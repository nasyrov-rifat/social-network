import React from 'react';
import './App.css';
import s from "./components/Users/UsersContainer.module.css"
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedTC} from "./Data/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Data/redux-store";

const News = React.lazy(() => import(`./components/News/News`))
const Music = React.lazy(() => import(`./components/Music/Music`))
const Friends = React.lazy(() => import(`./components/Friends/Friends`))
const Settings = React.lazy(() => import(`./components/Settings/Settings`))
const DialogsContainer = React.lazy(() => import(`./components/Dialogs/DialogsContainer`))
const UsersContainer = React.lazy(() => import(`./components/Users/UsersContainer`))
const ProfileContainer = React.lazy(() => import(`./components/Profile/ProfileContainer`))
const Login = React.lazy(() => import(`./components/Login/Login`))


class App extends React.Component {
    componentDidMount() {
        this.props.initializedTC();
    }

    render() {
        if (!this.props.initialized) {
            return <div className={s.preloader}>
                <Preloader/>
            </div>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <React.Suspense fallback={<div className={s.preloader}><Preloader/></div>}>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route path='/profile/:Id?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/friends' render={() => <Friends/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='*' render={() => <Redirect to={"/profile"}/>}/>
                        </Switch>
                    </div>
                </React.Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedTC}))(App);

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer {...props} />
        </Provider>
    </BrowserRouter>
}

export default MainApp;