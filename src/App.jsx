import './App.css'
import DialogBox from './components/DialogBox/DialogBox'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <label>user</label> <br/>
       <input type="text" className=' border-solid border-2 border-black '/>
       <DialogBox/>
    </div>
  )
}