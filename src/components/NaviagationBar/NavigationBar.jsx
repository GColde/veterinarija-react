import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../../public/paw.svg";
import { navigationBarLinks } from "../../routes/consts";
import styled from "styled-components";
import ButtonWoBorder from "../Button/ButtonWoBorder";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const StyledLogoContainer = styled.div`
  width: 80px;
`;

const StyledImg = styled.img`
  filter: brightness(8);
  width: 100%;
  height: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavigationBar = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <StyledImg src={Logo} alt="Logo" />
      </StyledLogoContainer>

      <StyledNav>
        {navigationBarLinks.map((link) => (
          <ButtonWoBorder key={link.path}>
            <Link key={link.path} to={link.path}>
              {link.title}
            </Link>
          </ButtonWoBorder>
        ))}
      </StyledNav>
      <Link key={"/"} to={"/"}>
        <Button>Log out</Button>
      </Link>
    </StyledHeader>
  );
};

export default NavigationBar;
