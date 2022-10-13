//https://zluri-static-page.vercel.app/static.html?UUID=5c1bb6da-dfb7-4940-b5a6-d82c9b13c92d&org_token=org87e2369r7ndew7r3yo&mdm_type=mdm-mac-kandji

const url = window.location.search
const urlParams = new URLSearchParams(url)

let intent = urlParams.get('intent');
let UUID, org_token, mdm_type;

UUID = urlParams.get('UUID');
org_token = urlParams.get('org_token');
mdm_type = urlParams.get('mdm_type');


if(UUID && org_token && mdm_type) {
  storeArgsToLocalStorage(UUID, org_token, mdm_type)
}

if(intent && intent == "getArgs") {
  if(isArgsInLocalStorage()) {
   let savedArgs = getArgsFromLocalStorage();
  //  console.log(savedArgs);
  UUID = savedArgs.UUID;
  org_token = savedArgs.org_token;
  mdm_type = savedArgs.mdm_type;
  
  window.location.href = `chrome-extension://cckofokgndiepohkhjnohjcmjekjeppg/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;
  }
}


/* if(args)
  window.location.href = `https://zluri-static-page.vercel.app/static.html?intent=getArgs`
  // window.location.href = `http://127.0.0.1:5500/static.html?intent=getArgs`

if(intent) {
  if(intent == "getArgs") {
    let args = JSON.parse(localStorage.getItem('mdm_args'));
    console.log(`args:`, args);
    
    UUID=args.UUID;
    org_token=args.org_token;
    mdm_type=args.mdm_type;

    window.location.href = `chrome-extension://cckofokgndiepohkhjnohjcmjekjeppg/options.html?UUID=${UUID}&org_token=${org_token}&mdm_type=${mdm_type}`;
  }
}

if(UUID && org_token && mdm_type) {
  
  var mdm_args = {};

  mdm_args = {
      UUID,
      org_token,
      mdm_type
  }
  localStorage.setItem('mdm_args', JSON.stringify(mdm_args));
}