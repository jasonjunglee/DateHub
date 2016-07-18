import axios from 'axios';

// get events
export function getEvents() {
  let Today = new Date();
  let month = Today.getMonth() + 1;
  let year = 2016;

  if(month < 10) {
    month = "0" + month
  }

  return axios.get('/api/dates/month/' + month + '/year/' +year)
  .then((response) => {
    console.log("Getting events from DB!")
    return {
      type: 'GET_EVENTS',
      events: response.data
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

// add event
export function addEvent(eventObject) {
  return axios.post('/api/dates', eventObject)
    .then((response) => {
      return {
        type: 'NEW_EVENT',
        event: eventObject
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// edit event
export function editEvent(updatedEvent, eventId) {
  return axios.put('/api/dates/' + eventId, updatedEvent)
    .then((response) => {
      return {
        type: 'EDIT_EVENT',
        event: updatedEvent,
        eventId: eventId
      }
    })
    .catch((error) => {
      alert(error);
    });
}

// delete event
export function deleteEvent(eventId) {
  return axios.delete('/api/dates/' + eventId)
  .then((response) => {
    return {
      type: 'DELETE_EVENT',
      eventId: eventId
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

// facebook/tinder login
export function tinderLogin(token) {
  return axios.post('/auth/tinder', {
      facebook_token: token
    })
    .then((response) => {
      console.log("Logging in to Tinder!");
      return {
        type: 'LOGIN',
        auth: true
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
