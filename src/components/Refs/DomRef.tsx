import React, { useEffect, useRef } from "react";

export const DomRef = () => {
    // non null assertion if we add ! after null keyword
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
