// ID-ul evenimentului pentru care vrei să obții detalii
const eventId = '911553159037';

// Tokenul de acces pentru API-ul Eventbrite
const token = '5SH7X3DPA7L6JJTBMZPT'; // Înlocuiește cu tokenul tău de acces real

// URL-ul pentru a obține detalii despre eveniment
const apiUrl = `https://www.eventbriteapi.com/v3/events/${eventId}/`;

// Cerere GET către API-ul Eventbrite pentru a obține detalii despre eveniment
fetch(apiUrl, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
.then(response => response.json())
.then(data => {
    // Extrage detaliile evenimentului din răspunsul API
    const eventDetails = `
        <h2>${data.name.text}</h2>
        <p><strong>Start:</strong> ${new Date(data.start.local).toLocaleString()}</p>
        <p><strong>End:</strong> ${new Date(data.end.local).toLocaleString()}</p>
        <p><strong>Descriere:</strong> ${data.description.text}</p>
        <!-- Alte detalii ale evenimentului pot fi adăugate aici -->
    `;

    // Afișează detaliile evenimentului pe pagină
    document.getElementById('eventDetails').innerHTML = eventDetails;
})
.catch(error => {
    console.error('Eroare:', error);
    // Afișează un mesaj de eroare în cazul în care cererea către API eșuează
    document.getElementById('eventDetails').innerHTML = 'Failed to fetch event details.';
});
