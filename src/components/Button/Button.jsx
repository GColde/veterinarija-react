import PropTypes from "prop-types";
import styled from "styled-components";

const StylizedButton = styled.button`
  --accent-color: #000000;

  width: 11rem;
  height: fit-content;
  margin: 0.5rem 1rem;
  padding: 0.2rem 0;
  font-size: 1.5rem;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  background-color: ${(props) => (props.inverted ? "orange" : "white")};
  color: var(--accent-color);
  display: inline-block;
  text-align: center;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

const Button = ({ children, ...props }) => {
  return <StylizedButton {...props}>{children}</StylizedButton>;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
