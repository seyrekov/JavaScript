function recordSwim(input) {
    let secondsRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let obstacleWaterSeconds = Math.floor((distanceInMeters / 15)) * 12.5
    let peterTime = (distanceInMeters * timeForOneMeter) + obstacleWaterSeconds
    let resultEffort = Math.abs(secondsRecord - peterTime).toFixed(2) 

    if (secondsRecord > peterTime) {
        console.log(`Yes, he succeeded! The new world record is ${peterTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${resultEffort} seconds slower.`)
    }
    
}
recordSwim(["55555.67","3017","5.03"])