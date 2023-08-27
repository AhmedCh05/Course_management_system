const {sign,verify, JsonWebTokenError} = require("jsonwebtoken");

const createTokens = (user)=>{
    const accessToken = sign({email:user.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"12h"});
    return accessToken;
}

module.exports = {createTokens};