import readline from 'readline'
import ParkingApp from './src/app/parking.js'

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  process.stdout.write('\n$ ');
  // create empty user input

  const parkingApp = new ParkingApp()
  reader.on('line', line => {
      if (line === 'exit') {
          process.exit()
      }
      const inputArray = line.split(' ')
      if (inputArray[0] === 'create_parking_lot') {
          const capacity = {
            Car: parseInt(inputArray[1]),
            Bike: parseInt(inputArray[2]),
            Truck: parseInt(inputArray[3])
          }
        parkingApp.createParkingLot(capacity)
      } else if (inputArray[0] === 'park_vehicle') {
          parkingApp.parkVehicle(inputArray[1], inputArray[2], inputArray[3])
      } else if (inputArray[0] === 'unpark_vehicle') {
          if (inputArray[1]) {
            parkingApp.unParkVehicle(inputArray[1])
          } else {
              console.log('Enter complete command with Ticket Id')
          }
      } else if (inputArray[0] === 'show_empty_slots') {
        parkingApp.getEmptySlotsByVehicleType(inputArray[1])        
      } else {
        console.log('Invalid command')
      }
  })