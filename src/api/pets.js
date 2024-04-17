export const fetchPets = async () => {
  const response = await fetch(
    "https://glittery-dull-snickerdoodle.glitch.me/v1/pets/"
  );
  return await response.json();
};

export const createPets = async (newPet) => {
  const response = await fetch(
    "https://glittery-dull-snickerdoodle.glitch.me/v1/pets/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPet),
    }
  );
  console.log(response);
  return await response.json();
};

export const deletePets = async (petId) => {
  const response = await fetch(
    `https://glittery-dull-snickerdoodle.glitch.me/v1/pets//${petId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  // console.log(response);
  return await response.json();
};
