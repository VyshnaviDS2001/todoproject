const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000;
app.use(cors({
  origin: '*'
}));
app.use(express.json());
let todo=[
    {
      content: 'first content',
      completed: false
    },
    {
      content: 'second content',
      completed: false
    },
  ];
  
  app.get('/', (req, res) => {
  res.send(todo)
})
app.post('/', (req, res) => {
    console.log(req.body);
    todo.push(req.body);
    res.send(todo)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

