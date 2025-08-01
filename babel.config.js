module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        corejs: 3,
      },
    ],
    /*
      // mgudapakkam 7/31/25
      // do not use 'minify' plugin namely (babel-preset-minify)
      // it causes build to fail !
      
      ['minify', { builtIns: false }], 
    */
  ];

  const comments = false;

  return { presets, comments };
};
