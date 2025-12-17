const validateUser = (data) => {
    if(!data){
        throw new Error("User data is required")
    }

    const {email, password} = data

    if(!email || typeof email !== "string" ){
        throw new Error("Email is invalid")
    }

    if(!email.includes('@')){
        throw new Error("Email must contain @")
    }

    if(password.length < 6){
        throw new Error("Password length must be at least 6 characters")
    }

    return true
}

export default validateUser