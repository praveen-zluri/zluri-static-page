//https://zluri-static-page.vercel.app/static.html?browser=chrome&UUID=5c1bb6da-dfb7-4940-b5a6-d82c9b13c92d&org_token=org87e2369r7ndew7r3yo&mdm_type=mdm-mac-kandji

const url = window.location.search
const urlParams = new URLSearchParams(url)

let intent = urlParams.get('intent');
let UUID, org_token, mdm_type, browser;

browser = urlParams.get('browser');
UUID = urlParams.get('UUID');
org_token = urlParams.get('org_token');
mdm_type = urlParams.get('mdm_type');


if(UUID && org_token && mdm_type) {
  storeArgsToLocalStorage(browser, UUID, org_token, mdm_type)
}


if(intent && intent === "getArgs") {
  if(isArgsInLocalStorage()) {
   let savedArgs = getArgsFromLocalStorage();
  browser = savedArgs.browser;
  UUID = savedArgs.UUID;
  org_token = savedArgs.org_token;
  mdm_type = savedArgs.mdm_type;
  
   browser === "chrome" ? window.location.href = `chrome-extension://cckofokgndiepohkhjnohjcmjekjeppg/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`
   : location.href = `moz-extension://a4f8718a-1f20-4d97-a740-ffb134e4ade4/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;
   
  // window.location.href = `chrome-extension://cckofokgndiepohkhjnohjcmjekjeppg/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;
  }
}