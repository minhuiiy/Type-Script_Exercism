export const answer = (question) => {

  const match = question.match(/^What is\s*(.*)\?$/);
  if (!match) throw new Error('Unknown operation'); 

  const expr = match[1].replace(/\s+/g, ' ').trim();
  if (expr.length === 0) throw new Error('Syntax error');

  const tokenRegex = /-?\d+|plus|minus|multiplied by|divided by/g;
  
  const tokens = expr.match(tokenRegex);
  if (!tokens) throw new Error('Unknown operation');

  const rebuilt = tokens.join(' ');
  if (rebuilt !== expr) throw new Error('Unknown operation');

  if (tokens.length % 2 === 0) throw new Error('Syntax error');

  let result = parseInt(tokens[0], 10);
  if (Number.isNaN(result)) throw new Error('Syntax error'); 

  const ops = {
    'plus': (a, b) => a + b,
    'minus': (a, b) => a - b,
    'multiplied by': (a, b) => a * b,
    'divided by': (a, b) => a / b,
  };

  for (let i = 1; i < tokens.length; i += 2) {
    const opToken = tokens[i];
    const numToken = tokens[i + 1];
    
    if (/^-?\d+$/.test(opToken)) throw new Error('Syntax error');

    if (!(opToken in ops)) throw new Error('Unknown operation');

    const num = parseInt(numToken, 10);
    if (Number.isNaN(num)) throw new Error('Syntax error');

    result = ops[opToken](result, num);
  }

  return result;
};
