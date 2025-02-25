import './styles/App.css'
import TaskList from './components/tasklist.tsx'


function App() {

  return (
    <>
      <div className={'header'}>
        <h1 className={'heading'}>To Do list</h1>
      </div>
      <TaskList />
    </>
  )
}

export default App
