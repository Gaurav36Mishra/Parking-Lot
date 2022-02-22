import Slot from './slot.js'
import { SlotStatus } from './slot.js'
// import BadDataError from '../../errors.js'

export default class ParkingLot {
    constructor(capacity) {
        this.slots = []

        let len = capacity.Car

        for (let id = 1; id <= len; id++) {
            const slot = new Slot(id, 'Car')
            this.slots.push(slot)
        }
        
        len = capacity.Bike+this.slots.length
        for (let id = this.slots.length+1; id <= len; id++) {
            const slot = new Slot(id, 'Bike')
            this.slots.push(slot)
        }

        len = capacity.Truck+this.slots.length
        for (let id = this.slots.length+1; id <= len; id++) {
            const slot = new Slot(id, 'Truck')
            this.slots.push(slot)
        }

        this.capacity = this.slots.length
    }

    findNearestEmptySlot(vehicleType) {
        for (let i = 0; i < this.slots.length; i++) {
            const slot = this.slots[i]
            if (slot.status === SlotStatus.VACANT && slot.vehicleType === vehicleType) {
                return slot
            }
        }
        return console.log('Sorry, Parking lot is full')
    }

    findSlotById(id) {
        if (!id) {
            return console.log('Id cannot be empty')
        }
        return this.slots[id-1]
    }

    findSlotByTicketId(ticketId) {
        if (!ticketId) {
            return console.log('ticketId cannot be empty')
        }
        return this.slots[ticketId-1]
    }

    findEmptySlotByVehicleType(vehicleType) {
        let count = 0
        for (let i = 0; i < this.slots.length; i++) {
            const slot = this.slots[i]
            if (slot.status === SlotStatus.VACANT && slot.vehicleType === vehicleType) {
                count += 1
            }
        }

        if (count === 0) {
            return console.log(`No parking slots are empty for ${vehicleType}`)
        }

        return console.log(`There are ${count} empty slots for parking ${vehicleType}`)
    }
}