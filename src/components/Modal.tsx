import { ACTION_TYPES } from "../data";
import { ActionButton, Title, Content } from "./UI";
export const Modal = ({
  selectedAction,
  selectedActionOption,
}: {
  selectedAction: any;
  selectedActionOption: string;
}) => {

  return (
    <dialog id="action_details" className="prose modal">
      <div className="modal-box">
        {/* {JSON.stringify(actionOption)} */}
        <PetitionActionWalkthrough
          selectedAction={selectedAction}
        />
        <CallActionWalkthrough
          selectedAction={selectedAction}
          selectedActionOption={selectedActionOption}
        />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

function PetitionActionWalkthrough({
  selectedAction,
}: {
  selectedAction: any;
}) {
  let { label } = selectedAction;
  if (selectedAction.label.includes("Petition")) {
    return (<section>
      <Title emoji="📝">{label}</Title>
      <ActionWalkthroughReminder reminder={selectedAction.reminder} />
      <div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-base-200">
        <div className="text-xl font-medium collapse-title">
          Read the petition
        </div>
        <div className="collapse-content">
          <Content content={selectedAction.suggestion} />
        </div>

      </div>
      <div className="w-full my-4 join join-vertical">
        {selectedAction.actionOptions && selectedAction.actionOptions.map((option: any) => {
          return <ActionButton {...option}>{option.buttonLabel}</ActionButton>
        })}
      </div>
    </section>)
  } else {
    return null
  }
}

function CallActionWalkthrough({
  selectedActionOption,
  selectedAction,
}: {
  selectedActionOption: string;
  selectedAction: any;
}) {
  let { label } = selectedAction;
  if (selectedActionOption === ACTION_TYPES.call || selectedActionOption === ACTION_TYPES.ttyTtd) {
    return (
      <section>
        <Title emoji="🏛️">{label}</Title>
        <ActionWalkthroughReminder reminder={selectedAction.reminder} />
        <ActionWalkthroughScript script={selectedAction.suggestion} />
        <a
          className="w-full text-2xl font-bold text-black animate-pulse btn btn-accent"
          href={"tel:" + selectedAction.phone}
        >
          📱Call Now
        </a>
      </section>
    );
  } else {
    return null;
  }
}

function ActionWalkthroughReminder({ reminder }: { reminder: string | null }) {
  if ({ reminder }) {
    return <p>{reminder}</p>;
  } else {
    return null;
  }
}
function ActionWalkthroughScript({ script }: { script: string }) {
  if ({ script }) {
    return (<section className="mb-8">
      <div className="chat chat-start">
        <div className="w-5/6 bg-neutral-200 chat-bubble">
          <Content content={script} />
        </div>
        <div className="chat-image avatar">
          <div className="flex items-center justify-center w-10 rounded-full bg-neutral-200">
            <div className="flex items-center justify-center h-10">
              🧑🏽
            </div>
          </div>
        </div>
      </div>
    </section>)
  } else {
    return null;
  }
}

