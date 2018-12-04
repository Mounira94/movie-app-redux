import React, { Component } from 'react';
import Movies from './Components/Movies';
import Search from './Components/Search';
import Add from './Components/Add'
import './App.css';
import { createStore } from 'redux'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
library.add(faStroopwafel);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [{ name: 'Les quatre cents coups 1959', rating: 6 },
      { name: 'La haine 1995', rating: 5 },
      { name: 'Le parrain 1972', rating: 4 },
      { name: 'C`est arrivé près de chez vous 1992', rating: 3 },
      { name: 'Apprendre à aimer 2018', rating: 1 },
      ],
      search: '',
      minRate: 0,
      modal: false,
      name: '',
      rating: 0,
      editOrSave: 'save'
    }
  }
  searchMovie = (event) => {
    this.setState({ search: event.target.value })
  }

  ratingFilter = (minRate) => {

    this.setState({
      minRate,
    })


  }

  edit = () => {

    let { name, rating } = this.state

    this.setState({
      movie: this.state.movie.map(x => {
        if (x.name === name) {
          return { name, rating }
        }
        return x
      })
      ,
      modal: !this.state.modal,
      editOrSave:'save',
      name:'',
      rating:''
    })

  }
  openModal = (name, rating) => {


    this.setState({
      name,
      rating,
      modal: !this.state.modal,
      editOrSave: 'edit'
    })
  }



  remove = (name) => {
    if (window.confirm('do you delete this one ?')) {
      this.setState({
        movie: this.state.movie.filter(x => x.name != name)
      })
    }
  }





  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  hundleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  addMovie = () => {
    let { name, rating } = this.state;
    this.setState({
      movie: [...this.state.movie, { name, rating }]
    });
    this.toggleModal();
  };
  render() {
    return (
      <div className="App">
        <Search minRate={this.state.minRate}
         filterRate={this.ratingFilter} searchMovie={this.searchMovie} />
        <Movies
         edit={this.openModal}
          remove={this.remove}
           moviesList={this.state.movie.filter(x => x.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1 && this.state.minRate < x.rating)}
          toggleModal={this.toggleModal} />
        <Add 
        edit={this.edit} 
        editOrSave={this.state.editOrSave}
         show={this.state.modal}
         name={this.state.name}
         rating={this.state.rating}
          hundleChange={this.hundleChange}
          addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
