const express = require('express');
const PORT = 8080;
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

// Create a fake database
const combos =  { 
  1: {
    main: 'Cheese Burger',
    side: 'Fries',
    drink: 'Coke',
    id: 1
  },
  2: {
    main: 'Wings',
    side: 'Salad',
    drink: 'Root Beer',
    id: 2
  },
  3: {
    main: 'Chicken Sandwich',
    side: 'Cheese Fries',
    drink: 'Diet Coke',
    id: 3 
  }
} 


// Restful
// Browse!
app.get('/', (req, res) => {
  const templateVars = {
    combos
  }
  res.render('index', templateVars)
})

// Read (See a single Combo)
app.get('/combos/:id', (req, res) => {
  const userInput = req.params.id;
  if(combos[userInput]) {
    const combo = combos[userInput]
    const templateVars = {
      combo
    }
    return res.render('single', templateVars)  
  }
  res.send("Wrong combo number")
})

app.post('/combos', (req, res) => {
  const newItems = req.body;
  const newComboNumber = Object.keys(combos).length + 1
  combos[newComboNumber] = { newItems, id: newComboNumber };
  res.redirect('/')
})

app.post('/combos/edit/:id', (req, res) => {
  const comboNumber = req.params.id;
  const newCombo = req.body;
  combos[comboNumber] = newCombo;
  res.redirect('/') 
})

app.post('/combos/delete/:id', (req, res) => {
  const userInput = req.params.id;
  delete combos[userInput];
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log('Someone has connected');
})