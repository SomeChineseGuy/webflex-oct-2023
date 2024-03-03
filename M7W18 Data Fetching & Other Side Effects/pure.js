
// Pure Function
const sum = (num1, num2) => {
  return num1 + num2;
}

const sayHello = () => {
  return 'Hello, how are you?'
}

let num = 10

// Impure Function - this will have a side effect
const increaseNum = () => {
  num += 1;
  return num;
}

const increaseNum2 = (num) => {
  console.log('num');
  num += 1
  return num
}

// Any functions that fetches data
// Any functions that interact with WS

// Pure React Function
const user = (props) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.value}</p>
      <p>{props.user.id}</p>     
    </div>
  )
}

// impure function
const newUser = () => {
  const [name, setname ] = useState("")
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  ) 
}