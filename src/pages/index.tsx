
import Selection from "../components/Selection"

export default function Home() {

  
  return (
    <div className={`flex flex-col justify-center items-center h-screen
    bg-gradient-to-tr from-blue-900 to-red-300 `}>
      <Selection checked={true} />
      <Selection checked={false} />
    </div>

  )
}
