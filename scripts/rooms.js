/* rooms.js – filter + Book Now redirect */
document.addEventListener('DOMContentLoaded', () => {
  /* Filter buttons */
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.dataset.filter; // all / deluxe / suite / family
      document.querySelectorAll('#roomGrid .room-card').forEach(card => {
        card.style.display = (type === 'all' || card.dataset.type === type) ? 'block' : 'none';
      });
    })
  );

  /* Book Now redirect (reuse pattern) */
  document.querySelectorAll('.book-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const id = e.currentTarget.closest('.room-card').dataset.roomId;
      window.location.href = `book-room.html?room=${id}`;
    })
  );
});
// scripts/rooms.js