import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./redux";
import { addTasks ,ChangeTasks,deleteTasks, importantTasks } from "./redux/reducers/users";
import "./sass/style.scss"

function App() {
  const dispath = useDispatch()
  const tasks = useSelector((store) => store.tasks.tasks)
  const tasksCount = useSelector((store) => store.tasks.tasksCount)
  const [todo, setTodo] = useState("")
  return (
    <section className="main">
      <div className="container">
        <div className="main__card">
          <h2 className="main__title-first">Заметки</h2>
          <h2 className="main__title">Задачи: {tasksCount}</h2>
        <ul className="main__ul">
          {tasks.map((item) => (
            <li className="main__ul-li" key={item.id} style={ {color:item.isImpotent ? "red" : ''}} >{item.task}
            <button className="main__btn" type="button" style={{display:item.isImpotent ? 'none' : ''}} onClick={() => dispath(deleteTasks(item.id))}>Удалить</button>
            <button className="main__btn" type="button" onClick={() => dispath(importantTasks(item.id))}>Important</button>
            <button className="main__btn" type="button" onClick={() => {dispath(ChangeTasks(item.id, setTodo(item.task)))}}>change</button>
            </li>
          ))}
        </ul>

        <form className="main__form" onSubmit={(e) => {
          e.preventDefault()
          dispath(addTasks(e.target[0].value))
          e.target[0].value = ''
        }}>
          <input className="main__inp" placeholder="Задачи" type="text" onChange={(e) => {setTodo(e.target.value)}} value={todo}/>
          <button className="main__btn-second" type="submit" >Добавить</button>

        </form> 
        </div>
        
      </div>
    </section>
  );
}

export default App;
