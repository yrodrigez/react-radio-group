import './index.css'
import React, {Component} from 'react'
import FaPlay from 'react-icons/lib/fa/play'
import FaPause from 'react-icons/lib/fa/pause'
import FaForward from 'react-icons/lib/fa/forward'
import FaBackward from 'react-icons/lib/fa/backward'

class RadioGroup extends Component {
  state = { active: this.props.defaultValue };

  onClick = (e, activeButton) => {
    e.preventDefault();
    this.setState({active: activeButton})
  };

  render() {
    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {React.Children.map(this.props.children, $child => React.cloneElement($child, {...$child.props, onClick: this.onClick, active: this.state.active}))}
      </fieldset>
    )
  }
}

class RadioButton extends Component {

  render() {
    const isActive = this.props.active === this.props.value; // <-- should come from somewhere
    const className = 'radio-button ' + (isActive ? 'active' : '');


    return (
      <button onClick={(e) => this.props.onClick(e, this.props.value)} className={className}>
        {this.props.children}
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <RadioGroup legend="Radio Group" defaultValue="pause">
          <RadioButton value="back"><FaBackward/></RadioButton>
          <RadioButton value="play"><FaPlay/></RadioButton>
          <RadioButton value="pause"><FaPause/></RadioButton>
          <RadioButton value="forward"><FaForward/></RadioButton>
        </RadioGroup>
      </div>
    )
  }
}

export default App
