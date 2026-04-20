// ===== SELECTORS =====
const notesContainer = document.getElementById('notesContainer');
const noteDialog = document.getElementById('noteDialog');
const noteForm = document.getElementById('noteForm');
const dialogTitle = document.getElementById('dialogTitle');
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// ===== STATE =====
let notes = JSON.parse(localStorage.getItem('notes')) || [];
let editingId = null; // tracks which note is being edited

// ===== OPEN DIALOG =====
function opeNoteDialog() {
  editingId = null;
  dialogTitle.textContent = 'Add New Note';
  noteForm.reset();
  noteDialog.showModal();
}

// ===== CLOSE DIALOG =====
function closeNoteDialog() {
  noteDialog.close();
  noteForm.reset();
  editingId = null;
}

// ===== SAVE NOTE (form submit) =====
noteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (!title || !content) return;

  if (editingId !== null) {
    // Update existing note
    notes = notes.map(note =>
      note.id === editingId
        ? { ...note, title, content, updatedAt: new Date().toLocaleString() }
        : note
    );
  } else {
    // Add new note
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
      updatedAt: null,
      color: getRandomColor(),
    };
    notes.unshift(newNote); // add to top
  }

  saveAndRender();
  closeNoteDialog();
});

// ===== DELETE NOTE =====
function deleteNote(id) {
  if (confirm('Delete this note?')) {
    notes = notes.filter(note => note.id !== id);
    saveAndRender();
  }
}

// ===== EDIT NOTE =====
function editNote(id) {
  const note = notes.find(note => note.id === id);
  if (!note) return;

  editingId = id;
  dialogTitle.textContent = 'Edit Note';
  noteTitle.value = note.title;
  noteContent.value = note.content;
  noteDialog.showModal();
}

// ===== RENDER NOTES =====
function renderNotes() {
  notesContainer.innerHTML = '';

  if (notes.length === 0) {
    notesContainer.innerHTML = `
      <div class="empty-state">
        <p>📝 No notes yet... Add one!</p>
      </div>
    `;
    return;
  }

  notes.forEach(note => {
    const card = document.createElement('div');
    card.classList.add('note-card');
    card.style.setProperty('--card-color', note.color);

    card.innerHTML = `
      <h3>${escapeHTML(note.title)}</h3>
      <p>${escapeHTML(note.content)}</p>
      <div class="note-meta">
        <span>${note.updatedAt ? '✏️ ' + note.updatedAt : '🕒 ' + note.createdAt}</span>
      </div>
      <div class="note-actions">
        <button class="edit-btn" onclick="editNote(${note.id})">✏️ Edit</button>
        <button class="delete-btn" onclick="deleteNote(${note.id})">🗑️ Delete</button>
      </div>
    `;

    notesContainer.appendChild(card);
  });
}

// ===== SAVE TO LOCALSTORAGE =====
function saveAndRender() {
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

// ===== DARK MODE =====
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeToggleBtn.textContent = '🌙';
  } else {
    themeToggleBtn.textContent = '☀️';
  }
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');

  if (isLight) {
    themeToggleBtn.textContent = '🌙'; // light mode mein → moon dikhao
    localStorage.setItem('theme', 'light');
  } else {
    themeToggleBtn.textContent = '☀️'; // dark mode mein → sun dikhao
    localStorage.setItem('theme', 'dark');
  }
});

// ===== CLOSE DIALOG ON BACKDROP CLICK =====
noteDialog.addEventListener('click', (e) => {
  if (e.target === noteDialog) closeNoteDialog();
});

// ===== HELPERS =====
function getRandomColor() {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#B5EAD7'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ===== INIT =====
initTheme();
renderNotes();