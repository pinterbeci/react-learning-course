import PropTypes from "prop-types";
import Button from "./Button";
import Tasks from "./Tasks";

const Header2 = ({ title, onAdd, showTask }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showTask ? 'red' : 'green'} text={showTask ? 'Close' : 'Add Task'}
        onClick={onAdd}></Button>
      {/* <Button color="gray" text="Cső" onClick={onClick}></Button>
            <Button ></Button>
    */}
      {/**
            <Tasks></Tasks>
            */}
    </header>
  );
};

Header2.defaultProps = {
  title: "Task tracker, with Header2.",
};

Header2.propTypes = {
  title: PropTypes.string,
};

export default Header2;