const fetch = require('node-fetch')
const baseurl = 'https://api.bananonz.dev/'
async function request(endpoint, input='') {
  const res = `${baseurl}${endpoint}?${input}`
  return res;
}

module.exports.chatbot = async function(x, ownername, botname) {
    if(!x) throw new Error("The field 'content' is empty - chatbot.")
    if(!ownername) throw new Error("The field 'ownername' is empty - chatbot.")
    if(!botname) throw new Error("The field 'botname' is empty - chatbot.")
    const res = await fetch(`${baseurl}chatbot?msg=${encodeURIComponent(x)}&owner=${encodeURIComponent(ownername)}&botname=${encodeURIComponent(botname)}`)
    const resp = await res.json()
    return resp.response;
}

module.exports.drake = async function(text1, text2) {
    if(!text1) throw new Error('The field text1 is empty - drake.')
    if(!text2) throw new Error('The field text2 is empty - drake')
    const input = `text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const response = `${baseurl}drake?${input}`
    return(response)
}

module.exports.password = async function() {
  const res = await fetch(`${baseurl}password`)
  const json = await res.json()
  return json.password;
}