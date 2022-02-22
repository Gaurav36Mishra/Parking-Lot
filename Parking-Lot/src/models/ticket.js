export const TicketStatus = {
    NEW: 'new',
    ASSIGNED: 'assigned',
    DISCARDED: 'discarded'
}

export default class Ticket {
    constructor() {
        this.ticket = {}
    }

    creteTicket(registration, color, ticketId) {
        this.ticket[ticketId] = {
            ticketId,
            registration,
            color,
            status: TicketStatus.ASSIGNED,
            date: new Date()
        }
        
        return this.ticket[ticketId]
    }

    discardTicket(ticketId) {
        const ticket = this.ticket[ticketId] 
        ticket.status = TicketStatus.DISCARDED
        return ticket
    }

    findTicketById(ticketId) {
        if (!ticketId) {
            return console.log('Ticket id cannot be empty')
        }
        return this.ticket[ticketId]
    }
}