// import BadDataError from '../../errors.js'
import ParkingLot from '../models/parking.js'
import { SlotStatus } from '../models/slot.js'
import Ticket from '../models/ticket.js'

export default class ParkingApp {
    constructor() {
        this.parkingLot = null
        this.ticket = new Ticket()
    }

    createParkingLot(capacityArg) {
        if (this.parkingLot) {
            return console.error('A parking lot has already been created for this app. Only one parking lot can be used at a time.')
        }
        this.parkingLot = new ParkingLot(capacityArg)
        console.log(`created parking lot with ${this.parkingLot.capacity} slots`)
        return this.parkingLot
    }

    parkVehicle(vehicleType, registration, color) {
        if (!this.parkingLot) {
            return console.log('Parking lot has not been initialised')
        }

        if (!registration || !color || !vehicleType) {
            return console.log('Registration number, color and Vehicle Type are required to park the car')
        }
        
        const slot = this.parkingLot.findNearestEmptySlot(vehicleType)
        if (slot.status !== SlotStatus.VACANT) {
            return console.log('This slot is already empty.')
        }
        const ticketId = slot.id
        const ticket = this.ticket.creteTicket(registration, color, ticketId)
        
        slot.assign(registration, color, ticketId)
        console.log('You ticket id is ', ticket.ticketId)
        return ticket
    }

    unParkVehicle(ticketId) {
        if (!this.parkingLot) {
            return console.log('Parking lot has not been initialised')
        }
        const slot = this.parkingLot.findSlotByTicketId(ticketId)
        if (slot.status !== SlotStatus.PARKED) {
            return console.log('This slot is already empty.')
        }
        this.ticket.discardTicket(ticketId)
        const slotId = slot.leave()
        return console.log(`Slot number ${slotId} is free`)
    }

    getEmptySlotsByVehicleType(vehicleType) {
        if (!this.parkingLot) {
            return console.log('Parking lot has not been initialised')
        }
        return this.parkingLot.findEmptySlotByVehicleType(vehicleType)
    }
}
