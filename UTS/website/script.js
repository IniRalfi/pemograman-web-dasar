document.addEventListener('DOMContentLoaded', function() {

    // === ELEMEN PENTING ===
    const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const appContainer = document.getElementById('app-container');

    // === LOGIKA LOGIN ===
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nim = document.getElementById('nim').value;
        const password = document.getElementById('password').value;

        if (nim === "mahasiswa" && password === "untan123") {
            loginSection.classList.add('hidden');
            appContainer.classList.remove('hidden');
            // Setelah login berhasil, setup halaman beranda
            setupBeranda();
        } else {
            errorMessage.textContent = "NIM atau Kata Sandi salah!";
        }
    });
    
    // === FUNGSI-FUNGSI UNTUK BERANDA ===
    function setupBeranda() {
        // 1. Tampilkan tanggal hari ini
        displayTodayDate();
        // 2. Buat dan tampilkan kalender
        generateCalendar();
    }

    function displayTodayDate() {
        const targetElement = document.getElementById('display-tanggal');
        const today = new Date(); // Kita gunakan tanggal hari ini
        // Untuk mencocokkan screenshot, kita set tanggal ke 2 Oktober 2025
        // const today = new Date('2025-10-02');
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        targetElement.textContent = today.toLocaleDateString('id-ID', options);
    }

    function generateCalendar() {
        const container = document.getElementById('calendar-container');
        const today = new Date(); // Kita gunakan bulan & tahun saat ini
        // Untuk mencocokkan screenshot, kita set tanggal ke 2 Oktober 2025
        // const today = new Date('2025-10-02');
        
        const month = today.getMonth();
        const year = today.getFullYear();
        
        const firstDay = new Date(year, month, 1).getDay(); // 0=Minggu, 1=Senin..
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const monthName = today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

        // Data dummy untuk tanggal yang ada event/perkuliahan
        const eventDates = [2, 5, 6, 12, 13, 15, 16, 20, 21, 22, 23, 28];
        
        let calendarHTML = `
            <div class="calendar-header">
                <button>‹</button>
                <span>${monthName}</span>
                <button>›</button>
            </div>
            <table>
                <thead>
                    <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
                </thead>
                <tbody>
        `;
        
        let date = 1;
        let tableBodyHTML = '<tr>';
        
        // Sel kosong sebelum tanggal 1
        for (let i = 0; i < firstDay; i++) {
            tableBodyHTML += '<td></td>';
        }
        
        // Sel berisi tanggal
        while (date <= daysInMonth) {
            for (let i = firstDay; i < 7; i++) {
                if (date > daysInMonth) {
                    tableBodyHTML += '<td></td>';
                } else {
                    let isToday = (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ? 'today' : '';
                    let hasEvent = eventDates.includes(date) ? '<div class="event-dot"></div>' : '';

                    tableBodyHTML += `
                        <td>
                            <div class="day-number ${isToday}">${date}</div>
                            ${hasEvent}
                        </td>`;
                    date++;
                }
            }
            tableBodyHTML += '</tr>';
            if (date <= daysInMonth) {
                tableBodyHTML += '<tr>';
            }
            firstDay = 0; // Reset for subsequent rows
        }
        
        calendarHTML += tableBodyHTML + '</tbody></table>';
        container.innerHTML = calendarHTML;
    }
});