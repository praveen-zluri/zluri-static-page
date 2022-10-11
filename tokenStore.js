const url = window.location.search
const urlParams = new URLSearchParams(url)

let browser = urlParams.get('b');

let UUID, org_token, mdm_type;


UUID = urlParams.get('UUID')
org_token = urlParams.get('org_token')
mdm_type = urlParams.get('mdm_type')

var mdm_args = {};
mdm_args = {
    UUID,
    org_token,
    mdm_type
}


 if(browser) {
  if(browser == 'c') {
    let token = JSON.parse(localStorage.getItem('chrome_token'))
    if(token) {
      window.location.replace(`chrome-extension://${process.env.CHROME_2}/options.html?token=${JSON.stringify(token)}`)
    }
  } else {
    console.log(process.env.CHROME_2)
  }
}



localStorage.setItem('mdm_args',JSON.stringify(mdm_args));
// localStorage.setItem('firefox_token',JSON.stringify(mdm_args.firefox))
// localStorage.setItem('edge_token',JSON.stringify(mdm_args.edge))