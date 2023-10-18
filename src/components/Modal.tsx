import { ActionButton, Subtitle, Title } from "./UI";
export const Modal = ({ selectedAction, selectedActionOption }: { selectedAction: any; selectedActionOption: string; }) => {
  { /* Modal */ }
  { /* Open the modal using document.getElementById('ID').showModal() method */ }
  let { label } = selectedAction;


  return (
    (<dialog id="action_details" className="modal prose">
      <div className="modal-box">
        {/* {JSON.stringify(selectedAction)} */}
        <Title emoji="🏛️">{label}</Title>
        {selectedActionOption === "Call" && (
          <section>
            {selectedAction.reminder ? <p>{selectedAction.reminder}</p> : null}
            {(selectedAction.suggestion) ? (
              <section className="mb-8">
                <div className="chat chat-end">
                  <p className="chat-bubble">{selectedAction.suggestion.map((sentence: string) => {
                    return <><span>{sentence}</span><br /><br /></>;
                  })}</p>
                  <div className="chat-image avatar ">
                    <div className="w-10 rounded-full bg-neutral-200 flex items-center justify-center">
                      <div className="h-10 flex items-center justify-center">🧑🏽</div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            <a className="btn btn-accent text-black font-bold w-full text-2xl animate-pulse" href={"tel:" + selectedAction.phone}> 📱Call Now</a>
          </section>
        )}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>)
  );
};
