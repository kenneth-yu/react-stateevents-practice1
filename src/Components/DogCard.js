import React from "react";

class DogCard extends React.Component {

  state ={
    clicked: false
  }

  clickhandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    console.log(this.props.oneDog)
    return (
      <div>
         <h2>{this.props.oneDog.name}</h2>
        <img alt="" src={this.props.oneDog.img}/>
        <button onClick={this.clickhandler}>Bark</button>
        {this.state.clicked?<h2>RUFF</h2>:<h2></h2>}
      </div>
    );
  }
}

export default DogCard;
