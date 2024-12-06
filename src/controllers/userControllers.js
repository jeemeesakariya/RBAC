const admin = (req,res)=>{
    res.status(200).json({ message: "welcom to admin" });
}

// manager controllers
const manager = (req,res)=>{
    res.status(200).json({ message: "welcom to manager" });
}

// user controllers
const user = (req,res)=>{
    res.status(200).json({ message: "welcom to user" });
}

module.exports = {
    admin,
    manager,
    user,
}