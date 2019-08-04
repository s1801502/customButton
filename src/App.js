import React from "react";
import Button from "./components/button/Button";
import "./App.css";
import ModalWindow from './components/modal/modal'
import CustomInput from './components/custom-input/custom-input'


class App extends React.Component {

  state = {
    isOpened: false,
    address: ''
  }

  openModal = () => {
    this.setState({ isOpened: true })
  }

  closeModal = () => {
    this.setState({ isOpened: false })
  }

  handleOnChange = e => {
    this.setState({
      address: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="button">
          <Button handleClick={this.openModal} font="courier new">Submit</Button>
        </div>
        <ModalWindow isOpened={this.state.isOpened} closeModal={this.closeModal} />
        <CustomInput type="password" label="address" value={this.address} onChange={this.handleOnChange} style={{margin: '0 auto'}} />
      </div>
    );
  }
}

export default App;
