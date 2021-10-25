/* eslint-disable no-console */
import express from "express"
import cors from "cors"

const app = express()

const fakeDb = [
  { name: "Miguel", id: "1" },
  { name: "Gabriel", id: "2" },
  { name: "Jean", id: "3" },
  { name: "João", id: "4" },
  { name: "André", id: "5" },
]

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => res.json({ message: "Hello World" }))

app.get("/users/:id", (req, res) =>
  res.json(fakeDb.find(user => user.id === req.params.id)),
)

app.listen(3333, () => console.log("Started at 3333"))
