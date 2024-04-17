import PropTypes from "prop-types";
import styled from "styled-components";

const StylizedWrapper = styled.div`
  width: 25rem;
  margin: 0.5rem 1rem;
`;

const StylizedInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #696969;
  }
`;

const StylizedLabel = styled.label`
  padding: 10px;
  border-radius: 5px;
  font-size: 1.8rem;
  width: 100%;
  color: white;
`;

const Input = ({ label, ...props }) => {
  return (
    <StylizedWrapper>
      <StylizedLabel htmlFor={props.id}>{label}</StylizedLabel>
      <StylizedInput {...props} />;
    </StylizedWrapper>
  );
};

Input.propTypes = {
  props: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Input;
