function check() {
    let input = document.getElementById("input").value.toLowerCase();
    let filteredData = data.filter((e) => e.nama_lengkap.toLowerCase().includes(input));
    var result = "";
    if (Array.isArray(filteredData) && filteredData.length) {
        filteredData.forEach((value) => {
            result += `
            <h3>${value.nama_lengkap}</h3>
            <table>
              <tr>
                <td>Nama Lengkap</td>
                <td>:</td>
                <td>${value.nama_lengkap || '-'}</td>
              </tr>
              <tr>
                <td>Nama Panggilan</td>
                <td>:</td>
                <td>${value.nama_panggilan || '-'}</td>
              </tr>
              <tr>
                <td>NIM</td>
                <td>:</td>
                <td>${value.nim || '-'}</td>
              </tr>
              <tr>
                <td>Nomor Telepon</td>
                <td>:</td>
                <td>${value.nomor_telepon || '-'}</td>
              </tr>
              <tr>
                <td>ID Line</td>
                <td>:</td>
                <td>${value.id_line || '-'}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>${value.email || '-'}</td>
              </tr>
              <tr>
                <td>Hobi</td>
                <td>:</td>
                <td>${value.hobi || '-'}</td>
              </tr>
              <tr>
                <td>Tanggal Lahir</td>
                <td>:</td>
                <td>${value.tanggal_lahir || '-'}</td>
              </tr>
              </table>
            `;
        });
    } else {
        result = `<h3>Data tidak ditemukan!</h3>`;

    }
    document.getElementById("biodata").innerHTML = result;
}
