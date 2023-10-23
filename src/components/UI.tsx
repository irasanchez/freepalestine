// imports
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// types and interfaces
interface Children {
  children: React.ReactNode;
}
// functions
function Emoji({ children }: Children) {
  return <span aria-disabled={true}>{children}</span>;
}
function Heading({ children }: Children) {
  return <h3 className="p-4 text-2xl card-title">{children}</h3>;
}
function Subtitle({ children }: Children) {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
}
function Title(props: any) {
  const { children, emoji } = props;
  // the PS is an emoji. it does not show in VSCode but works in the browser.
  if (emoji) {
    return (
      <h1 className="my-8 text-6xl text-center">
        <span>{emoji}</span>
        <br />
        {children}
      </h1>
    );
  } else {
    <h1 className="my-8 text-6xl text-center">{children}</h1>;
  }
}
function ActionButton({ children, key, handleClick }: any) {
  return (
    <button
      key={key}
      onClick={handleClick}
      className="flex flex-nowrap justify-between items-center text-white btn btn-accent"
    >
      {children}
    </button>
  );
}

function Content({ content }: { content: string }) {
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}

function Tag({ children }: Children) {
  return (
    <span className="px-3 mr-1 font-bold rounded-full badge-primary">
      {children}
    </span>
  );
}
//exports
export { Tag, Heading, Subtitle, Title, ActionButton, Content, Emoji };
