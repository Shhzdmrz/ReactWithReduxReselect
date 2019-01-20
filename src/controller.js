import React from 'react'
//import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'


const container = {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
};
const text = {
    textAlign: 'center'
};
const button = {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
};
const buttonText = {
    color: 'white'
};

const App = (props) => {
  const { people, isFetching } = props.people;
  return (
    <div style={container}>
      <span style={text}>Redux Example</span>
      <button style={button} onClick={() => props.getPeople()}>
        <span style={buttonText}>Load People</span>
      </button>
      {
        isFetching && <span><br></br>Loading</span>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <div key={i} >
              <span>Name: {person.name}</span>
              <span>Birth Year: {person.birth_year}</span>
            </div>
          })
        ) : null
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
