import { Component } from "react";

class ClassBind extends Component {

    state = {
        name: 'codingon',
    };

    // 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
    printConsole = () => {
        console.log('this', this); // 현재 컴포넌트
        console.log('state', this.state);
    }

    printConsole2 = (msg) => {
        console.log('msg', msg);
    }
    /** 
     * printConsole3() {}
     * => this.printConsole3 = this.printConsole3.bind(this);
     *      - bind()는 해당 함수에서 가르킬 this를 직접 설정
     * **/

    render() {
        return (
            <div>
                <h1>Class Component Event</h1>
                <button onClick={this.printConsole}>Print Console (인자 x)</button>
                <button onClick={() => this.printConsole2('안녕')}>Print Console (인자 o)</button>
            </div>
        )
    }
}

export default ClassBind