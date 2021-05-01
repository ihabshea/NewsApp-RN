const config = {
  screens: {
    Article: {
      path: 'article/:title',
      parse: (title: number) => `${title}`,
    },
  },
};

const linking = {
  prefixes: ['demonews://app'],
  config,
};
export default linking;
