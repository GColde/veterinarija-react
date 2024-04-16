import PropTypes from "prop-types";
import styled from "styled-components";

const StylizedButton = styled.div`
  --accent-color: #000000;

  color: var(--accent-color);
  width: 8rem;
  height: fit-content;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  display: inline-block;
  text-align: center;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;

const ButtonWoBorder = ({ children, ...props }) => {
  return <StylizedButton {...props}>{children}</StylizedButton>;
};

ButtonWoBorder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonWoBorder;
