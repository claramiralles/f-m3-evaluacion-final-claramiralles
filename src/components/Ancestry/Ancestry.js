import React, {Component} from 'react';


class Ancestry extends Component {
    render () {
        return (
            <form>
                <fieldset>
                    <legend>Select by ancestry</legend>
                    <input 
                    type="text"
                    name="ancestry"
                    id="ancestry"
                    value={this.props.ancestry}
                    onChange={this.props.onSearchAncestry} 
                    />
                    <label htmlFor="ancestry">Ancestry</label>
                </fieldset>
            </form>

        )
    }
}

export default Ancestry;