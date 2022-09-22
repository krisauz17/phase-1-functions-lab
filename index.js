// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(42 - distance);
}
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264;
}
function distanceTravelledInFeet(start, finish){
    if (start < finish){
        return(finish-start)*264;
    }else {
        return(start-finish)*264;
    }
}
function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination);
    if (travel<=400) {
        return 0;
    }
    else if (travel > 400 && travel <= 2000) {
        return .02 * (travel - 400);
    }
    else if (travel > 2000 && travel < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
    
}
