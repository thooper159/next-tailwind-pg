import Head from 'next/head'
import NavBar from '../components/navbar'


interface Data {
    name: string
    userName: string
    profilePic: string
  }

const data = {
    name: 'John Doe',
    userName: 'johndoe',
    profilePic: 'https://i.imgur.com/Nm3Ruvl.jpeg' 
  }


export default () => {
return (
  <>
  <Head>
    <title>User</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main>
    <NavBar />
    <div>
        <h1>My page</h1>
        <p>This is {data.userName}'s page</p>
    </div>
  </main>
</>
    
    
)

}