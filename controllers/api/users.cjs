const User = require('../../models/user.cjs')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports = {
    create,
    login,
    checkToken
}


async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error("User not found")
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()

        res.json(createJWT(user))
    } catch (err) {
        console.log(err)
        res.status(400).json('Bad credentials')
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log(req.user)
    // sending the expiration back to the 
    res.json(req.exp)
}


/*-- Helper Functions --*/
function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}
