import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'


const Card = ({ edit, remove, rating, name }) => {
    return (
        <div className="movie">
            <div>
                <b onClick={() => edit(name, rating)}className='edit'>edit</b>
                <b onClick={() => remove(name)} className='delete'>delete</b>
                <div className="movie-stars">{''.padEnd(rating, '*').split('').map(x => {
                    return <i class="fas fa-star"></i>
                })}
                 </div>
                 </div>
            <b className="movie-name">{name}</b>
        </div>
    )
}
class Movies extends Component {
    constructor(props) {
        super(props)
    }

   
    render() {
        return (
            <main className="main">
                <div className="movies-list">
                    {this.props.moviesList.map(x => {
                        return <Card name={x.name} rating={x.rating}
                            edit={this.props.edit}
                            remove={this.props.remove} rating={x.rating} name={x.name} />
                    })}
                    <div onClick={this.props.toggleModal} className="movie">
                        <i class="fas fa-plus" ></i>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({movie})=>{
return{
    moviesList: movie

}

}
const mapDispatchToProps = ()=>{

}
export default  connect(mapStateToProps,mapDispatchToProps)(Movies);