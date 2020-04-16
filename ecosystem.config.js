module.exports = {
  apps: [
    {
      // 正式环境
      name: 'node-composite-prod',
      script: './bin/www.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3555,
      },
    },
    {
      // 测试环境
      name: 'node-composite-test',
      script: './bin/www.js',
      env: {
        NODE_ENV: 'test',
        PORT: 3554,
      },
    },
  ],
}
