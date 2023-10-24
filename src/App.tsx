//libraries
import { useEffect, useState } from 'react'
//my components
import { Title, Subtitle, Heading } from './components/UI'
import ActionsList from "./components/ActionsList.tsx"
import SelectSpheres from "./components/SelectSpheres.tsx"
import { Modal } from './components/Modal.tsx'
//data
import { ACTIONS } from './data/index.tsx'
//styles
import './App.css'


function App() {
  const [selectedAction, setSelectedAction] = useState<any>({})
  const [selectedActionOption, setSelectedActionOption] = useState<string>("")
  const [selectedSpheres, setSelectedSpheres] = useState<string[]>([])
  const [filteredActions, setFilteredActions] = useState<any[]>(ACTIONS)


  const filterActions = () => {
    if (selectedSpheres.length === 0) {
      setFilteredActions(ACTIONS);
    } else {
      // include ACTIONS that have the selected spheres
      const newFilteredActions = ACTIONS.map((action) => {
        return {
          ...action,
          //@ts-ignore
          actionOptions: action.actionOptions.map((option: string) => {
            return option.toLowerCase();
          })
        }
      }).filter((action: any) => {
        // return true if the action includes ANY of the selected spheres
        return action.spheres.some((sphere: string) => {
          //@ts-ignore
          return selectedSpheres.includes(sphere.toLowerCase())
        })
      })
      //@ts-ignore
      setFilteredActions(newFilteredActions);
    }
  }

  const openModal = (action: any, type: string) => {
    setSelectedAction(action);
    setSelectedActionOption(type);
    //@ts-ignore
    document.getElementById('action_details').showModal()
  }

  useEffect(() => {
    filterActions();
  }, [selectedSpheres])

  return (<>
    <div className="px-8 pt-16 mx-auto prose" >
      <Title emoji="🇵🇸 ">
        {/* @ts-ignore */}
        <>
          <span className="text-green-700">Free</span> <span className="text-red-700">Palestine</span>
        </>
      </Title>
      <Subtitle>
        <span className="underline">Every</span> American has a role to play.
      </Subtitle>
      <Heading>
        <div className="w-full text-center">
          Find yours below.
        </div>
      </Heading>
      <div className="mt-16 w-full text-3xl text-center animate-bounce">
        👇
      </div>
      <section className="mt-16">
        <SelectSpheres/>
      </section>

      <ActionsList actions={filteredActions} openModal={openModal} />
      <Modal selectedAction={selectedAction} selectedActionOption={selectedActionOption} />

    </div >
    <footer className="p-4 py-4 mx-auto mt-16 bg-neutral-100 prose">
      <p className="text-center">Made with ❤️ by <a className="link" href="https://mastodon.social/@floppade" target="_blank" rel="noopener noreferrer">@floppade</a>.</p>
      <p className="text-center"><a className="link" href="https://codeberg.org/floppade/freepalestine/issues" target="_blank">Feedback</a> | <a className="link" href="https://codeberg.org/floppade/freepalestine">Code</a> | Support </p>
      <p>
        This app does not collect any data.
      </p>

    </footer>
  </>)
}

export default App




