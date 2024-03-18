
import React, { Component, createRef } from 'react'

export default class Ex1 extends Component {
    writerRef = createRef();
    titleRef = createRef();

    handleFocus = () => {
        if (this.writerRef.current.value.trim().length === 0) {
            this.writerRef.current.focus();
            return;
        }

        if (this.titleRef.current.value.trim().length === 0) {
            this.titleRef.current.focus();
            return;
        }
    }

  render() {
    return (
      <div>
        작성자 : 
        <input type='text' ref={this.writerRef}/>
        제목 : 
        <input type='text' ref={this.titleRef}/>
        <button onClick={this.handleFocus}>작성</button>
      </div>
    )
  }
}
