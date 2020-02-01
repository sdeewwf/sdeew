import React, {Component} from 'react';
import './App.css';
import Monent from 'react-moment';
import Moment from 'react-moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  
  componentDidMount() {
    fetch('/api/todo')
    .then(res=> res.json()).then(json => {
      this.setState({
        items: json,
        isLoaded: true
      });
    })
  }

  render() {
    const { isLoaded, items } = this.state;
    console.log(items);

    if(!isLoaded)
      return <div>Loading...</div>;

    return (
      <div className= "App">
        <h1>Задачи:</h1>
        <div className="todos">
            <ul>
              {items.map(item=> (
                <li key={item.id}>
                  {item.text} | <Moment format="YYYY/MM/DD">{item.date}</Moment>
                </li>
              ))}
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
