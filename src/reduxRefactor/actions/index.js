export function selectAlgorithm(algo) {
  console.log("An algorithm has been selected", algo );
  //this action creator needs to return an action, an object with a type property
  
  return {
    type: 'ALGO_SELECTED',
    payload: algo //this will just return props.algotype as called in AlgoMenuItem
  };
}