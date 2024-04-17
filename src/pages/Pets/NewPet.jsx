import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPets } from "../../api/pets";
import { ROUTES } from "../../routes/consts";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const NewHotel = () => {
  const [name, setName] = useState("NewPet");
  const [dob, setDob] = useState(1712707200000);
  const [client_email, setClient_email] = useState("mock@email.com");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const NewPet = { name, dob, client_email };
      await createPets(NewPet);
      navigate(ROUTES.PETS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        id="dob"
        type="number"
        label="DOB...?"
        placeholder="..."
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <Input
        id="client_email"
        type="email"
        label="Email"
        placeholder="..."
        value={client_email}
        onChange={(e) => setClient_email(e.target.value)}
        required
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewHotel;
