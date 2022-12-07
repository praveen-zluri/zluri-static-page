function storeArgsToLocalStorage(...args) {
    var mdm_args = {};

    let UUID = args[0];
    let org_token = args[1];
    let mdm_type = args[2];
    
    mdm_args = {
      UUID,
      org_token,
      mdm_type,
    }
  
    localStorage.setItem("mdm_args",JSON.stringify(mdm_args));
    window.close();
}

function isArgsInLocalStorage() {
    let args = localStorage.getItem('mdm_args');
    let length = localStorage.length;
    if(args !== null && length)
        return true
    else
        return false
}

if(getBrowserName() === 'firefox') {
    let args = getArgsFromLocalStorage();
}

function getArgsFromLocalStorage() {
    let args = JSON.parse(localStorage.getItem('mdm_args'));
    return args;
}

function getFirefoxExtIDfromLS() {
    return localStorage.getItem('firefoxExtId');
    
}

function getBrowserName() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'firefox';
    } else if((navigator.userAgent.indexOf("Chrome") != -1 ) && (navigator.userAgent.indexOf("Edg"))) {
        return 'edge-chromium';
    } else {
        return 'Not sure!';
    }
}