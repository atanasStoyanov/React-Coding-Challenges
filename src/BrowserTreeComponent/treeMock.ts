export const tree = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "node_modules",
            },
            {
                name: 'package.json',
            }
          ]
        },
        {
          name: "types",
          children: [
            {
              name: "express",
            },
            {
                name: 'babel__core',
            },
            {
                name: 'eslint',
                children: [
                  {
                    name: 'package.json',
                  },
                  {
                    name: 'helpers.d.ts',
                  }
                ]
            }
          ]
        },
      ],
    },
    {
        name: "package.json"
    },
    {
        name: "tsconfig.json"
    }
  ],
};
