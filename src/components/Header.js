import PropTypes from 'prop-types';

//const Header = (props) => {
const Header = ({ title }) => {
    return (
        <header className="header">
            <span>______________</span>

            {/* css in JSX
            <h1 style={headerStyle}>This is, the 'Header' component!</h1>
            */}

            <h1>This is, the 'Header' component!</h1>

            <h2>Task Tacker</h2>

            <h2>Props, bellow!</h2>
            {/*<h3>{props.title}</h3>*/}
            <h2>{title}</h2>
            <span>_____________</span>

            <button className="btn" >Add</button>
        </header>
    )
}


{/*
    //css in jsx
const headerStyle = {
    color: "red",
    backgroundColor: "yellow"
}*/}

//props create
Header.defaultProps = {

    title: 'Task tracker',
}

Header.prototype = {
    title: PropTypes.string,

}
export default Header
