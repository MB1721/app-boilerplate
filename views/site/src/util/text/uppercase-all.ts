interface IRegex {
  pattern: RegExp,
  replacement: (match: string) => string
}

export default function upperCaseAll(str: string): string {
  const spaceLetter: RegExp = /\s\w{1}/g;
  const dashLetter: RegExp = /-\w{1}/g;
  const camelCase: RegExp = /.[A-Z]+/g;

  const tests: IRegex[] = [
    {
      pattern: dashLetter,
      replacement: match => '-' + match[1].toUpperCase()
    },
    {
      pattern: spaceLetter,
      replacement: match => ' ' + match[1].toUpperCase()
    },
    {
      pattern: camelCase,
      replacement: match => `${match[0]} ${match[1]}`
    }
  ];

  let newStr: string = str.replace(/^\w/, str[0].toUpperCase()); // capitalize first letter

  // test all regular expressions
  let transformed: boolean = false;
  tests.forEach((obj: IRegex) => {
    // console.log(`testing ${newStr} against`, obj);
    const { pattern, replacement } = obj;
    if (pattern.test(newStr) && !transformed) {
      /* 
      // display matches
      const matches = newStr.match(pattern);
      console.log(matches);
      */
      newStr = newStr.replaceAll(pattern, replacement);
      transformed = true;
    }
  });

  return newStr;
}