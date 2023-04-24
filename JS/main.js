

function CheckMaBn() {
    var maBn = document.getElementById('txtMabn').value;
    var errorName = document.getElementById('error-mabn');
    var regexName = /^BN-[0-9]{5}$/;

    if (maBn == '' || maBn == null) {
        errorName.innerHTML = 'Mã bệnh nhân không để trống';
    } else if (!regexName.test(maBn)) {
        errorName.innerHTML = "Mã bệnh nhân cố định (BN-5 số theo sau)";
    } else {
        errorName.innerHTML = "";
        return true;
    }
    return false;
}

function CheckMatKhau() {
    var matkhau = document.getElementById('txtMatkhau').value;
    var errorName = document.getElementById('error-matkhau');
    var regexName = /.{6,}/;

    if (matkhau == '' || matkhau == null) {
        errorName.innerHTML = 'Mật khẩu không được để trống';
    } else if (!regexName.test(matkhau)) {
        errorName.innerHTML = "Mật khẩu chứa từ 6 kí tự trở lên";
    } else {
        errorName.innerHTML = "";
        return true;
    }
    return false;
}

function CheckNgayKham() {
    var ngaykham = document.getElementById('txtNgaykham').value;
    var errorName = document.getElementById('error-ngaykham');
    if (Date.parse(ngaykham) < new Date()) {
        errorName.innerHTML = 'Ngày khám phải sau ngày hiện tại';
    } else {
        errorName.innerHTML = "";
        return true;
    }
    return false;
}

function checkDichVu() {
    var errorName = document.getElementById('error-dichvu');
    var checkds1 = document.getElementById('ck-1');
    var checkds2 = document.getElementById('ck-2');
    var checkds3 = document.getElementById('ck-3');
    if (!(checkds1.checked || checkds2.checked || checkds3.checked)) {
        errorName.innerHTML = "Phải chọn một loại dịch vụ!";
        
    } else {
        errorName.innerHTML = '';
        return true;
    }
    return false;
}
 function validate() {
     if (CheckMaBn() && CheckMatKhau() && CheckNgayKham() && checkDichVu()) {
          alert('Đặt lịch thành công');
         return true;
        
        
    } 
    return false;
 }