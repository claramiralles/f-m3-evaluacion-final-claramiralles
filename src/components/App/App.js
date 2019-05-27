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
      },
    };
    this.handlerUpdateValue = this.handlerUpdateValue.bind(this);
    this.getHouses = this.getHouses.bind(this);
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
                  people = {this.state.people.data.filter(character => character.name.toUpperCase().includes(name.toUpperCase())).filter(character => !this.state.filter.houses.length || this.state.filter.houses.includes(character.house))} //si el array que tengo en el estado incl. uye la casa que  te estoy pasando me lo pintas //si el array de cuatro que tengo guardado en el estado me incluye la casa por lla que esta pasando, me lo pinta. si la longitud de filter.houses.length me da un truthhy, por tanto me lo pinta, si no me va a la segunda condicion
                  onSearchHouses = {this.getHouses}
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


// people = {this.state.people.data.filter(character => character.name.toUpperCase().includes(name.toUpperCase())).filter(character => character.house.includes(character.house))} 
// //filtro para que solo me incluya la casa que esta en el array. ahhora le paso por props la funcion al input de checkbo para que me coja el value que yo quiero y lo controlo con el checked //aqui uso el array houses como una mallla para filtra, pero esta creado en el estado . yo voy a coger el array de las cuatro casas que esta en el estado, el que hemos pìntado. pintarlos es algo a parte, ahora ya los pinta, pero le voy a deir cual debe estar hekeado. si grifindor esta de


// houses: prevState.filters.houses.find(item => item === value) //buscame un item igual al value. como no lo vas a encontrar, se produce un falsy y entonces vamos a la condicion : que te une el value. si es verdadero, para que me lo desclicque le doy la condicion de ? con filter, filter me devuelve un array, en este caso todos los elementos cuyo value sea distinto al value que he clickado