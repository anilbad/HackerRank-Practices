
function sameOccurance(S){
    const occurance = {};
    Array.from(S).forEach((s) => {
      if(occurance.hasOwnProperty(s)){
        occurance[s]++;
      }else{
        occurance[s] = 1;
      }
    });
    let values = Object.values(occurance);
    values = values.sort((a,b)=> a-b);
    let last = values[0] ;
    let arr = [];
    for(let i = 1 ;i< values.length; i++){
      if(last !== values[i]){
          arr = [last, ...values.slice(i)];
          break;
        }
    }
    if(arr.length>2){
      console.log('NO');
    }else if(arr.length === 0 || arr[1]- arr[0]===1){
      console.log('YES');
    }else{
      console.log('NO');
    }
  }
  
  sameOccurance('aabbc');