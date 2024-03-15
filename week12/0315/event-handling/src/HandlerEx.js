import { Component } from "react";
class HandlerEx extends Component {
    state = {
        text: 'Hello World!',
        text2: '검정색',
        text3: '안녕하세요',
        text4: '사라져라',
        color: 'black'
    }

    render() {

        const { text, text2, text3, text4 } = this.state;

        return (
            <div>
                <h1>{text}</h1>
                <button onClick={() => {
                    this.setState({text: 'Goodbye World!'})
                }}>클릭</button>

                <h2>{text2}글씨</h2>
                <button onClick={() => {
                    this.setState({text2: '빨간색', color: 'red'})
                }}>빨간색</button>
                 <button onClick={() => {
                    this.setState({text2: '파란색', color: 'blue'})
                }}>파란색</button>

                <h3>{text3}</h3>
                <button onClick={() => {
                    this.setState({text3:''})
                }}>{text4}</button>
            </div>
        )
    }
}

export default HandlerEx;