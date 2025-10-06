document.addEventListener('DOMContentLoaded', function() {

    // ===================================================================
    // ======================== ELEMEN UTAMA DOM =========================
    // ===================================================================
    const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const appContainer = document.getElementById('app-container');
    const mainNavLinks = document.querySelectorAll('.main-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // ===================================================================
    // ========================== DATA DUMMY =============================
    // ===================================================================

    // --- DATA MATA KULIAH UNTUK HALAMAN JADWAL ---
    const allCourses = {
        'semester-3': [
            { title: 'Kewarganegaraan', class: 'A', lecturers: ['SYARIF REDHA FACHMI AL QADRIE, S.IP,M.A', 'Dr. Ir. H. FEIRA BUDIANSYAH ARIEF, M.SI,PM,ASEAN Eng'], schedule: 'Senin, 13:30 - 15:10', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Pemrograman Web Dasar', class: 'A', lecturers: ['Ferdy Febriyanto, S.Kom, M.Kom'], schedule: 'Senin, 08:20 - 10:00', attendance: 15, totalSessions: 16, highlight: true },
            { title: 'Praktikum Pemrograman Web Dasar', class: 'B', lecturers: ['Ferdy Febriyanto, S.Kom, M.Kom'], schedule: 'Kamis, 10:20 - 13:10', attendance: 16, totalSessions: 16, highlight: true },
            { title: 'Manajemen Rantai Pasok', class: 'A', lecturers: ['NURUL MUTIAH, S.T.,M.T'], schedule: 'Jumat, 07:30 - 10:00', attendance: 13, totalSessions: 16, highlight: false },
            { title: 'Manajemen Proyek SI', class: 'A', lecturers: ['NURUL MUTIAH, S.T.,M.T', 'RIFQI ANUGRAH, S.KOM., M.KOM.'], schedule: 'Selasa, 07:30 - 09:10', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Rekayasa Perangkat Lunak', class: 'B', lecturers: ['RENNY PUSPITA SARI, S.T.,M.T.', 'Dimas Sigit Prasetio, S.Kom.'], schedule: 'Rabu, 07:30 - 10:00', attendance: 15, totalSessions: 16, highlight: false },
            { title: 'Basis Data', class: 'A', lecturers: ['Syahru Rahmayuda, S.Kom, M.Kom'], schedule: 'Senin, 10:20 - 12:50', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Pemrograman Berorientasi Objek', class: 'B', lecturers: ['DIAN PRAWIRA, S.T.,M.Eng.'], schedule: 'Rabu, 13:30 - 15:10', attendance: 16, totalSessions: 16, highlight: false },
            { title: 'Praktikum Pemrograman Berorientasi Objek', class: 'B', lecturers: ['DIAN PRAWIRA, S.T.,M.Eng.'], schedule: 'Jumat, 13:30 - 16:20', attendance: 15, totalSessions: 16, highlight: true },
            { title: 'Kewirausahaan Teknologi Informasi', class: 'B', lecturers: ['IBNUR RUSDI, S.Kom., M.M.'], schedule: 'Kamis, 13:30 - 15:10', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Manajemen Pengetahuan', class: 'B', lecturers: ['IBNUR RUSDI, S.Kom., M.M.'], schedule: 'Selasa, 13:30 - 16:00', attendance: 15, totalSessions: 16, highlight: false },
        ],
        'semester-2': [
            { title: 'Statistika dan Probabilitas', class: 'A', lecturers: ['DR YUNDARI, M.Sc.', 'YUYUN EKA PRATIWI, S.Si, M.Aktr'], schedule: 'Jumat, 07:30 - 10:00', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Algoritma dan Struktur Data', class: 'A', lecturers: ['ILHAMSYAH, S.Si, M.Cs.'], schedule: 'Rabu, 07:30 - 09:10', attendance: 15, totalSessions: 16, highlight: true },
            { title: 'Praktikum Algoritma dan Struktur Data', class: 'A', lecturers: ['ILHAMSYAH, S.Si, M.Cs.'], schedule: 'Kamis, 13:30 - 16:20', attendance: 16, totalSessions: 16, highlight: true },
            { title: 'Desain dan Manajemen Jaringan', class: 'A', lecturers: ['Ferdi Febriyanto, S.Kom, M.Kom'], schedule: 'Kamis, 10:20 - 12:50', attendance: 13, totalSessions: 16, highlight: false },
            { title: 'Manajemen Hubungan Pelanggan', class: 'A', lecturers: ['NURUL MUTIAH, S.T., M.T'], schedule: 'Kamis, 07:30 - 09:10', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Perancangan UI/UX', class: 'A', lecturers: ['IBNUR RUSDI, S.Kom, M.M.'], schedule: 'Selasa, 10:20 - 12:00', attendance: 15, totalSessions: 16, highlight: false },
            { title: 'Analisis dan Perancangan Sistem Informasi', class: 'A', lecturers: ['RENNY PUSPITA SARI, S.T., M.T.'], schedule: 'Rabu, 10:20 - 12:50', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Agama', class: 'A-ISL', lecturers: ['BUSTAMI, M. Pd'], schedule: 'Senin, 07:30 - 10:00', attendance: 16, totalSessions: 16, highlight: false },
            { title: 'PANCASILA', class: 'A', lecturers: ['Riani Septi Hartini, S.H., M.H.'], schedule: 'Senin, 10:20 - 12:00', attendance: 15, totalSessions: 16, highlight: false },
        ],
        'semester-1': [
            { title: 'Aljabar Linear', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Selasa, 10:20 - 12:00', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Pemrograman Komputer', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Rabu, 13:30 - 15:00', attendance: 15, totalSessions: 16, highlight: true },
            { title: 'Praktikum Pemrograman Komputer', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Jumat, 13:30 - 16:20', attendance: 16, totalSessions: 16, highlight: true },
            { title: 'Manajemen dan Organisasi', class: 'B', lecturers: ['Dosen Pengampu'], schedule: 'Rabu, 07:30 - 10:00', attendance: 13, totalSessions: 16, highlight: false },
            { title: 'Manajemen Proses Bisnis', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Kamis, 08:20 - 10:00', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Pengantar Teknologi dan Sistem Informasi', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Selasa, 07:30 - 10:00', attendance: 15, totalSessions: 16, highlight: false },
            { title: 'Bahasa Indonesia', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Senin, 12:30 - 15:00', attendance: 14, totalSessions: 16, highlight: false },
            { title: 'Matematika', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Jumat, 07:30 - 10:00', attendance: 16, totalSessions: 16, highlight: false },
            { title: 'Bahasa Inggris', class: 'A', lecturers: ['Dosen Pengampu'], schedule: 'Senin, 10:20 - 12:00', attendance: 15, totalSessions: 16, highlight: false },
        ]
    };

    // --- DATA "PERLU DIKERJAKAN" UNTUK HALAMAN JADWAL ---
    const todoData = [
        { type: 'UTS', title: 'Praktikum Pemrograman Web Dasar (B)', deadline: 'Batas waktu: Kamis 2 Oktober 2025, 13:00' }
    ];

    // --- DATA NILAI UNTUK HALAMAN HASIL STUDI ---
    const dataNilai = {
        'semester-3': [
            { kode: 'MKWK3', mk: 'Kewarganegaraan', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'SI-3014', mk: 'Pemrograman Web Dasar', sks: 2, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'SI-3015', mk: 'Praktikum Pemrograman Web Dasar', sks: 1, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'SI-3016', mk: 'Manajemen Rantai Pasok', sks: 3, nilaiHuruf: 'B', nilaiAngka: 3.00 },
            { kode: 'SI-3017', mk: 'Manajemen Proyek SI', sks: 2, nilaiHuruf: 'B+', nilaiAngka: 3.50 },
            { kode: 'SI-3018', mk: 'Rekayasa Perangkat Lunak', sks: 3, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'SI-3019', mk: 'Basis Data', sks: 3, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'SI-3020', mk: 'Pemrograman Berorientasi Objek', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'SI-3021', mk: 'Praktikum Pemrograman Berorientasi Objek', sks: 1, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'SI-3022', mk: 'Kewirausahaan Teknologi Informasi', sks: 2, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'SI-5031', mk: 'Manajemen Pengetahuan', sks: 3, nilaiHuruf: 'B+', nilaiAngka: 3.50 },
        ],
        'semester-2': [
            { kode: 'IKSI-211', mk: 'Statistika dan Probabilitas', sks: 3, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-242', mk: 'Algoritma dan Struktur Data', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-243', mk: 'Praktikum Algoritma dan Struktur Data', sks: 1, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-250', mk: 'Desain dan Manajemen Jaringan', sks: 3, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'IKSI-262', mk: 'Manajemen Hubungan Pelanggan', sks: 2, nilaiHuruf: 'B+', nilaiAngka: 3.50 },
            { kode: 'IKSI-280', mk: 'Perancangan UI/UX', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-281', mk: 'Analisis dan Perancangan Sistem Informasi', sks: 3, nilaiHuruf: 'B+', nilaiAngka: 3.50 },
            { kode: 'MKWU1', mk: 'Agama', sks: 3, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'MKWU2', mk: 'PANCASILA', sks: 2, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            
        ],
        'semester-1': [
            { kode: 'IKSI-110', mk: 'Aljabar Linear', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-140', mk: 'Pemrograman Komputer', sks: 2, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'IKSI-141', mk: 'Praktikum Pemrograman Komputer', sks: 1, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'IKSI-160', mk: 'Manajemen dan Organisasi', sks: 3, nilaiHuruf: 'B', nilaiAngka: 3.00 },
            { kode: 'IKSI-161', mk: 'Manajemen Proses Bisnis', sks: 2, nilaiHuruf: 'B+', nilaiAngka: 3.50 },
            { kode: 'IKSI-170', mk: 'Pengantar Teknologi dan Sistem Informasi', sks: 3, nilaiHuruf: 'A-', nilaiAngka: 3.75 },
            { kode: 'MKWU41K', mk: 'Bahasa Indonesia', sks: 3, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'MPU-101', mk: 'Matematika', sks: 3, nilaiHuruf: 'A', nilaiAngka: 4.00 },
            { kode: 'UMG-105', mk: 'Bahasa Inggris', sks: 2, nilaiHuruf: 'A', nilaiAngka: 4.00 },
        ]
    };

    // --- DATA BIODATA MAHASISWA ---
    const dataMahasiswa = {
        pribadi: {
            namaLengkap: 'RAFLI PRATAMA', nim: 'H11101241008', jenisKelamin: 'Laki-laki', ttl: 'Pontianak, 20 Desember 2005', agama: 'Islam', email: 'h1101241008@student.untan.ac.id', hp: '081234567890'
        },
        akademik: {
            prodi: 'S1 - Sistem Informasi', fakultas: 'MIPA', tahunMasuk: '2024', status: 'Aktif', dosenPa: 'Renny Puspita Sari, S.T, M.T'
        },
        orangTua: {
            namaAyah: 'Budi Santoso', pekerjaanAyah: 'Wiraswasta', namaIbu: 'Siti Aminah', pekerjaanIbu: 'Ibu Rumah Tangga', alamat: 'Jl. Merdeka No. 10, Pontianak, Kalimantan Barat'
        }
    };


    // ===================================================================
    // ========================= LOGIKA INTI ===========================
    // ===================================================================

    // --- LOGIKA LOGIN ---
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (loginForm.nim.value === "mahasiswa" && loginForm.password.value === "untan123") {
            loginSection.classList.add('hidden');
            appContainer.classList.remove('hidden');
            setupBeranda();
        }  else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = "NIM atau Kata Sandi salah!";
    errorMessage.classList.remove('shake-animation');
    void errorMessage.offsetWidth; 
    errorMessage.classList.add('shake-animation');
}
    });

    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            mainNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('data-target');
            
            contentSections.forEach(section => section.classList.add('hidden'));
            
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            if (targetId === 'beranda') {
                setupBeranda();
            } else if (targetId === 'jadwal') {
                setupJadwalPage();
            } else if (targetId === 'hasil-studi') {
                setupHasilStudiPage();
            } else if (targetId === 'biodata') {
                setupBiodataPage();
            }
        });
    });


    // ===================================================================
    // ================== FUNGSI SETUP UNTUK SETIAP HALAMAN ================
    // ===================================================================
    function setupBeranda() {
        displayTodayDate();
        generateCalendar();
    }

    function setupJadwalPage() {
        renderWeeklyCalendar();
        renderTodoList();
        
        const periodSelector = document.getElementById('period-selector');
        renderKelasCards(periodSelector.value); // Render kelas untuk periode yang terpilih
        
        // Hapus event listener lama agar tidak menumpuk, lalu tambahkan yang baru
        periodSelector.replaceWith(periodSelector.cloneNode(true));
        document.getElementById('period-selector').addEventListener('change', (e) => {
            renderKelasCards(e.target.value);
        });
    }

    function setupHasilStudiPage() {
        renderOverallSummary();
        const semesterSelector = document.getElementById('semester-selector-hasil');
        renderNilaiTable(semesterSelector.value);

        semesterSelector.replaceWith(semesterSelector.cloneNode(true));
        document.getElementById('semester-selector-hasil').addEventListener('change', (e) => {
            renderNilaiTable(e.target.value);
        });
    }

    function setupBiodataPage() {
        renderBiodata();
        setupBiodataTabs();
    }


    // ===================================================================
    // ================== FUNGSI RENDER HALAMAN BERANDA ==================
    // ===================================================================
    function displayTodayDate() {
        const targetElement = document.getElementById('display-tanggal');
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        targetElement.textContent = today.toLocaleDateString('id-ID', options);
    }

    function generateCalendar() {
        const container = document.getElementById('calendar-container');
        if (!container) return; // Jangan jalankan jika tidak di halaman beranda
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const monthName = today.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
        const eventDates = [2, 5, 6, 12, 13, 15, 16, 20, 21, 22, 23, 28];
        
        let calendarHTML = `<div class="calendar-header"><button>‹</button><span>${monthName}</span><button>›</button></div><table><thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody>`;
        let date = 1;
        let tableBodyHTML = '<tr>';
        for (let i = 0; i < firstDay; i++) { tableBodyHTML += '<td></td>'; }
        while (date <= daysInMonth) {
            for (let i = firstDay; i < 7; i++) {
                if (date > daysInMonth) { tableBodyHTML += '<td></td>'; } 
                else {
                    let isToday = (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ? 'today' : '';
                    let hasEvent = eventDates.includes(date) ? '<div class="event-dot"></div>' : '';
                    tableBodyHTML += `<td><div class="day-number ${isToday}">${date}</div>${hasEvent}</td>`;
                    date++;
                }
            }
            tableBodyHTML += '</tr>';
            if (date <= daysInMonth) { tableBodyHTML += '<tr>'; }
            firstDay = 0;
        }
        calendarHTML += tableBodyHTML + '</tbody></table>';
        container.innerHTML = calendarHTML;
    }


    // ===================================================================
    // ================== FUNGSI RENDER HALAMAN JADWAL ===================
    // ===================================================================
    function renderWeeklyCalendar() {
        const container = document.getElementById('weekly-days-container');
        const dateDisplay = document.getElementById('current-date-display-jadwal');
        const today = new Date();
        const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        
        dateDisplay.textContent = `Hari ini: ${today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`;
        
        let calendarHTML = '';
        for (let i = 0; i < 7; i++) {
            let day = new Date(today);
            day.setDate(today.getDate() - today.getDay() + i);
            let isActive = day.getDate() === today.getDate() ? 'active' : '';
            calendarHTML += `<div class="day-item ${isActive}"><div class="day-name">${days[day.getDay()]}</div><div class="day-date">${String(day.getDate()).padStart(2, '0')}</div></div>`;
        }
        container.innerHTML = calendarHTML;
    }

    function renderTodoList() {
        const container = document.getElementById('todo-list-container');
        container.innerHTML = todoData.map(item => `<div class="todo-item"><div class="todo-icon">${item.type}</div><div class="todo-details"><h5>${item.title}</h5><p>${item.deadline}</p></div></div>`).join('');
    }

    function renderKelasCards(period) {
        const container = document.getElementById('kelas-grid-container');
        const summary = document.getElementById('kelas-summary');
        const courses = allCourses[period] || [];
        
        summary.textContent = `Anda memiliki ${courses.length} kelas sesuai jadwal perkuliahan di SIAKAD pada periode ini`;
        if (!courses.length) {
            container.innerHTML = '<p>Tidak ada data mata kuliah untuk periode ini.</p>'; return;
        }

        container.innerHTML = courses.map(course => {
            const progress = (course.attendance / course.totalSessions) * 100;
            const lecturersHTML = course.lecturers.map(l => `<p>${l}</p>`).join('');
            return `<div class="kelas-card ${course.highlight ? 'highlight' : ''}"><div class="kelas-card-content"><h4>${course.title} (${course.class})</h4><div class="info-item">👤 ${lecturersHTML}</div><div class="info-item">🕒 ${course.schedule}</div><div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${progress}%;"></div></div></div><div class="kelas-card-footer">Kehadiran: ${course.attendance} dari ${course.totalSessions} sesi</div></div>`;
        }).join('');
    }

    // ===================================================================
    // ================= FUNGSI RENDER HALAMAN HASIL STUDI ===============
    // ===================================================================
    function renderOverallSummary() {
        let totalSks = 0, totalBobot = 0;
        for (const semester in dataNilai) {
            dataNilai[semester].forEach(matkul => {
                totalSks += matkul.sks;
                totalBobot += matkul.sks * matkul.nilaiAngka;
            });
        }
        const ipk = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : 0;
        document.getElementById('summary-sks').textContent = totalSks;
        document.getElementById('summary-ipk').textContent = ipk;
    }

    function renderNilaiTable(semesterKey) {
        const container = document.getElementById('hasil-studi-table-container');
        const nilaiSemester = dataNilai[semesterKey] || [];
        if (nilaiSemester.length === 0) { container.innerHTML = "<p>Data nilai untuk semester ini tidak tersedia.</p>"; return; }
        let totalSksSemester = 0, totalBobotSemester = 0;
        const tableRows = nilaiSemester.map(matkul => {
            const bobot = matkul.sks * matkul.nilaiAngka;
            totalSksSemester += matkul.sks;
            totalBobotSemester += bobot;
            return `<tr><td>${matkul.kode}</td><td>${matkul.mk}</td><td>${matkul.sks}</td><td>${matkul.nilaiHuruf}</td><td>${matkul.nilaiAngka.toFixed(2)}</td><td>${bobot.toFixed(2)}</td></tr>`;
        }).join('');
        const ips = totalSksSemester > 0 ? (totalBobotSemester / totalSksSemester).toFixed(2) : 0;
        container.innerHTML = `<table class="hasil-studi-table"><thead><tr><th>Kode MK</th><th>Mata Kuliah</th><th>SKS</th><th>Nilai Huruf</th><th>Nilai Angka</th><th>Bobot</th></tr></thead><tbody>${tableRows}</tbody><tfoot><tr><td colspan="2">Total SKS Semester</td><td>${totalSksSemester}</td><td colspan="2">Indeks Prestasi Semester (IPS)</td><td>${ips}</td></tr></tfoot></table>`;
    }

    // ===================================================================
    // ================== FUNGSI RENDER HALAMAN BIODATA ==================
    // ===================================================================
    function renderBiodata() {
        const { pribadi, akademik, orangTua } = dataMahasiswa;
        document.getElementById('bio-nama-display').textContent = pribadi.namaLengkap;
        document.getElementById('bio-nim-display').textContent = `NIM: ${pribadi.nim}`;
        document.getElementById('bio-nama-lengkap').textContent = `: ${pribadi.namaLengkap}`;
        document.getElementById('bio-jenis-kelamin').textContent = `: ${pribadi.jenisKelamin}`;
        document.getElementById('bio-ttl').textContent = `: ${pribadi.ttl}`;
        document.getElementById('bio-agama').textContent = `: ${pribadi.agama}`;
        document.getElementById('bio-email').textContent = `: ${pribadi.email}`;
        document.getElementById('bio-hp').textContent = `: ${pribadi.hp}`;
        document.getElementById('bio-nim-akademik').textContent = `: ${pribadi.nim}`;
        document.getElementById('bio-prodi').textContent = `: ${akademik.prodi}`;
        document.getElementById('bio-fakultas').textContent = `: ${akademik.fakultas}`;
        document.getElementById('bio-tahun-masuk').textContent = `: ${akademik.tahunMasuk}`;
        document.getElementById('bio-status').textContent = `: ${akademik.status}`;
        document.getElementById('bio-dosen-pa').textContent = `: ${akademik.dosenPa}`;
        document.getElementById('bio-nama-ayah').textContent = `: ${orangTua.namaAyah}`;
        document.getElementById('bio-pekerjaan-ayah').textContent = `: ${orangTua.pekerjaanAyah}`;
        document.getElementById('bio-nama-ibu').textContent = `: ${orangTua.namaIbu}`;
        document.getElementById('bio-pekerjaan-ibu').textContent = `: ${orangTua.pekerjaanIbu}`;
        document.getElementById('bio-alamat-ortu').textContent = `: ${orangTua.alamat}`;
    }

    function setupBiodataTabs() {
        const tabLinks = document.querySelectorAll('.tab-link-biodata');
        const tabContents = document.querySelectorAll('.biodata-tab-content');
        tabLinks.forEach(link => {
            link.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                tabLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                tabContents.forEach(content => {
                    content.classList.toggle('active', content.id === `tab-${tabId}`);
                });
            });
        });
    }

});