import { Component } from 'react';
import PropTypes from 'prop-types';
// prop-types 라이브러리를 PropTypes 이름으로 임포트

class Food extends Component {
    // 클래스형 컴포넌트는 reder 함수 필수
    render() {
        console.log('props: ', this.props);
        const { name, color }  = this.props;
        return(
            <div>
                <h1>좋아하는 음식 <span style={{ color: color }}>{name}</span></h1>
            </div>
        )
    }
}

Food.defaultProps = {
    name: '뭐먹지',
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Food;