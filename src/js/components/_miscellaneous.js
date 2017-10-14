//----------------------------------------------
// Flex Vid
//---------------------------------------------- 
const miscFlexVid = () => {
  const iframeArr = document.querySelectorAll('iframe');

  [].forEach.call(iframeArr, iframe => {
    const div = document.createElement('div');
    div.className = 'flex-vid';
    
    iframe.parentNode.insertBefore(div, iframe);
    iframe.parentNode.removeChild(iframe);
    div.appendChild(iframe);
  });
};

//----------------------------------------------
// Exports
//----------------------------------------------
module.exports = {
  miscFlexVid
};
