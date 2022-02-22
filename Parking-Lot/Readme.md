# Description
This is a parking lot system which can manage the parking lot without any human intervension. Each slot in the parking lot is suitable for different types of vehicles.

When a vehicle enters in the parking lot, a ticket is created and issued to the driver. The ticket issuing process includes us documenting the registration number (number plate), type of the vehicle and the colour of the vehicle and allocating an available parking slot to the car before actually handing over a ticket to the driver (we assume that our customers are nice enough to always park in the slots allocated to them).

The customer should be allocated a parking slot which is nearest to the entry. At the exit the customer returns the ticket which then marks the slot they were using as being available.

We interact with the system via a simple set of commands which produce a specific output. Please take a look at the example below, which includes all the commands you need to support - they're self explanatory.

# commands for the execution
create_parking_lot
park_vehicle
unpark_vehicle
show_empty_slots

# Interactive Example
```
$ create_parking_lot 10 20 30
created parking lot with 60 slots

$ park_vehicle Car MH-10-AB-2343 Blue
You ticket id is 1

$ unpark_vehicle 1
Slot number 1 is free

$ show_empty_slots Car
There are 10 empty slots for parking Car

$ exit
```# Parking-Lot
