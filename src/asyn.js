export const sayHelloAsync = (name) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(name){
                resolve(`Helo ${name}`)
            }else{
                reject("Helo is Empty")
            }
        },1000)
    })
}