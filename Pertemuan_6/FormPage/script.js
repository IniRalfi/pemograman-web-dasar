function login (){
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById('password').value.trim();
    let hasil = document.getElementById('hasil');
    let role =document.getElementById('role').value;
    let userBenar = "admin";
    let passBenar = "12345";

    if (username === userBenar && password === passBenar) {
        switch(role) {
            case "admin":
                hasil.textContent = "Login berhasil Selamat datang Admin, anda memiliki akses penuh";
                hasil.style.color = "green";
                break
            case "user":
                hasil.textContent = "Login berhasil Selamat datang User, anda memiliki akses terbatas"
                hasil.style.color = "blue";
                break
            case "guest":
                hasil.textContent = "Login berhasil Selamat datang Guest, anda hanya bisa melihat data"
                hasil.style.color = "orange";
                break
            default: 
            hasil.textContent = "Role tidak dikenali";
            hasil.style.color = "red"
        } 


        // container.style.transform = "rotate(90deg)";
        // setInterval(()=> {
        //     container.style.transform = "rotate(120deg)" 
        // container.style.transform = "scale(1.5)"}, 1000);
        // setInterval(()=> container.style.transform = "rotate(180deg)", 2000);
        // setInterval(()=> container.style.transform = "rotate(240deg)", 3000);
        // setInterval(()=> container.style.transform = "rotate(3600deg)", 4000);
    } else if (username === "" && password === "") {
        hasil.textContent = "Username dan password tidak boleh kosong";
        hasil.style.color = "red";
    } else {
            hasil.textContent - "Login gagal USername atau Password salah"
            hasil.style.color = "red";
        }

}