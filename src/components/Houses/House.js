import React, {Component} from 'react';
import './House.scss'

class House extends Component {
    render (){
        return (
            <form>
            <fieldset>
                <legend> Select by house</legend>
                <input
                type="checkbox"
                name="houses"
                id="houses"
                value="Gryffindor"
                onClick = {this.props.onSearchHouses}
                />
                <label htmlFor="houses">gryffindor</label>

                <input
                type="checkbox"
                name="houses"
                id="houses"
                value="Slytherin"
                onClick = {this.props.onSearchHouses}
                />
                <label htmlFor="houses">slytherin</label>

                <input
                type="checkbox"
                name="houses"
                id="houses"
                value="Ravenclaw"
                onClick = {this.props.onSearchHouses}
                />
                <label htmlFor="houses">ravenclaw</label>

                <input
                type="checkbox"
                name="houses"
                id="houses"
                value="Hufflepuff"
                onClick = {this.props.onSearchHouses}
                />
                <label htmlFor="houses">hufflepuff</label>

            </fieldset>
        </form>
        )
    }
}

export default House;