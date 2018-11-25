const {promise} = require('./promise');


describe('test promise', () =>{


    it('promise test', ()=>{
        return promise.then((data) =>{
            expect(data).toBe('done!');
        })
    });

});