// Am Anfang klären, was soll alles möglich sein!

// Notizen anzeigen lassen

let notesTitles = ['Ba', 'Aufgabe', 'Gemüse'];
let notes = [ 'Banane', 'Rasenmäher', 'Gurke'];


let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];


let allNotes = {
    'notesTitles': ['Ba','Aufgabe'],
    'notes': ['banana','rasen mähen'],
    'archivNotesTitles': [],
    'archivNotes': [],
    'trashNotesTitles': [],
    'trashNotes': []
}

//Notes
function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
       // const note = notes [indexNotes];
        contentRef.innerHTML += getNoteTemplate(indexNotes);   
      
    }
}

//Archive
function renderArchiveNotes(){
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
        
    }

}
//Trash
function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
       // const note = notes [indexNotes];
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);   
      
    }
}




//Notes
function getNoteTemplate(indexNotes){
    return `<p> + titel: ${notesTitles[indexNotes]} --> ${notes[indexNotes]} <button class="x_button" onclick="moveToArchive(${indexNotes})"> archive </button> </p>  ` ;
}

//Archive
function getArchiveNoteTemplate(indexArchiveNote){
    return `<p> + titel: ${archiveNotesTitles[indexArchiveNote]} --> ${archiveNotes[indexArchiveNote]} <button class="x_button" onclick="moveToTrash(${indexArchiveNote})"> trash </button> </p> 
    <button class="back_button" onclick="moveToNotes(${indexArchiveNote})"> notes </button> </p>  ` ;

    }

//Trash
function getTrashNoteTemplate(indexTrashNote){
    return `<p> titel: + + ${trashNotesTitles[indexTrashNote]} --> ${trashNotes[indexTrashNote]} <button class="x_button" onclick="deleteNote(${indexTrashNote})"> delete </button> </p> 
    <button class="back_button" onclick="moveBackToArchive(${indexTrashNote})"> archive </button> </p>` ;
}

// notizen hinzufügen
function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
     
    renderNotes();
    noteInputRef.value = "";
}

//Move To Back Note
function moveToNotes(indexArchiveNote){
    let note = archiveNotes.splice(indexArchiveNote,1);
    notes.push(note[0]);

    let noteTitle = archiveNotesTitles.splice(indexArchiveNote,1);
    notesTitles.push(noteTitle[0]);

    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}

// Move To Archive
function moveToArchive(indexNotes){
    let archiveNote = notes.splice(indexNotes,1);
    archiveNotes.push(archiveNote[0]);

    let archiveNoteTitle = notesTitles.splice(indexNotes,1);
    archiveNotesTitles.push(archiveNoteTitle[0]);

    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}

// Move To Trash

function moveToTrash(indexArchiveNote){
 let trashNote = archiveNotes.splice(indexArchiveNote,1);
 trashNotes.push(trashNote[0]);

 let trashNoteTitle = archiveNotesTitles.splice(indexArchiveNote,1);
 trashNotesTitles.push(trashNoteTitle[0]);

 renderNotes();
 renderArchiveNotes();
 renderTrashNotes();
}
//Move back to archive

function moveBackToArchive(indexTrashNote){
    let trashNote = trashNotes.splice(indexTrashNote);
    archiveNotes.push(trashNote[0]);

    let trashNoteTitle = trashNotesTitles.splice(indexTrashNote);
    trashNotesTitles.push(trashNoteTitle[0]);
   
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();

}

//Delete Note

function deleteNote(indexTrashNotes){
  trashNotes.splice(indexTrashNotes,1);
  renderNotes();
  renderTrashNotes();
   }




   


//notizen archivieren
// notizen bearbeiten 