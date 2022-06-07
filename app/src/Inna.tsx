const get = async () => {
 const response = await fetch('http://api.localhost:5000/')
 const text = await response.json()
 return text
}

export default function Inna() {
 get().then((data) => console.log(data))
 return (
  <div>
   <h1>Hello Inna</h1>
  </div>
 )
}
