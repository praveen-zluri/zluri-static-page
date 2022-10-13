function storeArgsToLocalStorage(...args) {
    var mdm_args = {};
  
    let browser = args[0];
    let UUID = args[1];
    let org_token = args[1];
    let mdm_type = args[2];
    
    mdm_args = {
      browser,
      UUID,
      org_token,
      mdm_type,
    }
  
    localStorage.setItem("mdm_args",JSON.stringify(mdm_args));
    window.close();
}

function isArgsInLocalStorage() {
    let args = localStorage.getItem('mdm_args');
    if(args !== null)
        return true
    else
        return false
}

function getArgsFromLocalStorage() {
    let args = JSON.parse(localStorage.getItem('mdm_args'));
    return args;
}