const counter = require('./wordcounter.js')

describe('WordCounter', ()=>{

    const paragraph = 'uololom lolo? shure'
    const text = "lolo"
    const letter = 'a'
    const notAText = 15

    it("Should receive 2 parameters", ()=>{

       expect(counter(paragraph)).toBe('Two params need to be passed')
    })
    it("Both parameters must be of type String", ()=>{
    
        expect(counter(text, notAText)).toBe('Both params need to be Strings')
    })
    it("Cant execute if paragraph is shorter than word", ()=>{

        expect(counter(letter, text)).toBe(`Cant look for ${text} inside of ${letter}`)
    })
    it("Should find and count how many times a word appears in a paragraph", (()=>{
        
        const weirdText = 'om l'
        expect(counter(paragraph,text)).toBe(2)
        expect(counter(paragraph, weirdText)).toBe(1)
    }))
})