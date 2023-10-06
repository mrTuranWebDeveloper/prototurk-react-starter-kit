import './style.scss'
import { createElement } from "react"





function App() {

  const todos = ['todo1', 'todo2', 'todo3']
  // const h1 = createElement('h1', null, 'mrTuranDeveloper')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main'
  // }, h1, ul)

  const searchFunction = () => {
    alert('HELLO')
  }

  return (
   <main id='main' className='test'>
    <h1 tabIndex="3"style={{color:'red', backgroundColor:'yellow'}}>mrTuranDeveloper</h1>
    <label htmlFor="search" tabIndex="2" onClick={searchFunction}>ARAMA</label>
    <input type="text" id='search' tabIndex="1" />
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
        </li>
      ))}
    </ul>
   </main>
  );
}

export default App;
