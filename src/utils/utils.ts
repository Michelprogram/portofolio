export const computeDateFromBeginning = (date: Date) => {
  return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
};
