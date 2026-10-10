const questions = [
    {
        question: "Apa tanda penghabisan jalur utama di stasiun ?",
        options: ["Semboyan 7.", "Semboyan 3.", "Semboyan 18.", "Jawaban a, b dan c benar."],
        answer: 3
    },
    {
        question: "Apa pengertian jalur simpan ?",
        options: ["Jalur utama di emplasemen yang dilengkapi dengan perintang atau pelalau.", "Jalur utama di emplasemen untuk menyimpan sarana yang dilengkapi perintang atau pelalau.", "Jalur di emplasemen yang dipergunakan untuk menyimpan sarana kereta api yang dilengkapi perintang atau pelalau.", "Jawaban a, b, dan c benar."],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan sinyal ?",
        options: ["Semboyan tetap yang diperagakan melalui alat berupa wujud, warna, dan/atau cahaya.", "Semboyan tetap yang memberitahukan kondisi jalur, pembeda, batas dan petunjuk tertentu.", "Semboyan yang disampaikan oleh pengatur perjalanan kereta api atau petugas atau pihak lain dalam bentuk peragaan, bunyi, atau alat tertentu.", "Peralatan yang memberi isyarat ijin masuk, berangkat, dan/atau langsung di suatu stasiun"],
        answer: 0
    },
    {
        question: "Untuk menyiapkan dinas buka (Tentang Peralatan Persinyalan), Ppka melakukan tindakan apa saja ?",
        options: ["Melayani peralatan persinyalan pada posisi awal untuk dinas buka sesuai dengan PDPS stasiun yang bersangkutan.", "Melayani kunci dinas tutup sesuai dengan PDPS stasiun yang bersangkutan.", "Mencoba hubungan telepon antarstasiun dengan kedua pihak stasiun.", "Ketentuan a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Serah terima dinasan PPKA atau PAP pada akhir dinasan dilakukan tanpa perantara dan dicatat dalam apa ?",
        options: ["IJK dan buku warta WK (Khusus untuk serah terima PPKA)", "Buku Kelambatan KA dan buku serah terima", "buku warta WK (Khusus untuk serah terima PPKA), dan buku serah terima", "Buku Kelambatan KA dan buku warta WK (Khusus untuk serah terima PPKA)"],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan jalur simpan ?",
        options: ["Jalur kereta api diemplasemen yang dipergunakan untuk memberangkatkan dan menerima kedatangan kereta api dan dapat juga dipergunakan untuk melaksanakan kegiatan langsir.", "Jalur diemplasemen yang dipergunakan untuk menyimpan sarana kereta api dan dilengkapi dengan perintang atau pelalau", "Jalur diemplasemen yang bukan jalur utama dan hanya dipergunakan untuk melaksanakan kegiatan langsir", "Jalur diemplasemen yang hanya dipergunakan untuk menangkap gelundungan sarana kereta api."],
        answer: 1
    },
    {
        question: "Ditinjau dari sisi urusan perjalanan kereta api, pada petak jalan jalur tunggal maupun jalur ganda, waktu kerja selama 24 jam dapat diatur dengan cara bagaimana ?",
        options: ["waktu kerja buka, berlaku semua ketentuan dalam peraturan dinas 19 jiid 1 kecuali Ketentuan perjalanan kereta api pada waktu kerja tutup.", "waktu kerja tutup, berlaku Ketentuan perjalanan kereta api pada waktu kerja tutup (yang diatur dalam BAB VI PD 19 jilid 1);", "waktu kerja perawatan, berlaku ketentuan sebagaimana diatur dalam PTDO oleh Direksi atas usulan Pimpinan Daerah.", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Pada gambar emplasemen yang membedakan jalur utama dengan jalur langsir",
        options: ["Penomoran jalur, Garis penggambaran tiap-tiap jalur", "Daftar jalur", "Letak sinyal dan wesel", "Jenis persinyalan"],
        answer: 0
    },
    {
        question: "Apabila peralatan penggerak lidah wesel rusak, maka kedua lidah wesel tersebut harus di jamin kedudukannya dengan menggunakan suatu alat. Apa nama alat yang dimaksud ?",
        options: ["Baud dan Mur.", "Kopel Stang .", "Apitan lidah wesel ( tongklem )", "Jawaban a, b dan c benar"],
        answer: 2
    },
    {
        question: "Bagaimana caranya memasukkan KA dengan kecepatan terbatas ?",
        options: ["Untuk sinyal electrik, dengan sinyal darurat dan untuk sinyak mekanik dengan cara memperlihatkan semboyan 4A.", "Dengan menggunakan siaran Radio Lok.", "Dijemput.", "Jawaban a, b dan c salah"],
        answer: 0
    },
    {
        question: "Pada persinyalan mekanik apabila terjadi wesel terlanggar, apa tindakan yang harus dilakukan oleh Ppka ?",
        options: ["KA diperintahkan maju", "Periksa kondisi dilokasi jika tidak ada anjogan, KA diperintahkan maju sampai seluruh rangkaian melewati wesel dan periksa kondisi fisik peralatan wesel.", "KA diperintahkan maju dan dapat diperintahkan mundur", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Apa tindakan PPKA apabila terjadi kasus kawat tarik wesel putus ?",
        options: ["Melapor ke UPT jalan rel", "Melaporkan ke UPT Sintelis dan mengikat dalam kedudukan lurus dengan apitan lidah wesel", "Pernyataan a dan b salah", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Bila lampu sinyal pembatas kecepatan putus menyebabkan sinyal masuk berubah ke aspek merah, tindakan Pengatur Perjalan Kereta Api bagaimana ?",
        options: ["Melayani pembentukan rute kereta api masuk dengan semboyan 6A, setelah KA berada didepan sinyal masuk", "Rute darurat langsung dibentuk.", "Sinyal darurat langsung diberikan", "Jawaban a, b dan c benar"],
        answer: 0
    },
    {
        question: "Pada stasiun yang menggunakan persinyalan elektrik, bagaimana prosedur normalisasi bila wesel yang dilanggar sudah diperiksa tidak terdapat kerusakan ?",
        options: ["Jika tidak ada kerusakan dapat di balik dengan tombol TKW", "Harus diengkol dikembalikan kekedudukan semula dan di balik untuk uji dengan tombol TKW", "Dibalik menggunakan engkol", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Pada saat hubungan blok normal, bagaimana PPKA dapat mengetahui ada tidak adanya kereta api di petak blok ?",
        options: ["Mengecek di buku warta kereta api", "Mengecek pada indikator hubungan blok di layar VDU atau tingkapan hubungan blok di pesawat blok", "Melihat ke jalur yang ada di emplasemen", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Bagaimana prosedur normalisasi bila wesel yang dilanggar sudah diperiksa tidak terdapat kerusakan ?",
        options: ["Roda hendel langsung di balik", "Roda hendel wesel dikembalikan keposisi semula dengan Tuas Pembantu", "Hendel wesel bisa dilayani normal", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Jika persinyalan terganggu, beberapa tindakan apa saja yang harus dilakukan oleh PPKA ?",
        options: ["Memahami jenis gangguan kemudian memperbaikinya sendiri walau dengan itu harus memutus plombir", "Memahami jenis gangguan, mencatat di buku gangguan dan melapor kepada penguasa persinyalan untuk segera diperbaiki, dan kabarkan juga ke PPKP", "Melapor kepada PUK/PUG untuk perbaikan.", "Jawaban a, b dan c benar"],
        answer: 1
    },
    {
        question: "Apa yang dimaksud dengan jalur utama ?",
        options: ["Jalur kereta api diemplasemen yang dipergunakan untuk memberangkatkan dan menerima kedatangan kereta api dan dapat juga dipergunakan untuk melaksanakan kegiatan langsir.", "Jalur diemplasemen yang dipergunakan untuk menyimpan sarana kereta api dan dilengkapi dengan perintang atau pelalau", "Jalur diemplasemen yang bukan jalur utama dan hanya dipergunakan untuk melaksanakan kegiatan langsir", "Jalur diemplasemen yang hanya dipergunakan untuk menangkap gelundungan sarana kereta api."],
        answer: 0
    },
    {
        question: "Apa saja inventaris yang harus tersedia di ruang PPKA ?",
        options: ["Pet merah, papan budar semboyan 40", "Tongklem, tuas pengungkit", "Buku PTDO, Daftar Jalur, PDPS", "Pernyataan a, b dan c benar"],
        answer: 3
    },
    {
        question: "Apa yang dimaksud dengan Gapeka ?",
        options: ["Grafik perjalanan kereta api", "Lukisan tentang perjalanan perjalanan kereta api biasa", "Lukisan tentang perjalanan perjalanan kereta api fakultatif", "Pernyataan a,b dan c benar"],
        answer: 0
    },
    {
        question: "Apa yang Termasuk Peraturan perjalanan KA ?",
        options: ["Warta Maklumat", "Daftar Waktu", "Maklumat Perjalanan KA", "Pernyataan a,b dan c benar"],
        answer: 3
    },
    {
        question: "Yang termasuk dalam katagori warta perjalanan adalah warta yang disampaikan dengan alat komunikasi yang terekam, yaitu meliputi apa saja ?",
        options: ["Warta aman, warta masuk dan warta berangkat.", "Pemindahan persilangan dan penyusulan.", "Pemindahan persilangan, pemindahan penyusulan, berjalan jalur kiri, penetapan perjalanan, pengumuman perjalanan dan pembatalan warta – warta tersebut.", "Jawaban a dan b benar."],
        answer: 2
    },
    {
        question: "Peraturan perjalanan kereta api dapat berupa apa saja ?",
        options: ["Grafik Perjalanan Kereta Api .", "Maklumat pelayanan kereta api .", "Warta Perjalanan .", "Buku djadwal waktu."],
        answer: 0
    },
    {
        question: "Setiap kereta api ditetapkan dalam peraturan perjalanan yang isinya berupa apa saja ?",
        options: ["nomor (angka atau angka dan huruf) dan jenis kereta api;", "jam berangkat, jam datang, atau jam langsung di stasiun;", "persilangan dan penyusulan .", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Grafik Perjalanan Kereta Api (Gapeka), yang berisi apa saja ?",
        options: ["gambar garis perjalanan kereta api biasa dan kereta api fakultatif;", "beberapa keterangan penting yang berkaitan dengan urusan perjalanan kereta api;", "tanggal mulai berlakunya.", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Gapeka dapat diubah dengan dengan cara apa ?",
        options: ["perubahan dan tambahan (P dan T) Gapeka;", "pemberitahuan tentang perjalanan kereta api fakultatif dan kereta api luar biasa dan perjalanan kereta api biasa pada tiap-tiap hari (PPK);", "maklumat pelayanan kereta api (Malka);", "warta perjalanan."],
        answer: 0
    },
    {
        question: "Selama Gapeka berlaku, perubahan dapat dilakukan dengan cara apa ?",
        options: ["P dan T untuk selama berlakuya Gapeka;", "PPKA untuk 1 (satu) bulan takwim (kalender);", "Malka untuk selama waktu yang ditetapkan oleh Pimpinan Daerah, tetapi tidak melebihi masa berlaku Gapeka;", "Semua jawaban salah"],
        answer: 0
    },
    {
        question: "Media/alat untuk menetapkan perjalanan kereta api luar biasa harus dilakukan dengan cara apa ?",
        options: ["maklumat perjalanan kereta api (malka) dan daftar waktu.", "warta maklumat (Wam) dan maklumat perjalanan kereta api (malka) .", "grafik perjalanan kereta api (Gapeka) dan PPK", "daftar waktu dan warta maklumat (Wam)"],
        answer: 1
    },
    {
        question: "Apa yang termasuk buku pendukung Gapeka ?",
        options: ["Malka", "Daftar waktu, PPK", "PTDO", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Mana pernyataan yang tidak tepat tentang : Untuk suatu perencanaan angkutan, seorang perencana harus bisa menentukan apa ?",
        options: ["Lamanya Waktu Perjalanan, Ketersediaan SDM untuk operator", "Kebutuhan sarana dan pola operasinya", "Kebutuhan Jalur dan fasilitas operasi di stasiun", "Lama waktu pembuatan WAM-nya"],
        answer: 3
    },
    {
        question: "Sebagai bukti bahwa PPKA tentang telah masuk dinas maka ybs harus mengisi / membubuhkan paraf dan jam saat datang di buku daftar kehadiran dinasan PPKA, juga berlaku ketentuan apa lagi ?",
        options: ["Ditimbang terimakan dalam buku serah terima dinasan", "Ditimbang terimakan dalam Buku Warta Kereta Api", "Saat timbang terima dinasan PPKA pegganti dan yang diganti harus bertemu di kantor PPKA", "Pernyataan a, b dan c benar"],
        answer: 0
    },
    {
        question: "Yang dicatat dalam buku warta kereta api saat serah terima dinas PPKA berupa apa saja ?",
        options: ["Tanggal, bulan tahun dan jam serah terima", "Tanda tangan kedua PPKA yang bersangutan", "Kelambatan kereta api, informsi KA jalan atau batal ?", "Pernyataan a dan b benar"],
        answer: 3
    },
    {
        question: "PPKA sebelum memulai dinas untuk buka stasiun, maka ybs harus memeriksa keandalan perangkat persinyalannya serta menjaga kebersihan perangkatnya, yaitu berupa apa saja ?",
        options: ["Mencoba hubungan telepun antar stasiun", "Memeriksa plombir / segel yg disyaratkan pada peralatan persinyalan di ruang PPKA", "Di persinyalan mekanik, memeriksa roda hendel wesel tidak terjadi perubahan batas pengamannya serta memeriksa kebersihan hendel-hendel sinyal maupun wesel serta hendel kancing weselnya", "Pernyataan a,b dan c benar"],
        answer: 3
    },
    {
        question: "PPKA sebelum memulai dinas untuk buka stasiun, maka dia harus memeriksa keandalan perangkat persinyalannya serta kelengkapan inventaris beserta kondisinya, yaitu dengan caran bagaimana ?",
        options: ["Mencoba keandalan perangkat pengamanan dengan cara mencocokan jumlah dan jenisnya melalui daftar inventaris", "Memeriksa keberadaan peralatan perlengkapan kerja dengan cara mencocokan jumlah dan jenisnya melalui daftar inventaris", "Melakukan cek negatif bersama petugas sinyal untuk meyakinkan keandalan berfungsinya peralatan perangkat pengamanan", "Pernyataan b dan c benar"],
        answer: 3
    },
    {
        question: "Beberapa buku Pedoman yang harus ada di ruang PPKA, yaitu diantaranya apa saja ?",
        options: ["Buku Himpunan O.100", "Buku Laporan Keuangan stasiun", "Buku PTDO, Buku Peraturan Stasiun, Buku Peraturan Dinas Pengamanan Setempat", "Buku Catatan Kereta Api"],
        answer: 2
    },
    {
        question: "Dalam keadaan mendesak yang tidak dapat ditangguhkan, kewenangan untuk menetapkan perjalanan kereta api luar biasa dapat dilaksanakan oleh siapa ?",
        options: ["Kepala Daerah, selain untuk perjalanan kereta api luar biasa dalam wilayahnya, juga untuk perjalanan kereta api luar biasa yang melewati batas wilayahnya setelah mendapatkan kesepakatan dari pimpinan daerah yang terkait.", "Kepala Stasiun yang dalam Gapeka ditetapkan untuk mengumumkan dan membatalkan perjalanan kereta api (Ks Wam), untuk paling lama 1 (satu) hari, dan dilaporkan kepada Ppkp.", "Kepala Stasiun yang lain, untuk paling lama 1 (satu) hari dan dilaporkan kepada Ppka.", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Kepala Stasiun yang dalam Gapeka ditetapkan untuk mengumumkan dan membatalkan perjalanan kereta api (Ks Wam), dalam keadaan mendesak diberi kewenangan untuk menetapkan perjalanan kereta api luar biasa untuk paling lama 1 (satu) hari, dan dilaporkan kepada Ppkp, diantaranya untuk kereta api apa saja ?",
        options: ["kereta api perawatan jalan rel sepanjang petak jalan yang berbatasan dengan stasiunnya, atas dasar permintaan kepala unit pelaksana teknis perawatan jalan rel, selama keperluan tersebut sangat mendesak untuk keselamatan perjalanan kereta api.", "Kereta api penolong sepanjang petak jalan yang berbatasan dengan stasiunnya.", "kereta api perawatan jalan rel sepanjang lintas wam yang ditetapkan dalam Gapeka, atas dasar permintaan kepala unit pelaksana teknis perawatan jalan rel, selama keperluan tersebut sangat mendesak untuk keselamatan perjalanan kereta api.", "Jawaban a, b, dan c salah semua."],
        answer: 2
    },
    {
        question: "Perjalanan kereta api luar biasa yang ditetapkan dengan Malka, harus menyebutkan beberapa keterangan, kecuali tentang apa ?",
        options: ["nomor maklumat dan nomor “perjalanan luar biasa” (Plb) .", "jam berangkat, jam datang, dan jam langsung di stasiun dan berhenti atau langsung diperhentian, langsung di blokpos yang terletak dilintas yang akan dilewati, persilangan yang dinyatakan dengan bersil, dan penyusulan yang dinyatakan dengan menyusul jika kereta api menyusul atau dengan disusul jika kereta api disusul (nama stasiun, tempat simpangan, perhentian, dan blokpos harus ditulis lengkap);", "petak jalan yang akan dilalui kereta api;", "waktu berlaku dan / atau waktu terbit Malka."],
        answer: 3
    },
    {
        question: "Malka harus memenuhi ketentuan, diantaranya apa saja ?",
        options: ["Berisi tentang ketentuan peraturan perjalanan.", "Masa berlakunya Malka tidak melebihi masa berlaku Gapeka.", "Dalam Malka yang telah distribusikan “tidak boleh diadakan perubahan dan apabila diadakan perubahan, dikeluarkan Malka baru yang berisi keterangan bahwa Malka yang telah didistribusikan tidak berlaku dan harus segera dimusnahkan.", "Jawaban a, b, dan c benar semua."],
        answer: 3
    },
    {
        question: "Pejabat yang berwenang untuk menetapkan perjalanan kereta api luar biasa diantaranya siapa saja ?",
        options: ["Direksi, dengan menggunakan malka untuk perjalanan antar daerah.", "Direksi, dengan menggunakan Wam untuk perjalanan antar daerah.", "Pimpinan Daerah, dengan menggunakan malka untuk perjalanan dalam wilayahnya setelah memberitahukan terlebih dahulu kepada Direksi.", "Pimpinan Daerah, dengan menggunakan Wam untuk perjalanan dalam wilayahnya setelah memberitahukan terlebih dahulu kepada Direksi."],
        answer: 0
    },
    {
        question: "Kepala Stasiun Wam, dalam keadaan mendesak diberi kewenangan untuk menetapkan perjalanan kereta api luar biasa untuk paling lama 1 (satu) hari, dan dilaporkan kepada Ppkp, diantaranya untuk kereta api apa ?",
        options: ["Konvoi luar biasa sepanjang lintas wamnya yang berbatasan dengan stasiunnya.", "Konvoi luar biasa dan lokomotif pendorong sepanjang petak jalan yang berbatasan dengan stasiunnya .", "Lokomotif pendorong sepanjang lintas wamnya yang berbatasan dengan stasiunnya.", "Kereta api luar biasa selain kereta api perawatan dan kereta api penolong, sepanjang lintas wam nya."],
        answer: 3
    },
    {
        question: "Kepala Stasiun yang lain, dalam keadaan mendesak diberi kewenangan untuk menetapkan perjalanan kereta api luar biasa untuk paling lama 1 (satu) hari dan dilaporkan kepada Ppkp, diantaranya untuk kereta api apa ?",
        options: ["kereta api perawatan jalan rel sepanjang petak jalan yang berbatasan dengan stasiunnya, atas dasar permintaan kepala unit pelaksana teknis perawatan jalan rel, selama keperluan tersebut sangat mendesak untuk keselamatan perjalanan kereta api.", "kereta api penolong, konvoi luar biasa, lokomotif pendorong, sampai dengan stasiun pertama berikutnya.", "kereta api luar biasa lainnya, sampai dengan stasiun pertama berikutnya.", "Jawaban a, b, dan c benar semua."],
        answer: 0
    },
    {
        question: "Pada meja pelayanan perangkat persinyalan suatu stasiun, yang perlu PPKA ketahui tentang apa saja ?",
        options: ["Indikator hubungan blok beseta artinya", "Indikator jalur, sekat-kancng wesel serta pengertiannya", "Tombol pembentukan rute, penghapus rute, sinyal darurat serta penggunaanya", "Penggunaan Pernyataan a, b dan c benar"],
        answer: 3
    },
    {
        question: "Tuas pembantu (help boom) yang ada di ruang PPKA persinyalan mekanik, berguna untuk apa ?",
        options: ["Mengungkit wesel kalau wesel terlanggar", "Mengungkit kawat tarik sinyal yang kendor agar sinyal dapat dilayani kembali", "Mengungkit roda wesel yang ada pada dudukan hendel wesel, supaya kedudukannya tepat kembali ke batas garis agar kawat tarik wesel bisa berfungsi kembali", "Alat untuk mengungkit roda saat langsiran"],
        answer: 2
    },
    {
        question: "Engkol wesel gunanya untuk apa ?",
        options: ["Mengarahkan kedudukan wesel ke jurusan jalur tertentu secara mekanik di stasiun yang menggunakan persinyalan meknik", "Mengarahkan kedudukan wesel ke jurusan jalur tertentu secara mekanik di stasiun yang menggunakan persinyalan elektrik", "Mengapit kedudukan wesel ke jurusan jalur tertentu supaya ketika dilalui kereta api kedudukannya tidak bergeser", "Pernyataan a,b dan c tidak ada yang benar"],
        answer: 1
    },
    {
        question: "Mencoba suatu fungsi pelayanan persinyalan disaksikan oleh petugas persinyalan, kemudian dicoba melayani prosedur pelayanan fungsi persinyalan lainnya, yang seharusnya tidak dapat berfungsi percobaan pelayanan ke dua tersebut, contoh membuka blok kepada stasiun sebelahnya kemudian melayani sinyal keluar, jika pelayanan sinyal berhasil berarti tidak andal hubungan bloknya, dst... pekerjaan n disebut apa ?",
        options: ["Check positif", "Check negatif", "Check positif dan negatif", "Pernyataaan a, b dan c salah"],
        answer: 1
    },
    {
        question: "Apabila Petugas pemeriksa jalur KA (PPJ) yang telah melakukan pekerjaannya datang melapor kepada PPKA, tindakan yang tidak perlu PPKA lakukan adalah tentang apa ?",
        options: ["Menanyakan bagaimana kondisi petak jalannya", "Menandatangani buku Pas jalannya, mencatat di buku WK", "Meberi warta masuk PPJ ke PPKA arah kebalikan dari perjalanan PPJ tsb.", "Melaporkan kedatangan ke kepala resor jalan rel"],
        answer: 3
    },
    {
        question: "Catatan yang harus PPKA diisikan dalam buku pas jalan ketika buku tersebut diserahkan oleh PPJ yaitu tentang apa saja ?",
        options: ["Pernyataan aman petak jalan", "Tanda tangan PPKA", "Jam kedatangan PPJ dan tanda tangan PPKA", "Pernyataan a, b dan c benar"],
        answer: 2
    },
    {
        question: "Contoh pewartaan masuknya PPJ di stasiun yang ditulis dalam buku Warta kereta api caranya bagaimana ?",
        options: ["cimahi ppj masuk 0430 padalarang", "ppka cmi ppj masuk 0430 ppka pdl", "cimahi petugas pemeriksa jalur masuk 0430 padalarang", "cmi ppj msk 0430 pdl"],
        answer: 1
    },
    {
        question: "Apa tujuan pencatatan masuknya PPJ ?",
        options: ["Adanya kepastian petak jlan teah diperiksa", "Alat pembuktian jika terjadi kekusutan", "Memudahkan komunikasi dengan PPKA sebelah pada pewartaan masuknya PPJ", "Pernyataan a, b dan c benar"],
        answer: 3
    }
];
