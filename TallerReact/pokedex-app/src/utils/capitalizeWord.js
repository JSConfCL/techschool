export const capitalizeWord = (word) => {
  const firstLetterUpperCase = word.charAt(0).toUpperCase();
  return `${firstLetterUpperCase}${word.slice(1)}`;
};
