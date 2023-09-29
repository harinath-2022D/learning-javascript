function searchFn(event){
    console.log(event.target.value);
}
// best example ; recommede product upon searching speed /flipkart auto suggest feature
// no of api calls will be generated upon typing speed

// debouncing => it limits the excution of a function certain amount of time period
//before running that function

const debounceFn = (callBackFn,delayTime) => {
    let timerId; // we declared timerId here because of closure
    return function (...args) {
        // 
        if(timerId){
            clearTimeout(timerId); // killing the previous calls 
            //if type speed less than 200ms
        }
        timerId = setTimeout(()=>{
            callBackFn(...args);
        },delayTime);
    };
};

const optimiseSearch = debounceFn(searchFn,200);
