/**
 * Called when invalid/bad input given
*/

class ParkingLotFullError extends Error {}

export default class BadDataError extends Error {}

class SlotNotEmptyError extends Error {
    constructor(id, message) {
        super(message)
        
        this.slotId = id
        this.message = message
    }
}

// export default {
//     ParkingLotFullError,
//     BadDataError,
//     SlotNotEmptyError
    
// }