import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';



class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "mua bim bim", isComplete: true },
        { title: "di do xang", isComplete: true },
        { title: "di an lien hoan", isComplete: false }
      ]
    }
  }
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        {
          todoItems.map((item, index) =>
            <TodoItem
              key={index}
              item={item}
              onClick={this.onItemClicked(item)} />)
        }
      </div>
    );
  }
}

export default App;
