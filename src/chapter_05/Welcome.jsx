// 함수형
// function Welcome(props) {
//   return <h1>안녕, {props.name}</h1>;
// }

// 클래스형
import { Component } from "react"

class Welcome extends Component {
  render() {
    return <h1>안녕, {this.props.name}</h1> // this 없으면 터짐
  }
}

export default Welcome