import { Component } from 'react';
import PropTypes from 'prop-types';

class Ex3 extends Component {
    render() {
        const { text, valid } = this.props;
        return <div>
            <h2>{text}</h2>
            <button onClick={valid}>콘솔 메시지</button>
        </div>;
    }
}

Ex3.defaultProps = {
    text: '이것은 기본 text props 입니다.'   
};
Ex3.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Ex3;

