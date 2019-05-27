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
      },
      filter: {
        name: '',
      },
      cid: ""
    };
    this.handlerUpdateValue = this.handlerUpdateValue.bind(this);
    this.handlePatronus = this.handlePatronus.bind(this);
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

  getCharacter(id) {
    const { data } = this.state.people;
    return data.find(character => 
      character.id === parseInt(id));
  }

  handlePatronus(event){
    const newCid = event.currentTarget.getAttribute('data-id');
    console.log(event)

    this.setState(prevState =>{
      if (newCid === prevState.cid) {
        return {
          cid: null
        }
      } else {
        return {
          cid: newCid
        }
      }
    });
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
                  people={data}
                  name={name}
                  onSearch={this.handlerUpdateValue}
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
                    cidState = {this.state.cid}
                    action = {this.handlePatronus}
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
