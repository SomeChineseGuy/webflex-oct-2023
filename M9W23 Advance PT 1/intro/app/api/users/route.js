import {NextResponse} from 'next/server'

// import my DB

export async function POST(req) {
  
  // const {data} = await req.json();
  console.log(req);
  // Do some db stuff
  return NextResponse.json({message: "Did you get this "}, {status: 200})
}


export async function GET(req) {
  
  // const {data} = await req.json();
  console.log(req);
  // Do some db stuff
  return NextResponse.json({message: "GET REQUEST!"}, {status: 200})
}

export async function PUT(req) {
  
  // const {data} = await req.json();
  console.log(req);
  // Do some db stuff
  return NextResponse.json({message: "PUT REQUEST!"}, {status: 200})
}




/*
  app.post('api/user', (req, res) => {
    const data = req.body.data
  })

*/