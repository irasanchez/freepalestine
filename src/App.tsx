//libraries
import { useState } from 'react'
//my components
import { Title, Subtitle, Heading, Autocomplete } from './components/UI'
import ActionsList from "./components/ActionsList.tsx"
//data
import { ACTIONS, SPHERES } from './data'
//styles
import './App.css'


function App() {


  const [selectedAction, setSelectedAction] = useState({})
  const [query, setQuery] = useState("")

  const [selectedSpheres, setSelectedSpheres] = useState([])

  const openModal = (action: any) => {
    setSelectedAction(action);
    //@ts-ignore
    document.getElementById('action_details').showModal()
  }

  const toggleSelectedSphere = (sphere: string) => {
    // make a copy of spheres
    let spheres = [...selectedSpheres];
    // if sphere is in spheres, remove it. if not, add it.
    //@ts-ignore
    if (spheres.includes(sphere)) {
      setSelectedSpheres(spheres.filter((sphere: any) => sphere !== sphere))
    } else {
      //@ts-ignore
      setSelectedSpheres([...spheres, sphere])
    }


  }
  return (<>
    <div className="prose px-8">
      <Title>
        <>
          <span className="text-green-700">Free</span> <span className="text-red-700">Palestine</span>
        </>
      </Title>
      <Subtitle>
        <span className="underline">Every</span> American has a role to play.
      </Subtitle>
      <Heading>
        Select options below to identify your sphere of influence.
      </Heading>
      <div className="w-full text-center text-3xl animate-bounce">👇</div>

      <section className=" mt-16  ">
        <Autocomplete 
        selectedSpheres={selectedSpheres}
        value={query} 
        onChange={(sphere) => {
          setQuery(sphere);
          //@ts-ignore
          setSelectedSpheres(selectedSpheres.includes(sphere) ? selectedSpheres.filter((selectedSphere) => {
            return selectedSphere !== sphere
          }) : [...selectedSpheres, sphere])
        }} 
        items={SPHERES} />
        <p className="hidden md:block">Hold <span>Shift</span> while scrolling to go sideways.</p>
        {/* <div className="card flex w-full card-bordered flex-row flex-wrap h-48 ">
          {SPHERES.map((sphere: any) => {
            //@ts-ignore
            const styles = `m-2 rounded-full px-2 flex items-center text-center ${selectedSpheres.includes(sphere) ? "badge-primary" : "badge-secondary"}`
            return <button key={sphere} className={styles}
              onClick={() => toggleSelectedSphere(sphere)}>{sphere}</button>
          })}
        </div> */}
      </section>
      {/* action cards */}
      <ActionsList actions={ACTIONS} openModal={openModal} />
      <Modal selectedAction={selectedAction} />

    </div >
    <footer className="bg-neutral-100 py-4 mt-16 prose p-4">
      <p className="text-center">Made with ❤️ by <a className="link" href="https://mastodon.social/@floppade" target="_blank" rel="noopener noreferrer">@floppade</a>.</p>
      <p className="text-center">Codeberg</p>

    </footer>
  </>)
}

export default App


const Modal = ({ selectedAction }: any) => {
  {/* Modal */ }
  {/* Open the modal using document.getElementById('ID').showModal() method */ }
  let { label } = selectedAction;
  return (


    <dialog id="action_details" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{label}</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}


