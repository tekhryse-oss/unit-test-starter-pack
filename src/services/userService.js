const validateUser = require("../utils/validateUser")

async function createUser(userRepo, data) {
  // 1. Validate input
  validateUser(data);

  // 2. Check if user exists
  const existing = await userRepo.findByEmail(data.email);
  if (existing) {
    throw new Error("User already exists");
  }

  // 3. Save new user
  const newUser = await userRepo.save({
    email: data.email,
    password: data.password,
    createdAt: new Date(),
  });

  return newUser;
}


const findUserByEmail = async (userRepo, email) => {
    if(!email){
        throw new Error("Email is required")
    }
    

    return await userRepo.findByEmail(email)
}

module.exports = {
    createUser,
    findUserByEmail
}