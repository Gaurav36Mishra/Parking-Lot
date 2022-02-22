// import BadDataError from '../../errors.js'

export const SlotStatus = {
    VACANT: 'vacant',
    PARKED: 'parked'
}

export default class Slot {
    constructor(id, vehicleType) {
        this.id = id
        this.vehicleType = vehicleType
        this.ticketId = null
        this.status = SlotStatus.VACANT
        this.registration = null
        this.colour = null
    }

    assign(registration, colour, ticketId) {
        if (this.status !== SlotStatus.VACANT) {
            return console.log(this.ticketId, 'A car is already parked on this slot. Please check another slot')
        }
        this.ticketId = ticketId
        this.registration = registration
        this.colour = colour
        this.status = SlotStatus.PARKED

        return this.ticketId
    }

    leave() {
        this.registration = null
        this.colour = null

        this.status = SlotStatus.VACANT
        return this.id
    }
}