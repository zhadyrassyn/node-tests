module.exports.add = (a, b) => {
  return a + b;
};

module.exports.square = (x) => {
  return x * x;
};

module.exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000)
}