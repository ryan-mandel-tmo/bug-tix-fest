import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import { Button, IconButton, TextField } from '@material-ui/core'

function App(props) {
  const [name, setName] = React.useState(props.name)
  const handleNameTextChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div className="App">
      <AppBar className='App-header' position="sticky">
        <IconButton color="inherit" edge="start" className='icon' onClick={props.increment}>
          <img className="App-logo" alt="logo" />
        </IconButton>
        <div>
          Welcome props.name
        </div>
      </AppBar>
      <div className="AppBody">
        Thats not my name, its <TextField value={name} onChange={handleNameTextChange}/> <Button variant='outlined' onClick={() => {props.rename(name)}}> Confirm </Button>
      </div>
      <div className="AppBody"> You have clicked the button {props.count} times <Button variant='outlined' onClick={props.increment}> Click </Button></div>
    </div>
  );
}

export default connect((state) => (state), {
  increment: () => ({ type: "Increment" }),
  rename: (name) => ({ type: "Rename", name })
})(App);
