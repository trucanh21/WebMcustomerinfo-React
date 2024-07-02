CREATE DATABASE db_qlttkh;
USE db_qlttkh;

-- Create province table
CREATE TABLE province (
  province_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(64) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tỉnh thành';

-- Create district table
CREATE TABLE district (
  district_id INT PRIMARY KEY AUTO_INCREMENT,
  province_id INT NOT NULL,
  name VARCHAR(64) COLLATE utf8mb4_general_ci NOT NULL,
  FOREIGN KEY (province_id) REFERENCES province(province_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Quận huyện';


-- Create wards table
CREATE TABLE wards (
  wards_id INT PRIMARY KEY AUTO_INCREMENT,
  district_id INT NOT NULL,
  name VARCHAR(64) COLLATE utf8mb4_general_ci NOT NULL,
  FOREIGN KEY (district_id) REFERENCES district(district_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Xã Phường';

-- Create QuanTri table
CREATE TABLE QuanTri (
  QT_ID INT PRIMARY KEY AUTO_INCREMENT,
  QT_Ten VARCHAR(100) NOT NULL,
  QT_PhanCap TINYINT NOT NULL, -- '0': xã, '1': huyện, '2': tỉnh
  province_id INT,
  district_id INT,
  wards_id INT,
  matkhau VARCHAR(255) NOT NULL,
  FOREIGN KEY (province_id) REFERENCES province(province_id),
  FOREIGN KEY (district_id) REFERENCES district(district_id),
  FOREIGN KEY (wards_id) REFERENCES wards(wards_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- Create KhachHang table
CREATE TABLE KhachHang (
  KH_ID INT PRIMARY KEY AUTO_INCREMENT,
  KH_Ten VARCHAR(100) NOT NULL,
  KH_DaiDien VARCHAR(100) NOT NULL,
  KH_SDT VARCHAR(15) NOT NULL,
  KH_TaiKhoan VARCHAR(100) NOT NULL,
  KH_PLDonVi VARCHAR(50) NOT NULL,
  KH_ProvinceID INT NOT NULL,
  KH_DistrictID INT NOT NULL,
  KH_WardsID INT NOT NULL,
  FOREIGN KEY (KH_ProvinceID) REFERENCES province(province_id),
  FOREIGN KEY (KH_DistrictID) REFERENCES district(district_id),
  FOREIGN KEY (KH_WardsID) REFERENCES wards(wards_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- Create SanPham table
CREATE TABLE SanPham (
  SP_ID INT PRIMARY KEY AUTO_INCREMENT,
  SP_Ten VARCHAR(100) NOT NULL,
  SP_NgayNhap DATE NOT NULL,
  SP_BPQuanLy VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- Create HopDong table
CREATE TABLE HopDong (
  HD_ID INT PRIMARY KEY AUTO_INCREMENT,
  QT_ID INT,
  KH_ID INT,
  SP_ID INT,
  HD_Loai VARCHAR(100) NOT NULL,
  HD_Ngay DATE NOT NULL,
  HD_GiaTri INT,
  HD_CBGhiNhanDoanhSo VARCHAR(100), -- Tên quản trị
  HD_HienTrang VARCHAR(100) NOT NULL,
  HD_Note VARCHAR(100),
  FOREIGN KEY (KH_ID) REFERENCES KhachHang(KH_ID),
  FOREIGN KEY (QT_ID) REFERENCES QuanTri(QT_ID), 
  FOREIGN KEY (SP_ID) REFERENCES SanPham(SP_ID)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- Create BaoTri table
CREATE TABLE BaoTri (
  BT_ID INT PRIMARY KEY AUTO_INCREMENT,
  HD_ID INT,
  SP_ID INT,
  BT_Ngay DATE,
  BT_CanBoThucHien VARCHAR(100) NOT NULL,
  BT_NoiDung VARCHAR(100) NOT NULL,
  BT_Note VARCHAR(100) NOT NULL,
  FOREIGN KEY (HD_ID) REFERENCES HopDong(HD_ID),
  FOREIGN KEY (SP_ID) REFERENCES SanPham(SP_ID)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- Create HoaDon table
CREATE TABLE HoaDon (
  HoaD_ID INT PRIMARY KEY AUTO_INCREMENT,
  HD_ID INT,
  HoaD_Ngay DATE,
  HoaD_GiaTriHopDong VARCHAR(100) NOT NULL,
  HoaD_BoPhanQuanLy VARCHAR(100) NOT NULL,
  HoaD_HienTrangThanhToan VARCHAR(100) NOT NULL,
  HoaD_NgayThanhToan DATE NOT NULL,
  FOREIGN KEY (HD_ID) REFERENCES HopDong(HD_ID)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;



