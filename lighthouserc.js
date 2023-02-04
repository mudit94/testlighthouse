module.exports = {
    ci: {
      collect: {
        url: ['https://qa.one.redhat.com/lighthouse']
      },
      assert: {
        preset: 'lighthouse:recommended'
      },
    },
};