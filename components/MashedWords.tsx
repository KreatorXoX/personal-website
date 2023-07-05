import React, { useCallback, useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let iterations = -30;
type Props = { role?: string };

const MashedWords = ({ role }: Props) => {
  const [originalText, setOriginalText] = useState<string>(`${role}`);
  const [mashedWords, setMashedWords] = useState<string>("");
  const mashWords = useCallback(
    (text: string): string => {
      return text
        .split("")
        .map((letter, idx) => {
          if (idx < iterations) {
            return originalText[idx];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    },
    [originalText]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      iterations += 1;
      setMashedWords(mashWords(originalText));
      if (iterations >= originalText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [mashWords, originalText]);
  return (
    <h2 className="font-mono text-sm bg-red-800 sm:bg-inherit sm:text-base md:text-2xl uppercase tracking-[8px] ml-[8px] text-slate-400 py-3">
      {mashedWords}
    </h2>
  );
};

export default MashedWords;
