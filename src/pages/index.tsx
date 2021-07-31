import ListItems from "../components/ListItems"

export default function Home() {

  function changeStatus() {
    console.log('Teste')
  }

  return (
    <div className={`flex flex-col justify-center items-center h-screen 
                    bg-gradient-to-tr from-blue-900 to-red-300 `}>
      <ListItems
        changeStatus={changeStatus}
        completed={false}
        value={'Lista de itens 01'} />
      <ListItems
        changeStatus={changeStatus}
        completed={true}
        value={'Lista de itens 02'} />
    </div>

  )
}
