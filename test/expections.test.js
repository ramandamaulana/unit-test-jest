import { callme, myExpection } from "../src/expection";

test('expection', ()=>{
    expect(()=> callme('eko')).toThrow();
    expect(()=> callme('eko')).toThrow(myExpection);
    expect(()=> callme('eko')).toThrow("Ups myExpections happens");
})

test('expections happens', ()=>{
    expect(callme("eki")).toBe("Oke")
})