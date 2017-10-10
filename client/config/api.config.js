const isProdMode = Object.is(process.env.NOOD_ENV,'production')

module.exports = {
    baseUrl:isProdMode ? 'http://yangxc.cn/api/' : 'api/'
}