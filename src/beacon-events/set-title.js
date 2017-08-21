// structure of returned object will depend on analytics provider
export default {
  eventFields: action => ({
    hitType: 'event',
    value: action.payload,
  }),
};
