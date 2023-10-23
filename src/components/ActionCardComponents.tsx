import { Heading, ActionButton, Emoji, Tag } from "./UI";
import {} from "../data";

// sub-components are below
export default function ActionCard({ openModal, action }: {openModal: any, action: any}) {
  const { label, icon, id, actionOptions, spheres } = action;
  return (
    <div className="my-2 w-full bg-gray-100 card card-normal card-bordered">
      <div className="flex flex-wrap justify-between m-2">
        <div className="flex justify-center items-center w-full">
          <ActionIcon>{icon}</ActionIcon>
        </div>
        <ActionCardLabel label={label} />
      </div>
      <ActionCardContent action={action} />
      <ActionOptions
        action={action}
        id={id}
        actionOptions={actionOptions}
        openModal={openModal}
      />
      <hr />
      <div className="flex justify-end mx-2 my-4 text-xs">
        {spheres.map((sphere: string) => {
          return <Tag key={`${id}--${sphere}`}>{sphere}</Tag>;
        })}
      </div>
    </div>
  );
}

function ActionIcon({ children }: { children: string }) {
  return <span className="text-5xl text-center">{children}</span>;
}

function ActionCardLabel({ label }: { label: string }) {
  return (
    <Heading>
      <span className="block">{label}</span>
    </Heading>
  );
}

function ActionCardContent({ action }: { action: any }) {
  return (
    <div className="p-2 card-content">
      <h4>Why?</h4>
      <p>{action?.reason}</p>
      <h4>Description</h4>
      <p>{action?.description}</p>
    </div>
  );
}

function ActionOptions({
  actionOptions,
  id,
  openModal,
  action
}: {
  actionOptions: any;
  id: string;
  openModal: any;
  action: any;
}) {
  return (
    <div className="flex flex-wrap m-2 text-accent card-actions">
      {actionOptions.map((option: any) => {
        let icon = null;
        let key = `${id}--${option.type}`;
        if (option.type === "Call") {
          icon = <Emoji>📱</Emoji>;
          return (
            <ActionButton
              handleClick={() => openModal(action, option.type)}
              key={key}
            >
              {icon} <span>{option.type}</span>
            </ActionButton>
          );
        }
        if (option.type === "Write") {
          icon = <Emoji>📧</Emoji>;
          return (
            <ActionButton
              key={key}
              handleClick={() => openModal(action, option.type)}
            >
              {icon} <span>{option.type}</span>
            </ActionButton>
          );
        }
      })}
    </div>
  );
}
