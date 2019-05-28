import React, {Component} from 'react';

class Eyes extends Component {
    render () {
        return (
            <form> 
                <fieldset> Select by eyes</fieldset>
                <input 
                type = "checkbox"
                name = "eyes"
                id = "brown"
                value = "brown"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "brown" > Brown </label> 

                <input 
                type = "checkbox"
                name = "eyes"
                id = "blue"
                value = "blue"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "blue" > Blue </label> 

                <input 
                type = "checkbox"
                name = "eyes"
                id = "green"
                value = "green"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "green" > Green </label> 

                <input 
                type = "checkbox"
                name = "eyes"
                id = "grey"
                value = "grey"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "grey" > Grey </label> 

                <input 
                type = "checkbox"
                name = "eyes"
                id = "black"
                value = "black"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "black" > Black </label> 

                <input 
                type = "checkbox"
                name = "eyes"
                id = "red"
                value = "red"
                onClick = {this.props.onSearchEyes}
                />
                <label htmlFor = "red" > Red </label> 
            </form>
        )
    }
}

export default Eyes;