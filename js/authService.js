const users = [
  {
    id: 'admina',
    isAdmin: true,
    password: 'password',
  },
  {
    id: 'normalo',
    isAdmin: false,
    password: 'password',
  },
  {
    id: 'a',
    isAdmin: true,
    password: 'a',
  },
];

const isValidUserData = (username, password) => {
  const user = users.find((u) => u.id === username);
  if (user) {
    console.log(
      `${user.password === password ? 'Correct' : 'Wrong'} password entered.`
    );
    return user.password === password;
  }
  console.log(`User ${username} does not exist.`);
  return false;
};

export { isValidUserData };