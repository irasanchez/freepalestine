import ActionCard from "./ActionCardComponents"

export default function ActionsList({ actions, openModal }: any) {
    return (
        <section className="flex flex-wrap m-0 mt-32">
            {actions.map((action: any) => {
                return (
                    // action card
                    < ActionCard key={action.label} {...{ openModal, action }} />
                )
            })}
        </section >
    )
}

