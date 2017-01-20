import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {getMenu} from '../../actions';
import {Menu} from "../../components/menu/Menu.jsx";

class Home extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMenu());
    }

    render() {
        const { isFetching, menu } = this.props;
        const loading = isFetching ? <div>Loading....</div> : "";

        return(
            <div>
                <h1>Home</h1>
                {loading}
                <Menu menu={menu}></Menu>
            </div>
        )
    }
}

Home.propTypes = {
    menu: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {flags, menu} = state;
    return {
        isFetching: flags.isFetching,
        menu
    }
}

const home = connect(mapStateToProps)(Home);
export {home as Home};