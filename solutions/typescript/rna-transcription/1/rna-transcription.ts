export function toRna(dna: string): string {
  const mapping: Record<string, string> = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  return dna 
    .split('') // tách DNA thành mảng ký tự
    .map(nucleotide => {
      const rna = mapping[nucleotide];
      if (!rna) {
        throw new Error('Invalid input DNA.');
      }
    return rna;
    })
    .join('');
}
