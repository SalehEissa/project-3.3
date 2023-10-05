const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users.cjs')
const ensureLoggedIn = require('../../config/ensureLoggedIn.cjs')
// /api/users
// appends this path to the app.use path in the
router.post("/", usersCtrl.create)

router.post("/login", usersCtrl.login)

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)


module.exports = router
