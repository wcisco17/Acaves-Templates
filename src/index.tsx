import "app/assets/scss/argon-design-system-react.scss";
import themes from 'app/assets/themes';
import "app/assets/vendor/font-awesome/css/font-awesome.min.css";
import "app/assets/vendor/nucleo/css/nucleo.css";
import { GlobalStateProvider } from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import App from './App';
import './index.css';

interface Props { };

export default class MainApp extends React.PureComponent<Props> {
    state = {
        loadingBarProgress: 0
    };

    componentDidMount() {
        this.setState({ loadingBarProgress: 100 });
    }

    componentWillUnmount() {
        this.setState({ loadingBarProgress: 0 });
    }

    render() {
        const { loadingBarProgress } = this.state;
        return (
            <>
                <LoadingBar
                    progress={loadingBarProgress}
                    height={loadingBarProgress <= 0 ? 8 : 0}
                    color={themes.primaryPink}
                    onLoaderFinished={loadingBarProgress}
                />
                <App />
            </>
        )
    }
};

setTimeout(() => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStateProvider>
                <MainApp />
            </GlobalStateProvider>
        </BrowserRouter>
        , document.getElementById('root'));
}, 1200)
