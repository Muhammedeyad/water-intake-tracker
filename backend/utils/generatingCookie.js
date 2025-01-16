const jwt = require("jsonwebtoken")

const generatingCookie = async (userId, res) => {
    try {
        console.log(userId);
        
        const token = await jwt.sign({ userId }, process.env.SECRET_KEY, {
            expiresIn: '15d'
        })
        if (!token) return res.status(400).json({ error: "token was not created succesfully" })
    
            const cookiel = res.cookie("auth", token, {
                maxAge: 15 * 24 * 60 * 60 * 1000,
                httyOnly: true,
                sameSite: "lax", // CSRF attacks cross-site request forgery attacks
            })
        
    } catch (err) {
        console.log("error caused by generating cookie", err.message);
    }
}

module.exports = { generatingCookie }