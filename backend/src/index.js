const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)




/**
 * METODOS HTTP:
 * 
 * GET: BUSCAR/LISTAR UMA INFORMAÇÃO NO BACKEND
 * POST: CRIA UMA INFORMAÇÃO NO BACKEND
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACKEND
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACKEND
 * 
 */


 /**
  * Tipos de parametros:
  * 
  * Query:Parametros nomeados enviados na rota após "?"(FILTROS,PAGINACAO)
  * Route Params: parametros utilizados para identificar recursos
  * Request Body: corpo  da requizicao, utilizado para criar ou alterar recursos
  * 
  * Driver: SELECT * FROM user
  * Query builder: table('users').select("*").where()
  * 
  */



app.listen(3333)