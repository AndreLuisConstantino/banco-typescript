import express from 'express'
import routes from './routes'

// const express = require('express')

//yarn dev:server para rodar o servidor

const app = express()

app.use(routes);

app.listen(3333)