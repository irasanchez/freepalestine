import { Heading, ActionButton } from "./UI"
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export default function ActionCard({ openModal, action }: any) {
    const { label, icon, id, actionOptions, spheres } = action;
    return <div className="card card-normal card-bordered bg-gray-100 w-full my-2 ">
        <div className="flex justify-between m-2 flex-wrap">
            {/* action completed? */}
            <div className="w-full flex justify-center items-center">
                <span className=" text-center text-5xl ">
                    {icon}
                </span>
            </div>
            {/* action label */}
            <Heading>
                <span className="block">
                    {label}
                </span>
            </Heading>
        </div>
        {/* action content */}
        <div className="card-content">
        </div>
        {/* action choices */}
        <div
            className="m-2 text-accent card-actions flex flex-wrap">
            {actionOptions.map((option: any) => {
                let icon = null
                let key = `${id}--${option.type}`
                if (option.type === "Call") {
                    icon = <PhoneIcon
                        className='h-4 w-4 inline-block mr-2' />
                    return <ActionButton
                        handleClick={() => openModal(action)}
                        key={key}
                    >
                        {icon} <span>{option.type}</span>

                    </ActionButton>
                }
                if (option.type === "Write") {
                    icon = <EnvelopeIcon
                        className='h-4 w-4 inline-block mr-2' />
                    return <ActionButton
                        key=
                        {key}
                        handleClick={() => openModal(action)}>
                        {icon} <span>{option.type}</span>
                    </ActionButton>
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
}
