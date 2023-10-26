// import './tailwind.css'
// import Button from './components/Button'
// import Tab from './components/Tab'
import { useState, useReducer } from 'react'
// import Test from './components/Test'
// import { forwardRef, useRef } from "react";

function reducer(state, action) {
  console.log(state, action);

}

function App() {

  const [state, dispatch] = useReducer(reducer, {
      todos: [],
      todo: ''
  });


  const submitHandle = e => {
    e.preventDefault()
    //setTodos([...todos, todo])
    //setTodo('')
  }
  
  const onChange = e => {
    //setTodo(e.target.value)
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }
  
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange}/>
        <button disabled={!state.todo} type='submit'>Ekle</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  )
}






// const Input = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" {...props} />;
//   console.log(forwardRef);
// });



//   const inputRef = useRef()
//   const focusInput = () => {

//   }

// function App() {

//   const inputRef = useRef()
//   const focusInput = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <>
//       <h1>useRef() - useForward()</h1>
//       <Input ref={inputRef} />
//       <button onClick={focusInput}>Focusla</button>
//     </>
//   )
// }

// function App() {

//   return (
//     <>
//       <h1>useRef()-useForward()</h1>
//       <input type="text" />
//       <button onClick={focusInput}>Fokusla</button>
//     </>
//   )

  // const [show, setShow] = useState(false)
  // return (
  //   <>
  //     <button onClick={()=> setShow(show => !show)}>
  //       {show ? 'Gizle' : 'Göster'}
  //     </button>
  //     {show && <Test />}
  //   </>
  // )
  // const todos = ['todo1', 'todo2', 'todo3']

  // const [activeTab, setActiveTab] = useState(1)
  // const h1 = createElement('h1', null, 'mrTuranDeveloper')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main'
  // }, h1, ul)

  // const searchFunction = () => {
  //   alert('HELLO')
  // }

  

//   return (
//    <>
    
//    <div style = {{padding: 20}}>
//     <button onClick={()=> setActiveTab(2)}>
//       Aktif Tabı Değiştir
//     </button>
//     <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
//       <Tab.Panel title="Profil">1. Tab</Tab.Panel>
//       <Tab.Panel title="Hakkında">2. Tab</Tab.Panel>
//       <Tab.Panel title="Ayarlar">3. Tab</Tab.Panel>
//     </Tab>
//    </div>


//     <div style={{padding: 20}}>
//     <Button text="Buton Örneği"/>
//     <Button text="Buton Örneği" variant="success"/>
//     <Button text="Buton Örneği" variant="danger"/>
//     <Button text="Buton Örneği" variant="warning"/>
//     </div>
//     <h1 tabIndex="3"style={{color:'red', backgroundColor:'yellow'}}>mrTuranDeveloper</h1>
//     <label htmlFor="search" tabIndex="2" onClick={searchFunction}>ARAMA</label>
//     <input type="text" id='search' tabIndex="1" />
//     <ul>
      
//       {todos.map((todo, index) => (
//         <li key={index}>
//           {todo}
//         </li>
//       ))}
//     </ul>
//    </>
//   );
// }

export default App;
