



const generate_btn = document.querySelector("#generate-btn");
const copy_btn = document.querySelector('#copy-btn');


const getData = () => {
    const nama = document.querySelector('#nama');
    const kekurangan = document.querySelector("#kekurangan");
    const kebenaran = document.querySelector("#kebenaran");
    const deskripsi = document.querySelector("#deskripsi");
    const keluar = document.querySelector("#keluar");
    const kesan = document.querySelector("#kesan");

    return {
        nama : nama.value,
        nama_besar : nama.value.toUpperCase(),
        huruf_akhir : nama.value.substr(nama.value.length - 1).toUpperCase(),
        kekurangan : kekurangan.value,
        kebenaran : kebenaran.value,
        deskripsi : deskripsi.value,
        keluar : keluar.value,
        kesan : kesan.value
    };
};

generate_btn.addEventListener('click',event => {
    event.preventDefault();

    const data = getData();

    const text = `${data.nama_besar} ${data.nama_besar} ${data.nama_besar} ${data.nama_besar}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah ${data.deskripsi} ~~~~ AAAAAH ${data.nama_besar} keluar pertama kali di ${data.keluar} juga ${data.kesan} ❤️ ❤️ ❤️  AAAAAAAAH ${data.nama_besar}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir} ............ ${data.nama_besar}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}${data.huruf_akhir}GH ❤️ ❤️ ❤️
    apa ? ${data.nama_besar} itu ${data.kekurangan} katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA ${data.kebenaran} NGAAAAAAAAAAAAAAAAAK PEDULI BNGSAAAAAT !! GUA GAK PEDULI SAMA SEMUA ITU POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️
    ${data.nama} gw ... ${data.nama} di laptop ngeliatin gw 
    ${data.nama}... kamu percaya sama aku ? aaaaaaaaaaah syukur ${data.nama} gak mau merelakan aku aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${data.nama_besar}, SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH JOUGI SHIRAISHI SENSEI KIRIMKANLAH CINTAKU PADA ${data.nama_besar}AAA KIRIMKAN KE ${data.nama_besar} ❤️ ❤️ ❤️`;

    console.log(text);
    const text_el = document.querySelector('#text');
    text_el.innerText = text;

    

    /* 
    nama

     */
});

copy_btn.addEventListener('click',event => {
    const text = document.querySelector('#text');
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");

    document.querySelector('#copy-alert').innerText = '*tercopy*';
});