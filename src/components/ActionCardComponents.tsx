
import { Heading, ActionButton, Emoji, Tag } from "./UI";
import { ACTION_TYPES } from "../data";

// sub-components are below
export default function ActionCard({ openModal, action }: { openModal: any, action: any }) {
  const { label, icon, id, actionOptions, spheres } = action;
  return (
    <div className="w-full my-2 bg-gray-100 card card-normal card-bordered">
      <div className="flex flex-wrap justify-between m-2">
        <div className="flex items-center justify-center w-full">
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
      <ActionCardSpheres spheres={spheres} id={id} />
    </div>
  );
}

function ActionIcon({ children }: { children: string }) {
  return <span className="text-5xl text-center">{children}</span>;
}

function ActionCardLabel({ label }: { label: string }) {
  return (
    <Heading className="text-center">
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
      {actionOptions.filter((option: any) => option.type !== ACTION_TYPES.learn).map((option: any) => {
        let icon = null;
        let key = `${id}--${option.type}`;

        switch (option.type) {
          case ACTION_TYPES.call:
            icon = <Emoji>📱</Emoji>;
            break;
          case ACTION_TYPES.email:
            icon = <Emoji>📧</Emoji>;
            break;
          case ACTION_TYPES.share:
            icon = <Emoji>📢</Emoji>;
            break;
          case ACTION_TYPES.ttyTtd:
            icon = <Emoji>📱</Emoji>;
            break;
          case ACTION_TYPES.sms:
            icon = <Emoji>🗨️</Emoji>;
            break;
          default:
            icon = null
        }

        return (
          <ActionButton
            key={key}
            handleClick={() => openModal(action, option.type)}
          >
            {icon} <span>{option.type}</span>
          </ActionButton>
        );
      })}
    </div>
  );
}

function ActionCardSpheres({ spheres, id }: { spheres: any, id: any }) {
  return (
    <div className="flex flex-wrap mx-2 my-4 text-xs">
      {spheres.map((sphere: string) => {
        return <Tag key={`${id}--${sphere}`}>{sphere}</Tag>;
      })}
    </div>
  )
}