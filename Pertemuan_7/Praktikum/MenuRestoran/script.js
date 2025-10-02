const menus = [
            {
                title: 'Nasi Goreng',
                desc: "Nasi gorang dengan telur nabil, ayam, dan sayuran",
                price: "Rp25.000"
            },
            {
                title: 'Nasi Goreng Jawa',
                desc: "Nasi gorang dengan telur nabil, ayam ireng, dan sayuran",
                price: "Rp35.000"
            },
            {
                title: 'Babi Rebus',
                desc: "Babi rebus dengan kuah premium dimasak hingga tulangnya meledak",
                price: "Rp15.000"
            },
            {
                title: 'Nasi Lemak',
                desc: "Nasi lemak tanpa ikan bilis",
                price: "Rp25.000"
            },
            {
                title: 'Roti Infest',
                desc: "Roti spesial dari tangan sang ketua INFEST",
                price: "Rp100.000"
            },
        ];

        const menuContainer = document.getElementById("menu-container");
        const detailBox = document.getElementById("detail");
        const detailTitle = document.getElementById('detail-title');
        const detailDesc = document.getElementById('detail-desc');
        const detailPrice = document.getElementById('detail-price');

        // Tampilkan daftar menu
        menus.forEach((menu, i) => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.innerHTML = `
                <div class="menu-title">${menu.title}</div>
                <div class="menu-price">${menu.price}</div>
            `;
            div.onclick = () => {
                detailTitle.textContent = menu.title;
                detailDesc.textContent = menu.desc;
                detailPrice.textContent = menu.price;
                detailBox.style.display = 'block';
            };
            menuContainer.appendChild(div);
        });