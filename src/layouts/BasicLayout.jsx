import PropTypes from "prop-types";
import NavigationBar from "../components/NaviagationBar/NavigationBar";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0 30px;
  padding-top: 3rem;
`;

const BasicLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
