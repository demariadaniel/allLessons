// Remember that without document.ready, this code did not work!
// The browser tried to attach a submit event listener to a form
// that hadn't been created yet.
$(document).ready(function(){
  $('#entryform').submit(function(event){
    event.preventDefault();
    // Submitting the form refreshes the page, losing our Javascript state.
    // We need to prvent this default event behavior for our app to work.
    let newEntry = createNewEntry();
    renderEntry(newEntry)
    // On submitting the form, we create a new entry, then render that
    // specific entry on the page.
  })
})

let allEntries = [];
let globalID = 0;
// Global variables tracking all entries and ID's

function renderEntry(entry){
  // Adds a new <div class="jrnlEntry"> on to <div class="content">
  // We use the entry.id property to assign an ID to the new div
  // We also create a button we can use to delete that entry
  $('.content').append(
    '<div id="'+entry.id+'" class="jrnlEntry">' 
    +'<h1>'+entry.title+'</h1>'
    +'<h2>'+entry.author+'</h2>'
    +'<p>'+entry.content+'</p>'+
    '<button class="deleteBtn">Delete This Entry</button>'+
    '</div>')
    $('.deleteBtn').click(function(){
      // We have to attach a new click event listener every time we make a 
      // new button. This function looks through all the entries and finds
      // the one whose id property matches the ID we assigned to this div,
      // then delete it from the array, and remove it from the page.
      for(let i = 0; i < allEntries.length; i++){
        if (allEntries[i].id == $(this).parent().attr('id') ){
          // Note the double == because in the javascript id is a number
          // and in the HTML id is a string
          allEntries.splice(i, 1)
          console.log(allEntries)
        }
      }
      $(this).parent().remove();
    })
}

function createNewEntry(){
  // Reusable function to create entry objects. Grabs the user input,
  // and uses it to make new Entry constructor objects, which are
  // added to the global collection of entries.
  let newAuthor = $('#author').val();
  let newTitle = $('#title').val();
  let newContent = $('#content').val();
  let newEntry = new Entry(newAuthor, newTitle, newContent, globalID);
  globalID++;
  allEntries.push(newEntry);
  console.log(allEntries);
  return newEntry
  // renderEntry(newEntry)
  // ^^^ We could call the renderEntry function inside createNewEntry,
  // but it's better practice to have each function be single-purpose;
  // in other words, each function does only one specific thing.
  // This is easier to test and easier to debug.
}

// Constructor blueprint for new Entry objects
function Entry (author, title, content, id){
  this.author = author;
  this.title = title;
  this.content = content;
  this.id = id;
}