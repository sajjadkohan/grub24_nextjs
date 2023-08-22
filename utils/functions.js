import axios from "axios";

const fixedNumber = (number) => {
    let num = parseFloat(number);
    if (num === 0) {
        num = 5;
      }
    let newNum = num.toFixed(1);
    return newNum
}

const getDevice = () => {
  var OSName = "";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="web";
  if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="ios";
  if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="unix";
  if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="linux";
  if (window.navigator.userAgent.indexOf("Android ")          != -1) OSName="android";
  return OSName;
}

const getDeviceId =  () => {
  const isId =  localStorage.getItem('deviceId');
  if(isId){
      return isId;
  }else{
      const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
      const objectId = timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
          return Math.floor(Math.random() * 16).toString(16);
      }).toLowerCase();
      localStorage.setItem('deviceId',objectId);
      return objectId;
  }
}

const fetchData = async (api="",method="GET",data=null,msg="") => {
  
  let result = {
    data:null,
    status:200,
    success:true,
    msg:""
  }

  if(method === "GET"){

  }else if(method === "POST"){

    // const res = await axios.post(api,data,{withCredentials:true});
    axios.defaults.withCredentials = true;
    await axios[method=="POST"?'post':'get'](`${api}&timestamp=${new Date().getTime()}`,data).then( res => {
      if(res.data.code === 200){
        result.data = res.data.result?res.data.result:null
        result.message = msg;
      }else{
        result.status = 400;
        result.msg = res.data.msg;
        result.success = false
      }
    }).catch(err => {
        result.status = 500;
        result.success = false;
        result.msg = err;
    })

  }

  return result;

}

export{fixedNumber,getDevice,getDeviceId,fetchData}