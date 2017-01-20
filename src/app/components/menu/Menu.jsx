import React, {Component, PropTypes} from "react";

export class Menu extends Component {
    componentDidMount() {
    }

    render() {
        const { menu } = this.props;
        return(
            <div>
                <div>
                    {menu}
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired,
};