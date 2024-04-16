import styled from "styled-components";
import PetsContainer from "../../components/Containers/PetsContainer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #101215;
  color: white;
`;

const PetsList = () => {
  return (
    <StyledDiv>
      <PetsContainer></PetsContainer>
    </StyledDiv>
  );
};

export default PetsList;
