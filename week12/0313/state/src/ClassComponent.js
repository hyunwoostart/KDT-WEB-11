import { Component } from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends Component {
    render() {
        const { text, valid }  = this.props;
        return(
            <div>
                <h1>{text}</h1>
                <button onClick={valid}>valid 메세지</button>
            </div>
        )
    }
}

ClassComponent.defaultProps = {
    text: '이건 기본 text props입니다.',
}

ClassComponent.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ClassComponent;