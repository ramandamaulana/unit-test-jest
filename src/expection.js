export class myExpection extends Error{

}

export const callme = ( nama ) =>{
    if(nama === "eko" ){
        throw new myExpection("Ups myExpections happens")
    }else{
        return 'Oke';
    }
}