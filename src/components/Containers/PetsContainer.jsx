import styled from "styled-components";
import Button from "../Button/Button";
import { deletePets } from "../../api/pets";

const StyledContainer = styled.div`
  width: 25rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 2rem;
  background-color: #ffffff;
  color: black;
  border-radius: 5px;
`;
const StyledTitle = styled.h1``;
const StyledDescription = styled.h4`
  font-weight: 500;
  margin: 0;
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const PetsContainer = ({ pet }) => {
  return (
    <StyledContainer>
      <StyledTitle>{pet.name}</StyledTitle>
      <StyledDescription>{pet.dob}</StyledDescription>
      <StyledDescription>{pet.client_email}</StyledDescription>
      <StyledButtonContainer>
        <Button>VIEW LOG</Button>
        <Button
          onClick={async () => {
            {
              await deletePets(pet.id);
              window.location.reload();
            }
          }}
          inverted
        >
          DELETE
        </Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default PetsContainer;
