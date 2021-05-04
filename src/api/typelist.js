    // 模拟异步调用
    export function getTypes() {
        return new Promise(resolve => { 
            setTimeout(() => {
            resolve ([{name:'web'}, {name:'app'}])}, 2000);
        }) 
    }
  
    