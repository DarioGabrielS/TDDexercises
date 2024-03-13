
function displayRange (list){

  let ranges = ''
  
  for ( let i = 0; i < list.length; i++){
  	
    
    if(list[i] == list[i+2] - 2){
        
        let initial = list[i]
        let final = list[i+1]
      	let j = i+1
   
      	for(  j  ; j < list.length; j++){
      	
          
            if(list[i] == list[j] -1){
            
              
              final = list[j]
              
              i++
              
            }
          	
      
    		}
      
      ranges = ranges.concat(`${initial}-${final},`) 
      
      } 
      
    else {
    
			ranges = ranges.concat(`${list[i]},`)
    }
	}
  const rangeSplited = ranges.split('')
  rangeSplited.pop()
  const finalRange = rangeSplited.join('')
  
  return finalRange
}