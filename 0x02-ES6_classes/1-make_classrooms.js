import ClassRoom from "./0-classroom";

export default function initializeRooms(){
    rooms = [];
    rooms.append(new ClassRoom(19));
    rooms.append(new ClassRoom(20));
    rooms.append(new ClassRoom(34));

    return rooms;
}