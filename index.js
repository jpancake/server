const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

// clientID 1046189866209-l5k3mcoh5jhansvapfv1i6d9dtbr2lhu.apps.googleusercontent.com
// clientSecret b4PdmMIs2IxDYDSkraT9rwER
passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5000

app.listen(PORT)
