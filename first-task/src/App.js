import React, {Component} from 'react';
import './App.css'
import AddForm from "./component/AddForm/AddForm";
import WatchList from "./component/WatchList/WatchList";
import nanoid from 'nanoid'
class App extends Component {
    state = {
        film: '',
        id: '',
        films: [],

    };
    changeName = event => {
        this.setState({film: event.target.value})
    };
    addMovieName = e => {
      e.preventDefault();
      if (this.state.film === '') {
        alert('Вы ничего не ввели')
      } else {
          const films = [...this.state.films];
          films.push({film: this.state.film, id: nanoid()});
          this.setState({films, film: '',});
      }


    };
    removeMovieName = id => {
        const filmIndex = this.state.films.findIndex(t=>t.id === id);
        const films = [...this.state.films];
        films.splice(filmIndex, 1);
        this.setState({films})
    };
    editMovie = (id, event) => {
        const films = [...this.state.films];
        films[id].film = event.target.value;
        this.setState({films})
    };

    render() {
        return (
            <div className='App'>
              <AddForm
                  onChange={this.changeName}
                  onsubmit={this.addMovieName}
                  name={this.state.film}
              />
                {this.state.films.map((name, index) => (
                    <WatchList
                        key={name.id}
                        name={name.film}
                        remove={()=> this.removeMovieName(name.id)}
                        onChange={event => this.editMovie(index, event)}
                    />
                ))}
            </div>
        );
    }
}

export default App;