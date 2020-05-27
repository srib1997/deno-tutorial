const encoder = new TextEncoder()

const text = encoder.encode('Hello World !!!')

await Deno.writeFile('hello.txt', text)
