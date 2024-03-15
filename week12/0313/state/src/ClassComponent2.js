import React, { Component } from 'react';
class ClassComponent2 extends Component {
    // state 사용
    state = {
        number: 0,
    }
    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={() => {
                    this.setState({number: number + 2});
                }}>plus</button>
                <button onClick={() => {
                    // this.setState(): state 값을 바꾸는 함수
                    // state 값은 직접 변경 X -> 꼭 setState() 이용만 가능
                    this.setState({number: number - 1});
                }}>minus</button>
            </div>
        )
    }
}

export default ClassComponent2;