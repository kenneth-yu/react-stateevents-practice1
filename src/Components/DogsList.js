import React from "react";
import DogCard from './DogCard'
import Dogs from '/Users/kennethyu/dev/accesslabs/mod4/react-stateevents-practice1/src/dogs.js'

class DogsList extends React.Component{
  state = {
    allDogs: Dogs
  }
  render(){
    let doggos = this.state.allDogs.map(oneDog => <DogCard oneDog={oneDog}/>)
    console.log(doggos)
    return(<div className="DogContainer">{doggos}</div>)
  }
}

export default DogsList
