let keranjang = [];
let totalHarga = 0;

function tambahPesanan(namaMenu, harga) {
    keranjang.push({ nama: namaMenu, harga: harga });
    totalHarga += harga;
    perbaruiTampilanKeranjang();
}

function perbaruiTampilanKeranjang() {
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const totalPriceEl = document.getElementById('total-price');

    cartCount.textContent = keranjang.length;
    totalPriceEl.textContent = 'Rp ' + totalHarga.toLocaleString('id-ID');

    cartList.innerHTML = '';

    if (keranjang.length === 0) {
        cartList.innerHTML = '<li>Belum ada pesanan.</li>';
        return;
    }

    keranjang.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nama}</span>
            <span>Rp ${item.harga.toLocaleString('id-ID')}</span>
        `;
        cartList.appendChild(li);
    });
}

function checkout() {
    if (keranjang.length === 0) {
        alert('Keranjangmu masih kosong! Pilih menu terlebih dahulu.');
        return;
    }

    alert(`Terima kasih! Pesananmu senilai Rp ${totalHarga.toLocaleString('id-ID')} sedang diproses.`);
    keranjang = [];
    totalHarga = 0;
    perbaruiTampilanKeranjang();
}
