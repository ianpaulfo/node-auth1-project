module.exports = (req, res, next) => {

    if (req.session.loggedIn) {
        next()
    } else {
        this.res.status(401).json({error: "not logged in"})
    }
}