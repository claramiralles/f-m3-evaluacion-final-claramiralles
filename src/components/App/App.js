import React, {Component} from 'react';
import './App.scss';
import fetchPeople from '../../services/people-service';
import{Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        data: [],
        isLoading: true
      },
      filter: {
        name: '',
        houses: [],
        eyes: []
      }
    }
  
    this.handlerUpdateValue = this.handlerUpdateValue.bind(this);
    this.getHouses = this.getHouses.bind(this);
    this.getEyes = this.getEyes.bind(this);
  
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetchPeople()
    .then(data => {
      const newData = data.map ((item, index) => {
        return {
          ...item, 
          id: index + 1};
      })
      this.setState({
        people: {
          data: newData,
          isLoading: false
        }
      })
    }) 
  }

  handlerUpdateValue (e) {
    const {value} = e.target;
    this.setState({ 
      filter: {
        name: value
      }
    })
  }

  getHouses(e){
    const {value} = e.target;
    this.setState( prevState => { 
      return{
        filter: {
          ...prevState.filter,
          houses: prevState.filter.houses.find(item => item === value) 
                  ? prevState.filter.houses.filter (item => item !== value)
                  : prevState.filter.houses.concat (value)
                }
              }
            })
          }

  getEyes(event) {
    const {value} = event.target
    console.log(value)

    this.setState(prevState => {
      return {
        filter : {
          ...prevState.filter,
          eyes: prevState.filter.eyes.find(item => item === value)
              ? prevState.filter.eyes.filter(item => item !== value)
              : prevState.filter.eyes.concat(value)

        }
      }
    })
  }

  getCharacter(id) {
    const { data } = this.state.people;
    console.log (data);
    return data.find(character => 
      character.id === parseInt(id));
  }

  render () {
    const {data} = this.state.people;
    const {name} = this.state.filter;
    return (
      <div className = "App">
        <main>
          <Switch>
            <Route 
              exact path = "/" 
              render = {routerProps => (
              <Home
                  match={routerProps.match} 
                  name={name}
                  onSearch={this.handlerUpdateValue}
                  people={this.state.people.data.filter(character => character.name.toUpperCase().includes(name.toUpperCase())).filter(character => this.state.filter.houses.includes(character.house)||!this.state.filter.houses.length).filter(character => this.state.filter.eyes.includes(character.eyeColour)||!this.state.filter.eyes.length)}
                  onSearchHouses = {this.getHouses}
                  onSearchEyes = {this.getEyes}
                />
              )}
            />
            <Route
              path = "/character-detail/:characterId"
              render = {routeProps => {
                return (
                  <Detail
                    character = {this.getCharacter(routeProps.match.params.characterId)}
                    people = {data}
                    isLoading = {this.state.people.isLoading}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
