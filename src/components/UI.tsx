// imports
import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
// types and interfaces
interface Children {
  children: React.ReactNode;
}
// functions
function Heading({ children }: Children) {
  return (<h3 className="card-title text-2xl p-4">
    {children}
  </h3>)
}
function Subtitle({ children }: Children) {
  return <h2 className="text-4xl text-center font-bold">{children}</h2>
}
function Title({ children, emoji }: {children: Children, emoji: string}) {
  // the PS is an emoji. it does not show in VSCode but works in the browser.
  return (
    // @ts-ignore
    <h1 className="my-8 text-center text-6xl">{emoji ? <><span>{emoji}</span><br /></> : null}{children}</h1>
  )
}
function ActionButton({ children, key, handleClick }: any) {
  return (
    <button
      key={key}
      onClick={handleClick}
      className="btn btn-accent flex-nowrap flex justify-between items-center text-white"
    >{children}</button>
  )
}
type AutocompleteProps = {
  items: string[];
  value: string;
  onChange(val: string): void;
  selectedSpheres: string[];
};
//we are using dropdown, input and menu component from daisyui
const Autocomplete = memo(PreMemoAutocomplete)
// ^ ts gets mad if I don't define it before exporting it
function PreMemoAutocomplete(props: AutocompleteProps) {
  const { items, value, onChange, selectedSpheres } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  return (
    <div
      // use classnames here to easily toggle dropdown open 
      className={classNames({
        "dropdown w-full": true,
        "dropdown-open": open,
        "z-50": true,
      })}
      ref={ref}
    >
      <input
        type="text"
        className="input input-bordered w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="I am a..."
        tabIndex={0}
      />

      <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md shadow-black shadow-md w-full">
        <ul
          className="menu menu-compact "
          // use ref to calculate the width of parent
          style={{ width: ref.current?.clientWidth }}
        >
          {items?.map((item, index) => {
            let styles = `border-b border-b-base-content/10 w-full`
            return (
              <li
                key={index}
                tabIndex={index + 1}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
                className={styles}
              >
                <button>{item} {selectedSpheres.includes(item) && <span>✅</span>}</button>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
};
//exports
export {
  Heading,
  Subtitle,
  Title,
  ActionButton,
  Autocomplete
}