//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const text = message.trim();

  if (text === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = text.endsWith("?");
  const hasLetters = /[a-zA-Z]/.test(text);
  const isShouting = hasLetters && text === text.toUpperCase();

  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }
  
  if(isShouting) {
    return "Whoa, chill out!";
  }

  if(isQuestion)
    return "Sure.";

  return "Whatever.";
};
