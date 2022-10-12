const url = window.location.search
const urlParams = new URLSearchParams(url)

let intent = urlParams.get('intent');
let UUID, org_token, mdm_type;

UUID = urlParams.get('UUID');
org_token = urlParams.get('org_token');
mdm_type = urlParams.get('mdm_type');

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

localStorage.setItem('mdm_args',JSON.stringify(mdm_args));

window.location.href = `https://zluri-static-page.vercel.app/static.html?intent=getArgs`

}