
DROP DATABASE db_qlttkh;
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
  matkhau VARCHAR(255)  NULL,
  FOREIGN KEY (province_id) REFERENCES province(province_id),
  FOREIGN KEY (district_id) REFERENCES district(district_id),
  FOREIGN KEY (wards_id) REFERENCES wards(wards_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO QuanTri (QT_Ten, QT_PhanCap, province_id, district_id, wards_id) VALUES 
('Lan123', '1', '49', '544', '8516');


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

DELIMITER //

CREATE TRIGGER KhachHang_BeforeInsert
BEFORE INSERT ON KhachHang
FOR EACH ROW
BEGIN
  SET NEW.KH_ID = CONCAT('KH', NEW.KH_ID);
END;

//

DELIMITER ;


-- Create SanPham table
CREATE TABLE SanPham (
  SP_ID INT PRIMARY KEY AUTO_INCREMENT,
  SP_Ten VARCHAR(100) NOT NULL,
  SP_NgayNhap DATE NOT NULL,
  SP_BPQuanLy VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO SanPham (SP_Ten, SP_NgayNhap, SP_BPQuanLy) VALUES 
('Kinh phí Nâng cấp phần mềm KTHC', '30-06-2024', 'Văn Phòng 1'),
('Kinh phí Chuyển giao phần mềm Kế toán Hành chính Sự nghiệp (KTHC)', '30-06-2024', 'Văn Phòng 1'),
('Kinh phí Bảo trì phần mềm KTHC', '30-06-2024', 'Văn Phòng 2');

CREATE TABLE LoaiHopDong(
  LHD_ID INT PRIMARY KEY AUTO_INCREMENT,
  LHD_NAME VARCHAR(40)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO LoaiHopDong (LHD_NAME) VALUES ('Chuyển Giao'), ('Nâng Cấp'), ('Bảo trì');

-- Create HopDong table
CREATE TABLE HopDong (
  HD_ID INT PRIMARY KEY AUTO_INCREMENT,
  QT_ID INT,
  KH_ID INT,
  SP_ID INT,
  LHD_ID INT,
  HD_Ngay DATE NOT NULL,
  HD_GiaTri INT,
  HD_CBGhiNhanDoanhSo VARCHAR(100), -- Tên quản trị
  HD_HienTrang VARCHAR(100) NOT NULL,
  HD_Note VARCHAR(100),
  FOREIGN KEY (LHD_ID) REFERENCES LoaiHopDong(LHD_ID),
  FOREIGN KEY (KH_ID) REFERENCES KhachHang(KH_ID),
  FOREIGN KEY (QT_ID) REFERENCES QuanTri(QT_ID), 
  FOREIGN KEY (SP_ID) REFERENCES SanPham(SP_ID)

) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO HopDong (QT_ID, KH_ID, SP_ID, LHD_ID, HD_Ngay, HD_GiaTri, HD_CBGhiNhanDoanhSo, HD_HienTrang, HD_Note) VALUES 
('1', '1', '1','1', '2024-1-1', '5000000', 'admin1', 'Chưa xuất hóa đơn', "");
>>>>>>> 9938db82b6e1a2a3b5f0e99517d0b1c08323e39d

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

