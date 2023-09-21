import { sayHelloAsync } from "../src/asyn";

test('test async function', async ()=>{
    const result = await sayHelloAsync("Ramanda");
    expect(result).toBe('Helo Ramanda')
})

test('test async matchers', async ()=>{
    await expect(sayHelloAsync("Ramanda")).resolves.toBe("Helo Ramanda");
    await expect(sayHelloAsync()).rejects.toBe("Helo is Empty");
    
})