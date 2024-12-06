const authorizeRole = (...alluser) => {
    return (req, res,next) => {
        if (!alluser.includes(req.user.role)) {
            return res.status(300).json({message:"you can not accses this role"})
        }
        next()
    }
}

module.exports={authorizeRole}