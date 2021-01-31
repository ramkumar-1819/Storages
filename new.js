function fun(){
    var key=document.getElementById("key").value;
    var value=document.getElementById("val").value;
    sessionStorage.setItem(key,value);
    console.log("stored");
  }
  function fun1(){
    var getkey=document.getElementById("getkey").value;
    var value=sessionStorage.getItem(getkey);
    console.log(value);
}
  function lengt(){
      console.log(sessionStorage.length)
  }
  function clea(){
    sessionStorage.clear()
  }
  function rema(){
      var r=document.getElementById("rem").value;
      sessionStorage.removeItem(r);
      
  }
  function nkey(){
      var n=document.getElementById("nkey").value;
      console.log(sessionStorage.key(n));
  }