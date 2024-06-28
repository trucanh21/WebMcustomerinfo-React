CREATE DATABASE db_qlttkh;
USE db_qlttkh;

-- Tạo bảng Khách hàng
CREATE TABLE KhachHang (
    KH_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    KH_Ten VARCHAR(100) NOT NULL,
    KH_DaiDien VARCHAR(100) NOT NULL,
    KH_SDT VARCHAR(15) NOT NULL,
    KH_TaiKhoan VARCHAR(100) NOT NULL,
    KH_PLDonVi VARCHAR(50) NOT NULL,
    KH_BPQuanLy VARCHAR(50) NOT NULL,
    KH_DiaChi VARCHAR(255) NOT NULL
) CHARACTER SET = UTF8;

-- Tạo bảng Sản phẩm
Create Table SanPham(
	SP_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    SP_Ten VARCHAR(100) NOT NULL
    
);

-- Tạo bảng Quản trị
CREATE TABLE QuanTri (
    QT_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    QT_Ten VARCHAR(100) NOT NULL,
    QT_PhanCap VARCHAR(10) NOT NULL, -- 'xa', 'huyen', 'tinh' '0'. '1', '2'
    matkhau VARCHAR(255) NOT NULL
) CHARACTER SET = UTF8;

-- Tạo bảng Hợp đòng
CREATE TABLE HopDong (
	HD_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    QT_ID INT(10),
    KH_ID INT(10),
    SP_ID INT(10),
    HD_Loai VARCHAR(100) NOT NULL,
    HD_Ngay VARCHAR(100) NOT NULL,
    HD_GiaTri INT(10),
    HD_CBGhiNhanDoanhSo VARCHAR(100), -- Tên quản trị
    HD_HienTrang VARCHAR(100) NOT NULL,
    HD_Note VARCHAR(100),
    FOREIGN KEY (KH_ID) REFERENCES KhachHang(KH_ID),
    FOREIGN KEY (QT_ID) REFERENCES QuanTri(QT_ID), 
    FOREIGN KEY (SP_ID) REFERENCES SanPham(SP_ID)
);

-- Tạo bảng Bảo trì
Create Table BaoTri(
	BT_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    HD_ID INT(10),
    SP_ID INT(10),
    BT_Ngay Date,
    BT_BoPhanQuanLy VARCHAR(100) NOT NULL,
    BT_CanBoThucHien VARCHAR(100) NOT NULL,
    BT_NoiDung VARCHAR(100) NOT NULL,
    BT_Note VARCHAR(100) NOT NULL
);

-- Tạo bảng Hóa đơn
Create Table HoaDon(
	HoaD_ID INT(10) PRIMARY KEY AUTO_INCREMENT,
    HD_ID INT(10),
    HoaD_Ngay DATE,
    HoaD_GiaTriHopDong VARCHAR(100) NOT NULL,
    HoaD_BoPhanQuanLy VARCHAR(100) NOT NULL,
	HoaD_HienTrangThanhToan VARCHAR(100) NOT NULL,
    HoaD_NgayThanhToan VARCHAR(100) NOT NULL
);



