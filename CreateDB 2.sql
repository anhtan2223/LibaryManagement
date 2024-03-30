drop database if exists QuanLyBanHang ;
create database QuanLyBanHang ;
use QuanLyBanHang ;

create table TheLoai (
	MaTL int primary key auto_increment ,
    TenTL varchar(100) 
);

insert into theloai(tentl) 
value 
		("Tiểu Thuyết") ,
        ("Truyện Ngắn") ,
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
    NguoiDaiDien varchar(100) not null
);

insert into nhaxuatban (tennxb , diachi , email)
value 	("Nhà Xuất Bản Trẻ" ,"161B Lý Chính Thắng, Quận 3, Thành phố Hồ Chí Minh","info@nxbtre.com.vn") ,
		("Nhà Xuất Bản Kim Đồng" , "55 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội" , "info@nxbkimdong.com.vn") ,
        ("Nhà Xuất Bản Giáo Dục" , "Số 101 Phạm Ngọc Thạch, Đống Đa, Hà Nội" , "info@nxbgd.vn") ,
        ("Nhà Xuất Bản Đại Học Quốc Gia Hà Nội") ,
        ("Nhà Xuất Bản Thanh Niên" , "334 Nguyễn Trãi, Thanh Xuân, Hà Nội" , 'info@nih.edu.vn') ,
        ("Nhà Xuất Bản Văn Học" , 'Số 53 Nguyễn Du, Hà Nội' , 'info@vanhoc.com.vn')
 ;

create table TacGia(
	MaTG int primary key auto_increment ,
    TenTG varchar(100) not null ,
    Website varchar(100) ,
    GhiChu varchar(100)
);

create table Sach(
	MaSach int auto_increment ,
    TenSach varchar(200) not null ,
    MaTG int not null ,
    MaTL int ,
    MaNXB int not null ,
    NamXB year not null ,
    Image varchar(100) ,
    constraint hello primary key(MaSach , TenSach , MaTG , MaNXB , namXB ) ,
    foreign key (MaTG) references TacGia(MaTG) on delete cascade ,
    foreign key (MaNXB) references NhaXuatBan(MaNXB) on delete cascade , 
    foreign key (MaTL) references TheLoai(MaTL) on delete cascade
);
create table VaiTro(
	RoleID int primary key auto_increment,
    VaiTro varchar(100) not null
);
insert into VaiTro
value (1 , "Admin") , (2,"Employee") , (3,"Reader") ;


create table NguoiDung(
	UID int primary key auto_increment ,
	HoTen varchar(100) ,
    DiaChi varchar(100) ,
    SDT varchar(15) ,
    username varchar(100) ,
    password varchar(256) ,
    isActive boolean default true
);

create table TheThuVien(
	MaTTV int primary key auto_increment ,
    MaDG int not null ,
    NgayBD date not null ,
    NgayKT date not null ,
    GhiChu varchar(100)  ,
    foreign key(MaDG) references NguoiDung(UID) ,
	constraint HetHan check (NgayBD < NgayKT) 
);
create table MuonTra(
	MaMT int primary key auto_increment ,
    MaTTV int not null ,
    MaNV int , 
    NgayMuon date not null ,
    foreign key(MaTTV) references TheThuVien(MaTTV) ,
    foreign key(MaNV) references NguoiDung(UID) on delete set null 
);

create table CT_MuonTra(
	MaMT int ,
    MaSach int ,
    GhiChu varchar(100) ,
    DaTra boolean default false ,
    NgayTra date ,
    foreign key(MaMT) references MuonTra(MaMT) ,
    foreign key(MaTTV) references NguoiDung(UID) on delete set null 
)


-- insert into TheThuVien(ngaybd , ngaykt)
-- value ("2003-02-20","2002-03-20") ;


