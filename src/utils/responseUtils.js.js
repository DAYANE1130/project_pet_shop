const responseFormatedDono = async (array) => {
  const dataFormated = array.map((element) => {
    const { id, nome, email, telefone, rua, numero, cidade, estado, cep } = element;
    const personalData = { id, nome, email, telefone };
    const address = { rua, numero, cidade, estado, cep };
    return { ...personalData, address };
  });
  return dataFormated;
};

module.exports = { responseFormatedDono };