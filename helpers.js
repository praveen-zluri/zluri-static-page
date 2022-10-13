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
    
    // window.location.href = `https://zluri-static-page.vercel.app/static.html?intent=getArgs`
    window.location.href = `http://127.0.0.1:5500/static.html?intent=getArgs`
  
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
    // console.log(`args:`, args);
    return args;
}