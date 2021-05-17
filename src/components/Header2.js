import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'


const Header2 = ({ title }) => {

    const onClick = () => {

        console.log("click")
    }

    return (

        <header className="header">
            <h1>
                {title}
            </h1>
            <Button color="green" text="Hello" onClick={onClick}></Button>
            <Button color="gray" text="Cső" onClick={onClick}></Button>
            <Button ></Button>

            {/**
            <Tasks></Tasks>
            */}
        </header>
    )
}

Header2.defaultProps = {

    title: 'Task tracker, with Header2.'
}

Header2.propTypes = {
    title: PropTypes.string
}

export default Header2;