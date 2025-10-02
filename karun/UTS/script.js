 // Data awal menu
        const menus = [
            { title: "Nasi Goreng", desc: "Nasi goreng dengan telur, ayam, dan sayuran.", price: "Rp 25.000" },
            { title: "Mie Ayam", desc: "Mie dengan potongan ayam dan sayur segar.", price: "Rp 20.000" },
            { title: "Sate Ayam", desc: "Sate ayam dengan bumbu kacang khas.", price: "Rp 30.000" },
            { title: "Es Teh Manis", desc: "Minuman segar es teh manis.", price: "Rp 8.000" },
            { title: "Jus Alpukat", desc: "Jus alpukat segar dengan susu coklat.", price: "Rp 15.000" }
        ];

        const menuContainer = document.getElementById("menu-container");
        const detailBox = document.getElementById("detail");
        const detailTitle = document.getElementById("detail-title");
        const detailDesc = document.getElementById("detail-desc");
        const detailPrice = document.getElementById("detail-price");

        // Fungsi render menu
        function renderMenu(menu) {
            const item = document.createElement("div");
            item.className = "menu-item";

            const title = document.createElement("div");
            title.className = "menu-title";
            title.textContent = menu.title;

            const price = document.createElement("div");
            price.className = "menu-price";
            price.textContent = menu.price;

            item.appendChild(title);
            item.appendChild(price);

            // Event klik untuk detail
            item.addEventListener("click", () => {
                detailTitle.textContent = menu.title;
                detailDesc.textContent = menu.desc;
                detailPrice.textContent = menu.price;
                detailBox.style.display = "block";
                detailBox.scrollIntoView({ behavior: "smooth" });
            });

            menuContainer.appendChild(item);
        }

        // Render menu awal
        menus.forEach(renderMenu);

        // Event tambah menu baru
        document.getElementById("addMenu").addEventListener("click", () => {
            const title = document.getElementById("title").value.trim();
            const desc = document.getElementById("desc").value.trim();
            const price = document.getElementById("price").value.trim();

            if (title && desc && price) {
                const newMenu = { title, desc, price };
                renderMenu(newMenu);

                // Reset form
                document.getElementById("title").value = "";
                document.getElementById("desc").value = "";
                document.getElementById("price").value = "";
            } else {
                alert("Harap isi semua field menu!");
            }
        });