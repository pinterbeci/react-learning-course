import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>

            {/**
             * we dont want to reload the page, if we click the <a>.
             *  thats why import the Link, instead using <a>
             * with this solution, dont reload the page, if we click the links. :)
             */}
            <Link to="/">Go Back!</Link>
        </div>
    )
}

export default About
