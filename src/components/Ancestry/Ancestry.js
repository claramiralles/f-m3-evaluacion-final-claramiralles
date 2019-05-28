import React, {Component} from 'react';

class Ancestry extends Component {
    render () {
        return (
            <form>
                <fieldset>
                    <legend>Select by ancestry</legend>
                        <input
                            type = "checkbox"
                            name = "ancestry"
                            id = "pure-blood"
                            value = "pure-blood"
                            onClick = {this.props.onSearchAncestry}
                        />
                        <label htmlFor = "pure-blood">Pure-blood</label>

                        <input
                            type = "checkbox"
                            name = "ancestry"
                            id = "half-blood"
                            value = "half-blood"
                            onClick = {this.props.onSearchAncestry}
                        />
                        <label htmlFor = "half-blood">Half-blood</label>

                        <input
                            type = "checkbox"
                            name = "ancestry"
                            id = "muggleborn"
                            value = "muggleborn"
                            onClick = {this.props.onSearchAncestry}
                        />
                    <label htmlFor = "muggleborn" >Muggleborn</label>
                </fieldset>
            </form>
        )
    }
}

export default Ancestry;