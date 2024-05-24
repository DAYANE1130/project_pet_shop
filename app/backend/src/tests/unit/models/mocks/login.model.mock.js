const mockLoginResponse = {
  id: 7,
  first_name: 'Lua',
  last_name: 'Segundo',
  email: 'alana@yahoo.com.br',
  password: '$2b$10$B6RoZE2eDdTr7IKHmYkNAONjqCXauYD5/gMHbRo0gM/0AAWTEf9ze',
  created_at: '2024-04-11T23:12:04.000Z',
  updated_at: '2024-04-11T23:12:04.000Z'
};

const mockLoginCredentials = {
  email: "alana@yahoo.com.br",
  password: "Senha*46"
};


const mockErrorLoginCredentials = {
  email: "alana123@yahoo.com.br",
  password: "Senha*46"
};

const loginMocks = {
  mockLoginResponse,
  mockLoginCredentials,
  mockErrorLoginCredentials

};

module.exports = loginMocks;