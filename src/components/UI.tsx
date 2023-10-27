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
function Heading({ children, className }: any) {
  let classes = "p-4 text-2xl card-title w-full flex items-center justify-center text-center"
  if (className){
    classes += " " + className
  }
  return <h3 className={classes}>{children}</h3>;
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
function ActionButton({ children, keyName, handleClick, url, info, sms }: any) {
  let className = "flex items-center justify-between mb-1 font-bold text-black flex-nowrap btn"
  if (url || sms) {

    if (!info) {
      className += " btn-accent animate-pulse"
    } else {
      className += " btn-neutral text-white"
    }
    return (
      <a
        className={className}
        href={url}
        target="_blank"
      >
        {children}
      </a>
    );
  } else {

    if (!info) {
      className += " btn-accent"
    }
    return (
      <button
        key={keyName}
        onClick={handleClick}
        className={className}
      >
        {children}
      </button>
    );
  }
}

function Content({ content }: { content: string }) {
  return <Markdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>{content}</Markdown>;
}

function Tag({ children }: Children) {
  return (
    <span className="inline-block px-3 py-1 mb-1 mr-1 font-bold rounded-full badge-primary min-w-fit">
      {children}
    </span>
  );
}
//exports
export { Tag, Heading, Subtitle, Title, ActionButton, Content, Emoji };
