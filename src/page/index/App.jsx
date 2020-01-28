import React from 'react';
import Component from '../../components/Component';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    UNSAFE_componentWillMount(){
    }

    componentDidMount() {
    }

    componentWillUnmount () {
    }

    UNSAFE_componentWillReceiveProps (nextProps) {
    }

    shouldComponentUpdate(nextProps,nextState) {
    }

    UNSAFE_componentWillUpdate (nextProps,nextState) {
    }

    componentDidUpdate(prevProps,prevState) {
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    render() {
        return (
            <div>
                This is index page!!
                <Component />

            </div>
        );
    }
}

export default App;