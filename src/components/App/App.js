import React, {Fragment, Component} from 'react';
import{Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import fetchPeople from '../../services/people-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        data: [],
        isFetching: true 
      },
      filter: {
        name: '',
      }
    };
    this.handlerUpdateValue = this.handlerUpdateValue.bind(this);
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetchPeople()
    .then(data => {
      const newData = data.map ((item, index) => {
        return {...item, id: index + 1};
      })
      console.log(data);
      this.setState({
        people: {
          data: newData,
          isFetching: false
        }
      })
    }) 
  }

  getCharacter(id) {
    const { data } = this.state.people;
    return data.find(character => character.id === parseInt(id));
  }

  handlerUpdateValue (e) {
    const {value} = e.target;
    this.setState({ 
      filter: {
        name: value
      }
    })
  }

  render () {
    const {data, isFetching} = this.state.people;
    const {name} = this.state.filter;
    return (
      <div>
        <header>
          <h1>The Harry Potter Characters</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={routerProps => (
            <Home
                match={routerProps.match} 
                people={data}
                  // .filter
                  // (character => character.name.includes(this.state.filter.name))}
                name={name}
                onSearch={this.handlerUpdateValue}
              />)}
                          />
            <Route
              path="/character-detail/:characterId"
              render={routeProps => {
                return (
                  <Detail
                    character={this.getCharacter(routeProps.match.params.characterId)}
                    people={data}
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
