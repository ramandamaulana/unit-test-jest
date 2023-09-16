import {sum} from '../src/sum.js';

// matchers
test("sum must be 3", () => {
    const result = sum(1, 2)
    expect(result).toBe(3);

})

test("sum must be 3", () => {
    const result = sum(1, 2)
    expect(result).toBe(3);

})

// matchers with equals
test("halo harus sesuai nama", ()=> {
    const nama = "bhaihaki";
    const hello = `halo ${nama}`;
    expect(hello).toBe("halo bhaihaki");
})

test("untuk menggabukan 2 objek agar sesuai", ()=>{
    let person = {id : 1};
    Object.assign(person,{name:"adi"});
    expect(person).toEqual({id:1,name:"adi"})
})

// number matchers 

test("angka harus lebih besar dari value", ()=>{
    const value = 1 + 5;
    expect(value).toBeGreaterThan(5)
})

// test Array matchers

test("array", ()=>{
    const names = ['Ramanda','Maulana','Daulay'];
    expect(names).toContain('Maulana') //untuk mengecek data array yang berisi 1 field yang sama
    expect(names).toEqual(['Ramanda','Maulana','Daulay']) //Untuk mengecek semua isi array harus sesuai 

    const person = [{name:'Ridho'},{umur:10}] 
    expect(person).toContainEqual({name:'Ridho'}) // Cek data object array 1 field yang sama    
    expect(person).toEqual([{name:'Ridho'},{umur:10}]) // Cek data object array semua field harus sesuai    
})