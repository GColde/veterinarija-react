import { useEffect, useState } from "react";
import { fetchPets } from "../../api/pets";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";
import styled from "styled-components";
import PetsContainer from "../../components/Containers/PetsContainer";
import Button from "../../components/Button/Button";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #101215;
  color: white;
`;

const AdditionalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 80%;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const [petsResponse] = await Promise.all([fetchPets()]);
        await setPets(petsResponse);
        console.log(petsResponse);
      } catch (error) {
        console.error("Error fetching orders and hotels:", error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <MainContainer>
      <AdditionalButtons>
        <h1>Pets List</h1>
        <Button onClick={() => navigate(ROUTES.NEW_PET)}>Add Pet</Button>
      </AdditionalButtons>
      <StyledDiv>
        {pets.map((pets) => (
          <div key={pets.id}>
            <PetsContainer pet={pets}></PetsContainer>
          </div>
        ))}
      </StyledDiv>
    </MainContainer>
  );
};

export default PetsList;
