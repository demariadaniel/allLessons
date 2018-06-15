export const addClicks = click => ({ type: "ADD_CLICK", payload: click });

// We use Actions to update our state in Redux. They are simple functions
// that return an object representing the new data we want to add to state.

// The key 'type' tells our reducer functions which swicth case to perform
// so that state gets updated properly.

// 'payload' contains the actual data we want to add to state.
// 'Clicks' isn't the best example (would you really add more than one click
// at a time?) but you can see in this example we pass in the number of
// clicks as an argument of the function, which gets stored in the object's
// payload key.

// A more useful example might be:

// export const addUser = (email, name, password) => ({
//      type: "ADD_USER",
//      email: email,
//      name: name,
//      password: password      
//  })