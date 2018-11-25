const axios =  require('axios') ;
const  {Users} = require('./mock_axios') ;

jest.mock('axios');

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users().then(users => {
    
    console.log(users)
    expect(users).toEqual(resp.data)

    })

});