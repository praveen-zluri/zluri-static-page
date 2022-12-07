//https://zluri-static-page.vercel.app/static.html?browser=chrome&UUID=5c1bb6da-dfb7-4940-b5a6-d82c9b13c92d&org_token=org87e2369r7ndew7r3yo&mdm_type=mdm-mac-kandji

const CHROME_EXT = "cmobkdiplndgpjodaioofofmcikimbdb"
// const EDGE_EXT = "llnpohinpfhpnjbfcnmkjfccaengcffb" //live one
const EDGE_EXT = "cmobkdiplndgpjodaioofofmcikimbdb"

let FFiDFromLS = null || getFirefoxExtIDfromLS();

const url = window.location.search
const urlParams = new URLSearchParams(url)
let fromBrowser = urlParams.get('fromBrowser') || getBrowserName();

if(fromBrowser === 'firefox') {

  let firefoxExtId = null || urlParams.get('firefoxExtId');

  if(firefoxExtId != null) {
    localStorage.setItem('firefoxExtId',firefoxExtId);
    // window.close();
    window.location.href=`https://zluri-static-page.vercel.app/static.html?intent=getArgs&fromBrowser=${get_browser().name}`;
  }
}

let intent = urlParams.get('intent');

let UUID, org_token, mdm_type, browser;

UUID = urlParams.get('UUID');
org_token = urlParams.get('org_token');
mdm_type = urlParams.get('mdm_type');
browser = urlParams.get('browser');

if(UUID && org_token && mdm_type) {
  localStorage.setItem("browser",browser);
  storeArgsToLocalStorage(UUID, org_token, mdm_type);
}


if(intent && intent === "getArgs" || fromBrowser !== null) {
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
   else if(browser === "firefox") {
    window.location.href=`moz-extension://${FFiDFromLS}/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;
   }
       
  } else {
    if(fromBrowser == "chrome" || fromBrowser == "edge-chromium")
      window.location.href = `chrome-extension://${CHROME_EXT}/options.html`
    else {
      window.location.href = `moz-extension://${FFiDFromLS}/options.html`;
    }
  }
}