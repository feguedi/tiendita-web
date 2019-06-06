'use strict'
// Verify token
const verifyToken = (req, res, next) => {
    // get auth header value
    const bearerHeader = req.headers['authorization']

    // Check if bearerHeader is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1]
        // Set the token
        req.token = bearerToken
        
        console.log(`verifyToken: ${ req.token }`)
        
        // Next middleware
        next()
    } else {
        res.sendStatus(403).render('error', {
            codigo: 403,
            error: true
        })
    }
}

module.exports = verifyToken