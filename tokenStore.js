//https://zluri-static-page.vercel.app/static.html?browser=chrome&UUID=5c1bb6da-dfb7-4940-b5a6-d82c9b13c92d&org_token=org87e2369r7ndew7r3yo&mdm_type=mdm-mac-kandji

const CHROME_EXT = "cmobkdiplndgpjodaioofofmcikimbdb"
// const EDGE_EXT = "llnpohinpfhpnjbfcnmkjfccaengcffb"
const EDGE_EXT = "cmobkdiplndgpjodaioofofmcikimbdb"
const FIREFOX_EXT = "4f8718a-1f20-4d97-a740-ffb134e4ade4"

const url = window.location.search
const urlParams = new URLSearchParams(url)

let intent = urlParams.get('intent');
let fromBrowser = urlParams.get('fromBrowser');
let UUID, org_token, mdm_type, browser;



UUID = urlParams.get('UUID');
org_token = urlParams.get('org_token');
mdm_type = urlParams.get('mdm_type');
browser = urlParams.get('browser');

if(UUID && org_token && mdm_type) {
  localStorage.setItem("browser",browser);
  storeArgsToLocalStorage(UUID, org_token, mdm_type);
}


if(intent && intent === "getArgs" && fromBrowser !== null) {
  let browser = localStorage.getItem("browser");
  
  if(isArgsInLocalStorage()) {
  let savedArgs = getArgsFromLocalStorage();
  
  UUID = savedArgs.UUID;
  org_token = savedArgs.org_token;
  mdm_type = savedArgs.mdm_type;
  
  //if args found
  if(savedArgs)
   if(browser == "chrome") window.location.href = `chrome-extension://${CHROME_EXT}/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`
   else if (browser == "edge-chromium") window.location.href = `chrome-extension://${EDGE_EXT}/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`
   else if(browser === "firefox") window.location.href=`moz-extension://323f5fe8-5911-4d4c-aaa2-2dbf0afc39f8/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;

   //if  args not found
       
  } else {
    if(fromBrowser == "chrome" || fromBrowser == "edge-chromium")
    window.location.href = `chrome-extension://${CHROME_EXT}/options.html`
    else window.location.href=`moz-extension://323f5fe8-5911-4d4c-aaa2-2dbf0afc39f8/options.html`;
  }
}