import React, {Fragment, Component} from 'react';
import Filters from '../Filters/Filters';
import List from '../CharacterList/CharacterList';
import fetchPeople from '../../services/people-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {
        data: [],
        isFetching: true 
      },
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    fetchPeople().then(data => {
      this.setState(prevState => {
        return {
          people: {
            data: data,
            isFetching: false
          },
        };
      });
    });
  }

  render () {
    const {data, isFetching} = this.state.people;
    return (
      <div>
        <header>
          <h1>The Harry Potter Characters</h1>
        </header>
        {isFetching 
          ? (<p>Loading...</p>)
          :(<Fragment>
                {/* <Filters /> */}
                <List people={data}/>
              </Fragment> )}
      </div>
    )
  }
}

export default App;
