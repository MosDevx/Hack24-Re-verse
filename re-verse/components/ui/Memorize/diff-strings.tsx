import { diffWords } from 'diff';

const highlightDifferences = (correctVerse: string, userInput: string) => {
  const differences = diffWords( userInput,correctVerse, { ignoreWhitespace: true, ignoreCase: true,  });

  return differences.map((part: { added?: boolean; removed?: boolean; value: string }, index: number) => {
    // Words that are in the user input but incorrect (removed from correct verse)
    if (part.removed) {
      return (
        <span key={index} style={{ color: 'red', textDecoration: 'line-through' }}>
          {part.value}
        </span>
      );
    }

    // Words that are missing in the user input but exist in the correct verse (added)
    if (part.added) {
      return (
        <span key={index} style={{ color: 'green', fontWeight: 'bold' }}>
          {part.value}
        </span>
      );
    }

    // Words that are correct (no change)
    return <span key={index} style={{ color: 'black' }}>{part.value}</span>;
  });
};

export default function CompareStrings({
  correctVerse,
  userInput,
}: {
  correctVerse: string;
  userInput: string;
}) {
  return <div>{highlightDifferences(correctVerse, userInput)}</div>;
}
