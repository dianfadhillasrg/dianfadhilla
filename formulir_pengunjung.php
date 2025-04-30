<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulir Data Pengunjung Perpustakaan Dian Fadhilla Siregar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        .form-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            margin: auto;
        }
        table {
            width: 100%;
            margin: 20px 0;
        }
        td {
            padding: 10px;
        }
        input[type="text"], input[type="email"], input[type="tel"], select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
    background-color: #0d3a71;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
        }
        input[type="submit"]:hover {
            background-color: #4cae4c;
        }
    </style>
    <script>
        function toggleField() {
            var jenis = document.getElementById("jenis_pengunjung").value;
            if (jenis === "Mahasiswa") {
                document.getElementById("nimField").style.display = "table-row";
                document.getElementById("nipField").style.display = "none";
            } else if (jenis === "Dosen") {
                document.getElementById("nimField").style.display = "none";
                document.getElementById("nipField").style.display = "table-row";
            } else {
                document.getElementById("nimField").style.display = "none";
                document.getElementById("nipField").style.display = "none";
            }
        }
    </script>
</head>
<body>

<h2>Formulir Data Pengunjung Perpustakaan Dian Fadhilla Siregar</h2>
<div class="form-container">
    <form method="post" action="inputdosen.php">
        <table>
            <tr>
                <td>Nama</td>
                <td><input type="text" name="nama" required></td>
            </tr>
            <tr id="nimField" style="display:none;">
                <td>NIM</td>
                <td><input type="text" name="nim"></td>
            </tr>
            <tr id="nipField" style="display:none;">
                <td>NIP</td>
                <td><input type="text" name="nip"></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" required></td>
            </tr>
            <tr>
                <td>Telepon</td>
                <td><input type="tel" name="telepon" required></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>
                    <select name="jenis_kelamin" required>
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Jenis Pengunjung</td>
                <td>
                    <select name="jenis_pengunjung" id="jenis_pengunjung" onchange="toggleField()" required>
                        <option value="">Pilih Jenis Pengunjung</option>
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Dosen">Dosen</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Kirim Data">
                </td>
            </tr>
        </table>
    </form>
</div>

</body>
</html>
