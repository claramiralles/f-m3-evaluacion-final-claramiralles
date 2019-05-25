import React, {Fragment, Component} from 'react';
import{Route, Switch} from 'react-router-dom';
import Filters from '../Filters/Filters';
import CharacterList from '../CharacterList/CharacterList';
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
      }     
      )},
     ) }

  getCharacter(id) {
    const { data } = this.state.people;
    return data.find(character => character.id === parseInt(id));
  }

  // handlerUpdateValue (e) {
  //   const {value} = e.target;
  //   this.setState(prevState => {
  //     return {
  //       people: {
  //         ...prevState.people
  //       },
  //       filter: {
  //         inputValue: value
  //       }
  //     }
  //   })
  // }

  handlerUpdateValue (e) {
    const {value} = e.target;
    this.setState({ 
      filter: {
        name: value
    }}
    )
  }

  render () {
    const {data, isFetching} = this.state.people;
    return (
      <div>
        <header>
          <h1>The Harry Potter Characters</h1>
        </header>


        <main>
          <Switch>
            <Route exact path="/" render={() => isFetching 
                ? (<p>Loading...</p>)
                :(<Fragment>
                      <Filters onInputChange ={this.handlerUpdateValue}
                      nameValue={this.state.filter.name}/>
                      <CharacterList people={data}/>
                    </Fragment> )} />

            <Route
              path="/character-detail/:characterId"
              render={routeProps => {
                // console.log(routeProps);
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
