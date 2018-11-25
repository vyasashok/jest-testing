const {readFile} = require('./async-await');


describe('async await', () =>{


    it('async await', async ()=>{
      let data = await readFile();
      console.log(data);
        expect(data.response.companyName).toEqual("Algorisys");
    
    });

});