// for reference trigger_switch and example_created using snake_casing as they're basically triggers 

export default (state = {
  examples: [],
  selectedExample: null,
  exampleContent: [],
  trigger_switch: "",
  example_has_been_created: ""
  }, action) => {
  switch (action.type) {
    case 'FETCH_EXAMPLES': 
      return {
        ...state,
        examples: action.payload
      }
    case 'SELECT_EXAMPLE':
      return {
        ...state,
        selectedExample: action.payload
      }
    case 'FETCH_CONTENT':
      return {
        ...state,
        exampleContent: action.payload
      }
    case 'RESET_EXAMPLE_CONTENT':
      return {
        ...state,
        exampleContent: action.payload,
      }
    case 'CREATE_EXAMPLE':
      return {
        ...state,
        trigger_switch: action.payload
      }
    case 'EXAMPLE_HAS_BEEN_CREATED':
      return {
        ...state,
        example_has_been_created: action.payload
      }
    case 'EXAMPLE_HAS_BEEN_WIPED':
      return {
        ...state,
        example_has_been_created: action.payload
      }
    default:
      return state
  };
};