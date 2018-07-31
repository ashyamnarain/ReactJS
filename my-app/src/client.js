import client_store from './store';

client_store.dispatch({type: "CHANGE_NAME", payLoad: "Will"});
//client_store.dispatch({type: "CHANGE_AGE", payLoad: 35});
//client_store.dispatch({type: "CHANGE_AGE", payLoad: 36});
//client_store.dispatch({type: "CHANGE_INFO", payLoad: {name: "Anand", age: 43}});