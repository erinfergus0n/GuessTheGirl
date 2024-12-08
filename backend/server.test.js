// const db = require('./server'); // Import your db module
// jest.mock('./server'); // Mock the entire db module

// test('logs success and releases connection on successful connection', async () => {
//   const mockRelease = jest.fn(); // Mock release method
//   db.getConnection.mockResolvedValue({ release: mockRelease }); // Mock successful connection

//   const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

//   await db.getConnection();

//   expect(consoleLog).toHaveBeenCalledWith('Connected to the database');
//   expect(mockRelease).toHaveBeenCalled(); // Ensure release is called
//   consoleLog.mockRestore();
// });

// test('logs error on failed connection', async () => {
//   const mockError = new Error('Connection failed');
//   db.getConnection.mockRejectedValue(mockError); // Mock failed connection

//   const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

//   await expect(db.getConnection()).rejects.toThrow('Connection failed');

//   expect(consoleError).toHaveBeenCalledWith(
//     expect.stringContaining('Error connecting to the database:')
//   );
//   consoleError.mockRestore();
// });
