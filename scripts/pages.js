var ghpages = require('gh-pages');

console.log('Publishing...');

ghpages.publish(
  '.',
  {
    src: ['index.md', '_config.yml', '_layouts/**/*', 'pages/**/*', 'dist/**/*']
  },
  function(err) {
    if (!err) {
      console.log('...success!');
      return;
    }
    console.log(err);
  }
);
