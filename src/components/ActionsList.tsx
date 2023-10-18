import ActionCard from "./ActionCard"

export default function ActionsList({ actions, openModal }: any) {
    return (
        <section className="flex flex-wrap mt-32 mx-8 ">
            {actions.map((action: any) => {
                return (
                    // action card
                    < ActionCard {...{ openModal, action }} />
                )
            })}
        </section >
    )
}

