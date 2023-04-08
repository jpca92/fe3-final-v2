import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 
  const {state} = useContextGlobal();



  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

        {state.map( (user) => {
          return(
            <Card key={user.id} name={user.name} username={user.username} id={user.id} show={true}/>
          )
        })}

      </div>
    </main>
  )
}

export default Home