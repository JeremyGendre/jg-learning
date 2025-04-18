import classNames from "classnames";
import { useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  classes
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  classes?: { content?: string, header?: string, container?: string };
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div 
      className={classNames(
        'w-full border rounded-lg overflow-hidden',
        classes?.container
      )}
    >
      <div
        className={classNames(
          'flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-150',
          classes?.header
        )}
        onClick={toggle}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div 
          className={classNames(
            'p-3 bg-white rounded-b-lg',
            classes?.content
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}