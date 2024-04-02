ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
drop database if exists QuanLyThuVien ;
create database QuanLyThuVien ;
use QuanLyThuVien ;


create table TheLoai (
	MaTL int primary key auto_increment ,
    TenTL varchar(100) 
);

insert into theloai(tentl) 
value 
		("Tiểu Thuyết") ,
        ("Truyện Ngắn") ,
        ("Văn Học") ,
        ("Lịch Sử") ,
        ("Tâm Lý") ,
        ("Kỹ Năng") ,
        ("Kinh Doanh") ,
        ("Lập Trình") ,
        ("Truyện Tranh") ,
        ("Tư Duy") ,
        ("Học Ngoại Ngữ") 
;

create table NhaXuatBan(
	MaNXB int primary key auto_increment ,
    TenNXB 	varchar(100) not null ,
    DiaChi 	varchar(100) ,
    Email	varchar(100) ,
    NguoiDaiDien varchar(100) 
);

insert into nhaxuatban (tennxb , diachi , email)
value 	("Nhà Xuất Bản Trẻ" ,"161B Lý Chính Thắng, Quận 3, Thành phố Hồ Chí Minh","info@nxbtre.com.vn") ,
		("Nhà Xuất Bản Kim Đồng" , "55 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội" , "info@nxbkimdong.com.vn") ,
        ("Nhà Xuất Bản Giáo Dục" , "Số 101 Phạm Ngọc Thạch, Đống Đa, Hà Nội" , "info@nxbgd.vn") ,
        ("Nhà Xuất Bản Đại Học Quốc Gia Hà Nội" , "334 Nguyễn Trãi, Thanh Xuân, Hà Nội" , 'info@nih.edu.vn' ) ,
        ("Nhà Xuất Bản Thanh Niên" , "Số 161B Lý Chính Thắng, Quận 3, Thành phố Hồ Chí Minh" , ' info@thegioitre.com.vn') ,
        ("Nhà Xuất Bản Văn Học" , 'Số 53 Nguyễn Du, Hà Nội' , 'info@vanhoc.com.vn')
 ;

create table TacGia(
	MaTG int primary key auto_increment ,
    TenTG varchar(100) not null ,
    Website varchar(100) ,
    GhiChu varchar(100)
);

insert into TacGia(TenTG)
value 	('Tô Hoài') ,
		('Nguyễn Thành Long') ,
        ('Nam Cao') ,
        ('Đào Duy Anh') ,
        ('Mitch Albom') ,
        ('Nguyễn Nhật Ánh') ,
        ('Lưu Quang Vũ') , 
        ('The Fish')
 ;


