import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import './App.css'

function App() {
  const ACTIONS = [{
    label: "Contact the White House",
    id: 1,
    spheres: ["citizen"],
    actionOptions: [
      {
        type: "Call",
        call: "202-456-1111",

        alternatives: { ttyTtd: "202-456-6213" },

      },
      {
        type: "Write",
        call: "202-456-6213"
      }
    ]
  }]

  const [query, setQuery] = useState("")

  // @ts-ignore
  const openModal = () => document.getElementById('action_details').showModal()

  return (
    <div className="prose">
      <h1 className="my-8"><span className="text-green-700">Free</span> <span className="text-red-700">Palestine</span></h1>
      <h2 className="text-4xl text-center font-bold">Every American has a role to play.<br /><br />Find yours. 👇</h2>
      {/* search */}
      <section className="flex justify-center items-center mt-16">

        <input
          type="text"
          value={query}
          placeholder="🔎 Search here..."
          className="input input-bordered input-accent border-4"
        />
      </section>
      {/* action cards */}
      <section className="flex flex-wrap mt-32 mx-8">
        {ACTIONS.map(({ label, actionOptions, spheres, id }) => {
          return (
            // action card
            <div className="card card-normal card-bordered bg-gray-100 ">
              <div className="flex justify-between m-2">
                {/* action completeted? */}
                <input
                  type="checkbox"
                  checked={false}
                  className="checkbox border-4 border-secondary"
                />
                {/* action label */}
                <h3 className="card-title text-2xl p-4">
                  {label}
                </h3>
              </div>
              {/* action content */}
              <div className="card-content">
              </div>
              {/* action choices */}
              <div
                className="m-2 text-accent card-actions flex flex-wrap">
                {actionOptions.map((option) => {
                  let icon = null
                  const key = `${id}--${option.type}`
                  if (option.type === "Call") {
                    icon = <PhoneIcon
                      className='h-4 w-4 inline-block mr-2'
                    />
                    return <button
                      key={key}

                      onClick={openModal}
                      className=" btn btn-accent flex-nowrap flex justify-between items-center"
                    >
                      {icon} <span>{option.type}</span>
                    </button>
                  }
                  if (option.type === "Write") {
                    icon = <EnvelopeIcon
                      className='h-4 w-4 inline-block mr-2'
                    />
                    return <button
                      key={key}

                      onClick={openModal}
                      className=" btn btn-accent flex-nowrap flex justify-between items-center"
                    >
                      {icon} <span>{option.type}</span>
                    </button>
                  }
                })}
              </div>
              <div className="flex justify-end mb-4 mx-2 text-xs">
                {spheres.map((sphere: string) => {
                  return <span key={`${id}--${sphere}`}
                    className="inline-block badge-neutral rounded-full p-2 mt-4"
                  >{sphere}</span>
                })}
              </div>
            </div>
          )
        })}
      </section>
      <Modal />
    </div>

  )
}

export default App

const Modal = () => {
  {/* Modal */ }
  {/* Open the modal using document.getElementById('ID').showModal() method */ }
  return (


    <dialog id="action_details" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
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