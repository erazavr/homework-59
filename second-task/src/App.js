import React, {Component} from 'react';
import Jokes from "./Jokes";
class App extends Component {
    state = {
        joke: '',
        jokes: []
    };

    async componentDidMount() {
        const jokes = [];
        for (let i = 0; i < 5; i++) {
            const api_url = await
            fetch('https://api.chucknorris.io/jokes/random');
            if (api_url.ok) {
                const joke = await api_url.json();
                jokes.push(joke.value);
            }
            this.setState({jokes})
        }
    }
    render() {
        return (
            <div>
                {this.state.jokes.map((joke,index) => (
                    <Jokes key={index} joke={joke}/>
                ))}
            </div>
        );
    }
}

export default App;