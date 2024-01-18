/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
   let currentGain = 0;
   let totalGain = 0;
   let answer = 0;

   for(let i = 0; i < gas.length; i++){
     totalGain += gas[i] - cost[i];
     currentGain += gas[i] - cost[i];

     if(currentGain < 0){
       answer = i + 1;
       currentGain = 0;   
     }  
   }
   return totalGain >= 0 ? answer : -1; 
};