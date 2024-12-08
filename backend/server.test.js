jest.mock('./server', () => ({
    getConnection: jest.fn(() =>
      Promise.resolve({
        release: jest.fn(),
      })
    ),
  }));
  

    const db = require('./server');

test('mocked database connected successfully', async () => {
  const connection = await db.getConnection();
  expect(connection.release).toHaveBeenCalledTimes(0); 
});


