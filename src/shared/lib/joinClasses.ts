export const joinClasses = (
  ...classes: Array<string | false | undefined | null>
) => classes.filter(Boolean).join(' ')
