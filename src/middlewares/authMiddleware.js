const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization

    try {
        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
            if (!token) return res.json({ message: "token is require" });
        } else {
            if (!token) return res.json({ message: "token is require" });
        }
    } catch (err) {
        return res.json({ message: `somthing went wrong ${err}`});
    }
    
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET,)
        req.user = decode;
        next();
    } catch (err) {
        return res.json({message: `token is invalide`})
    }

}

module.exports={verifyToken}