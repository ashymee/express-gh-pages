import express from 'express'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Welcome')
})

const port = process.env.PORT || 5500
app.listen(port, () => console.log(`server is running on port: ${port}`))
