export function hey(message: string): string {
  // Xử lý chuỗi
  const trimmed = message.trim();
  if (trimmed === '')
    return 'Fine. Be that way!';

  // Kiểm tra hét
  const isShouting =
    /[A-Z]/.test(trimmed) && trimmed === trimmed.toUpperCase();
  const isQuestion = trimmed.endsWith("?");

  if(isShouting && isQuestion) 
    return "Calm down, I know what I'm doing!";

  if(isShouting) 
    return "Whoa, chill out!";

  if(isQuestion)
    return "Sure.";

  return 'Whatever.';
}
