import React from 'react';
import '../static/style/app.less';
import bg from '../static/img/bg.jpeg';
class Component extends React.Component {
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
        return true;
    }

    UNSAFE_componentWillUpdate (nextProps,nextState) {
    }

    componentDidUpdate(prevProps,prevState) {
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    static getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    render() {
        return (
            <div className={'content'}>
                <img className='bg' src={bg} />
                <div className={'desc'}>qtnode cli 以Node中间件为基础，将前端各项能力抽象为中间件，可以自由配置各项能力。</div>
            </div>
        );
    }
}

export default Component;