create table Sach(
	MaSach int auto_increment ,
    TenSach varchar(200) not null ,
    MaTG int not null ,
    MaTL int ,
    MaNXB int not null ,
    NamXB year not null ,
    Image varchar(1000) ,
    constraint hello primary key(MaSach , TenSach , MaTG , MaNXB , namXB ) ,
    foreign key (MaTG) references TacGia(MaTG) on delete cascade ,
    foreign key (MaNXB) references NhaXuatBan(MaNXB) on delete cascade , 
    foreign key (MaTL) references TheLoai(MaTL) on delete cascade
);
insert into Sach(TenSach,MaTL,MaTG,MaNXB,NamXB,Image) value
	("Dế Mèn Phiêu Lưu Ký",2,1,1,2024,'https://static.8cache.com/cover/o/eJzLyTDW1_VIzDROLfM3Noh31A8LM8zQLQlx8Uj11HeEgrw8V_0o5-Ck1IDyQEf3bP1yI0NT3QxjIyMARh4SLA==/de-men-phieu-luu-ky.jpg') ,
    ("Chuyện Xứ Lang Biang",1,2,2,2024, 'https://www.dtv-ebook.com/images/truyen-online/ebook-chuyen-xu-langbiang-prc-pdf-epub-1.jpg') ,
    ("Tắt Đèn",1,3,6,2024, 'https://bizweb.dktcdn.net/100/370/339/products/tat-den.jpg?v=1588518084007') ,
    ("Lược Sử Thời Gian",4,4,4,2024, 'https://www.nxbtre.com.vn/Images/Book/copy_27_nxbtre_full_21022016_100217.jpg') ,
    ("Những Ngày Thứ Ba với Thầy Morrie",5,5,2,2024, 'https://product.hstatic.net/200000343865/product/nhung-ngay-thu-ba-voi-thay-morrie_6cba4e499407490e96661cfabf2b2ebe_master.jpg') ,
    ("Tôi Thấy Hoa Vàng Trên Cỏ Xanh",1,6,5,2024, 'https://sachtruyen.net/covers/toi-thay-hoa-vang-tren-co-xanh.3f827.cover.jpg') ,
    ("Hoa Trôi Trên Sóng Nước",2,6,1,2024, 'https://firstnews.com.vn/public/uploads/products/thumb-0129.jpg') ,
    ("Hồn Trương Ba Da Hàng Thịt",1,7,5,2024, 'https://www.quandoannguhanhson.org.vn/uploads/images/posts/2023-04-23_14-51-36slYlpA_h%E1%BB%93n%20tr%C6%B0%C6%A1ng%20ba%20da%20h%C3%A0ng%20th%E1%BB%8Bt.png') ,
    ("300 Bài Code Thiếu Nhi",8,8,1,2024, 'https://product.bachkhoa-aptech.edu.vn:33/Resources/Data/Screenshot%202021-07-14%20105743.png') ,
	("Bố Già", 5, 4, 4, 2021, 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936071673381.jpg'),
	("Nhà Giả Kim", 6, 5, 5, 2020, 'https://thuviensach.vn/img/news/2022/09/larger/255-nha-gia-kim-1.jpg?v=7958'),
	("Đắc Nhân Tâm", 7, 6, 6, 2019, 'https://cdn0.fahasa.com/media/catalog/product/d/n/dntttttuntitled.jpg'),
	("Harry Potter và Hòn Đá Phù Thủy", 8, 7, 6, 2018, 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974179672.jpg'),
	("Anna Karenina", 9, 8, 6, 2017, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZG8tCwQrZ8EguCGf7UhD-1sqUa5Eqpslb48qAZzP-Q&s'),
	("Cuốn Theo Chiều Gió", 10, 8, 6, 2016, 'https://salt.tikicdn.com/cache/w1200/ts/product/a6/1e/c9/bb2b006d46f1c6c54f9c66eac99ca7ae.jpg'),
	("1984", 11, 2, 5, 2015, 'https://upload.wikimedia.org/wikipedia/vi/c/c3/1984first.jpg'),
	("Mắt Biếc", 10, 4, 6, 2014, 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691147319i/11273677.jpg'),
	("Người Mẹ", 11, 2, 2, 2013, 'https://www.khaitam.com/Data/Sites/1/Product/14105/nguoi-me.png'),
	("Tâm Tư", 4, 3, 5, 2012, 'https://www.khaitam.com/Data/Sites/1/Product/7757/tam-tu.jpg'),
	("Huyền Thoại Về Rồng", 5, 4, 4, 2011, 'https://www.netabooks.vn/Data/Sites/1/Product/69458/cuu-toc-quyen-1-huyen-thoai-ve-rong-tuyet-.jpg'),
	("Muôn Kiếp Nhân Sinh", 6, 3, 5, 2010, 'https://bizweb.dktcdn.net/100/180/408/products/muon-kiep-nhan-sinh-1-3b2bfd88-6d50-4850-af3d-58d69cde9081.png?v=1620314231893'),
	("Cuộc Phiêu Lưu Của Tom Sawyer", 6, 5, 5, 2021, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQwmhDg-_Uqwjs4bpDtylJ2GMnbKfXbO6D7E6r6-qjA&s'),
	("Cô Gái Trong Trang Sách", 7, 6, 6, 2021, 'https://static.8cache.com/cover/o/eJzLyTDW1zVOdsoocAoML04u1g-rqAhNyksOLM_11HeEAj8DA_3EUCMfJ1_fggiP_ChvC6-SUv_AyDwzo0oPy0CLymA3w3Jn53z9YgMACtkZSA==/co-gai-trong-trang-sach.jpg'),
	("Tôi Đi Học", 8, 7, 3, 2021, 'https://muasachhay.vn/wp-content/uploads/2016/10/toi-di-hoc-mua-sach-hay.jpg'),
	("Cô Gái Trên Tàu", 9, 8, 6, 2021, 'https://bizweb.dktcdn.net/100/283/734/products/0fa815d2fb416be1e8a0a76d24b456d1.jpg?v=1536659572753')
    ;

-- select * from tacgia ;
-- select * from nhaxuatban ;
-- select * from theloai ;


create table VaiTro(
	RoleID int primary key auto_increment,
    VaiTro varchar(100) not null
);
insert into VaiTro
value (1 , "Admin") , (2,"Employee") , (3,"Reader") ;


create table NguoiDung(
	UID int primary key auto_increment ,
    RoleID int ,
	HoTen varchar(100) ,
    DiaChi varchar(500) ,
    SDT varchar(15) ,
    Email varchar(100) ,
    username varchar(100) ,
    password varchar(256) ,
    isActive boolean default true ,
    foreign key(RoleID) references VaiTro(RoleID) 
);
INSERT INTO NguoiDung (RoleID , HoTen, DiaChi, SDT, Username, Password, IsActive , Email)
VALUES
    (3,'Phạm Thị Ngọc', '111 Đường Nguyễn Văn Linh, Quận Thanh Khê, Thành phố Đà Nẵng', '0123456780', 'admin', '123', TRUE , 'admin@gmail.com'),
    (2,'Vũ Thị Lan', '222 Đường Hùng Vương, Quận Ngô Quyền, Thành phố Hải Phòng', '0987654320', 'staff', '123', TRUE, 'vuthilan@gmail.com'),
    (2,'Trần Thị Kim Anh', '333 Đường Nguyễn Trãi, Quận Hoàn Kiếm, Thành phố Hà Nội', '0369842150', 'staff2', '123', TRUE, 'trananh@gmail.com'), 
    (2,'Nguyễn Thị Hằng', '444 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh', '0123456781', 'nguyenthihang', '123', TRUE, 'nguyenthihang@gmail.com'),
    (2,'Hoàng Thị Thanh', '555 Đường Phan Đình Phùng, Quận Thanh Xuân, Thành phố Hà Nội', '0987654321', 'hoangthithanh', '123', TRUE, 'hoangthithanh@gmail.com'),
    (2,'Lê Thị Hồng', '666 Đường Lý Thường Kiệt, Quận Hải Châu, Thành phố Đà Nẵng', '0369842151', 'lethihong', '123', TRUE, '@gmail.com'),
    (2,'Trần Thị Thu', '777 Đường Nguyễn Sinh Sắc, Quận Liên Chiểu, Thành phố Đà Nẵng', '0123456782', 'tranthithu', '123', TRUE,  'tranthithu@gmail.com' ),
    (2,'Nguyễn Thị Thảo', '888 Đường Hoàng Hoa Thám, Quận Ba Đình, Thành phố Hà Nội', '0987654322', 'nguyenthithao', '123', TRUE , 'nguyenthithao@gmail.com'),
    (1,'Vũ Thị Phương', '999 Đường Trần Phú, Quận Hồng Bàng, Thành phố Hải Phòng', '0369842152', 'user', '123', TRUE, 'vuthiphuong@gmail.com'),
    (1,'Phạm Thị Lan', '1010 Đường Hùng Vương, Quận Ngô Quyền, Thành phố Hải Phòng', '0123456783', 'phamthilan', '123', TRUE, 'phamthilan@gmail.com'),
    (1,'Đặng Thị Hồng', '1111 Đường Nguyễn Trãi, Quận Hoàn Kiếm, Thành phố Hà Nội', '0987654323', 'dangthihong', '123', TRUE, 'dangthihong@gmail.com'),
    (1,'Nguyễn Thị Thúy', '1212 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh', '0369842153', 'nguyenthithuy', '123', TRUE, 'nguyenthithuy@gmail.com'),
    (1,'Trần Thị Mai', '1313 Đường Phan Đình Phùng, Quận Thanh Xuân, Thành phố Hà Nội', '0123456784', 'tranthimai', '123', TRUE, 'tranthimai@gmail.com'),
    (1,'Lê Thị Thanh', '1414 Đường Lý Thường Kiệt, Quận Hải Châu, Thành phố Đà Nẵng', '0987654324', 'lethithanh', '123', TRUE, 'lethithanh@gmail.com'),
    (1,'Hoàng Thị Hà', '1515 Đường Nguyễn Sinh Sắc, Quận Liên Chiểu, Thành phố Đà Nẵng', '0369842154', 'hoangthiha', '123', TRUE, 'hoangthiha@gmail.com'),
    (1,'Vũ Thị Thủy', '1616 Đường Hoàng Hoa Thám, Quận Ba Đình, Thành phố Hà Nội', '0123456785', 'vuthithuy', '123', TRUE, 'vuthithuy@gmail.com'),
    (1,'Phạm Thị Hồng', '1717 Đường Trần Phú, Quận Hồng Bàng, Thành phố Hải Phòng', '0987654325', 'reader', '123', TRUE, 'phamthihong@gmail.com'),
    (1,'Nguyễn Thị Tâm','1818 Đường Hùng Vương, Quận Ngô Quyền, Thành phố Hải Phòng', '0369842155', 'nguyenthitam', '123', TRUE, 'nguyenthitam@gmail.com'),
    (1,'Trần Thị Trang', '1919 Đường Nguyễn Trãi, Quận Hoàn Kiếm, Thành phố Hà Nội', '0123456786', 'tranthitrang', '123', TRUE, 'tranthitrang@gmail.com'),
    (1,'Lê Thị Thu', '2020 Đường Lê Lợi, Quận 1, Thành phố Hồ Chí Minh', '0987654326', 'lethithu', '123', TRUE, 'lethithu@gmail.com');


create table TheThuVien(
	MaTTV int primary key auto_increment ,
    MaDG int not null ,
    NgayBD date not null ,
    NgayKT date not null ,
    GhiChu varchar(100)  ,
    foreign key(MaDG) references NguoiDung(UID) ,
	constraint HetHan check (NgayBD < NgayKT) 
);
INSERT INTO TheThuVien (MaDG, NgayBD, NgayKT, GhiChu)
VALUES
    (10, '2024-11-10', '2025-11-10', 'Thẻ hết hạn vào ngày 10/11/2025'),
    (11, '2024-12-15', '2025-12-15', 'Thẻ hết hạn vào ngày 15/12/2025'),
    (12, '2025-01-20', '2026-01-20', 'Thẻ hết hạn vào ngày 20/01/2026'),
    (13, '2025-02-25', '2026-02-25', 'Thẻ hết hạn vào ngày 25/02/2026'),
    (14, '2025-03-30', '2026-03-30', 'Thẻ hết hạn vào ngày 30/03/2026'),
    (15, '2025-04-05', '2026-04-05', 'Thẻ hết hạn vào ngày 05/04/2026'),
    (16, '2024-05-10', '2025-05-10', 'Thẻ hết hạn vào ngày 10/05/2025'),
    (17, '2024-06-15', '2025-06-15', 'Thẻ hết hạn vào ngày 15/06/2025'),
    (18, '2024-07-20', '2025-07-20', 'Thẻ hết hạn vào ngày 20/07/2025'),
    (19, '2024-08-25', '2025-08-25', 'Thẻ hết hạn vào ngày 25/08/2025'),
    (20, '2024-09-30', '2025-09-30', 'Thẻ hết hạn vào ngày 30/09/2025') ;


create table MuonTra(
	MaMT int primary key auto_increment ,
    MaTTV int not null ,
    MaNV int , 
    NgayMuon date not null ,
    foreign key(MaTTV) references TheThuVien(MaTTV) ,
    foreign key(MaNV) references NguoiDung(UID) on delete set null 
);
INSERT INTO MuonTra (MaTTV, MaNV, NgayMuon)
VALUES
    (1, 2, '2024-03-15'),
    (2, 3, '2024-03-20'),
    (3, 4, '2024-03-25');

create table CT_MuonTra(
	MaMT int ,
    MaSach int ,
    GhiChu varchar(100) ,
    DaTra boolean default false ,
    NgayTra date ,
    foreign key(MaMT) references MuonTra(MaMT) ,
    foreign key(MaSach) references Sach(MaSach) on delete set null 
);
INSERT INTO CT_MuonTra (MaMT, MaSach, GhiChu, DaTra, NgayTra)
VALUES
    (1, 1, 'Ghi chú cho sách 1', true, '2024-03-20'),
    (1, 2, 'Ghi chú cho sách 2', true, '2024-03-23'),
    (2, 3, 'Ghi chú cho sách 3', FALSE, NULL),
    (2, 4, 'Ghi chú cho sách 4', FALSE, NULL),
    (3, 5, 'Ghi chú cho sách 5', true, '2024-03-28'),
    (3, 6, 'Ghi chú cho sách 6', FALSE, NULL);

-- select * from CT_MuonTra ;


