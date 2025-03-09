interface instruction {
  path: string,
  steps: string[]
}

export default function developerMessage(): void {
  const instructions: instruction[] = [
    {
      path: 'webpack.common.js',
      steps: [
        'Edit module.plugins.HtmlWebpackPlugin.title',
        'Edit module.plugins.FaviconsWebpackPlugin.logo'
      ]
    },
    {
      path: 'src/pages/Home.tsx',
      steps: ["Delete: `import HomeComponent from '../components/HomeComponent/HomeComponent';`\n\tand `<HomeComponent/>`"]
    },
    {
      path: 'src/components/',
      steps: ['Delete HomeComponent/ and Sample/']
    },
    {
      path: 'src/assets/images/',
      steps: ['Delete sample/']
    },
    {
      path: 'src/pages/',
      steps: ['Add/remove page files necessary for your application']
    },
    {
      path: 'src/pages/index.tsx',
      steps: ['import/export pages added in the prvious step']
    },
    {
      path: 'src/index.tsx',
      steps: ["Delete \n\n\t```\n\timport developerMessage from './developer-message';\n\tdeveloperMessage(); // instructions to ready front-end development\n\t```"]
    },
    {
      path: 'src/developer-message.ts',
      steps: ['Delete this file']
    }
  ];

  let devInstructions: string[] = [];
  let ordinal: number = 1;

  instructions.forEach(instruction => {
    const { path, steps } = instruction;
    const header = `${ordinal++}. ${path}\n\t`;
    const body = steps.join('\n\t');
    const instructionStr = header + body;
    devInstructions.push(instructionStr);
  });
  
  if (process.env.NODE_ENV !== 'production') {
    console.group('Start developing me! Files paths are shown relative to /views/<view-dir>/ directory.');
    console.log(devInstructions.join('\n\n'));
    console.groupEnd();
  }
}