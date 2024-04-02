use QuanLyThuVien ;

delimiter @
drop procedure if exists GetStatistic @
create procedure GetStatistic()
begin
	drop table if exists Statistic;
	create table Statistic (
		ReaderCount int,
		BookCount int,
        BorrowedCount int,
        ExpiredCount int
	);
    insert into Statistic (ReaderCount, BookCount, BorrowedCount, ExpiredCount)
	select
    (select COUNT(*) from nguoidung where RoleID = 1) as ReaderCount,
    (select COUNT(*) from sach) as BookCount,
    (select COUNT(*) from sach, ct_muontra where sach.MaSach = ct_muontra.MaSach) as BorrowedCount,
    (
		select count(*) from ct_muontra, muontra
		where ct_muontra.MaMT = muontra.MaMT and DaTra = 0 and datediff(now(), NgayMuon) > 7
    ) as ExpiredcCount;
	select * from Statistic;
end @
delimiter ;

-- call GetStatistic();

delimiter @
drop procedure if exists GetRecentBorrowed@
create procedure GetRecentBorrowed() 
begin
	select distinct HoTen, TenSach, date((date_add(NgayMuon, INTERVAL 7 DAY))) as NgayHetHan 
	from ct_muontra, muontra, thethuvien, nguoidung, sach
	where ct_muontra.DaTra = 0 
		and ct_muontra.MaMT = muontra.MaMT 
		and muontra.MaTTV = thethuvien.MaTTV
		and nguoidung.UID = thethuvien.MaDG
		and sach.MaSach = ct_muontra.MaSach;
end@
delimiter ;

-- call GetRecentBorrowed()

delimiter @
drop procedure if exists GetOverExpired@
create procedure GetOverExpired() 
begin
	select HoTen, TenSach, datediff(now(), date_add(NgayMuon, INTERVAL 7 DAY)) as SoNgayQuaHan
	from ct_muontra, muontra, thethuvien, nguoidung, sach
	where ct_muontra.DaTra = 0 
		and ct_muontra.MaMT = muontra.MaMT 
		and muontra.MaTTV = thethuvien.MaTTV
		and nguoidung.UID = thethuvien.MaDG
		and sach.MaSach = ct_muontra.MaSach;
end@
delimiter ;
-- call GetOverExpired();

-- -------------------------------------

DELIMITER //
DROP PROCEDURE IF EXISTS getBooks_ordered;
CREATE PROCEDURE getBooks_ordered(IN searchString VARCHAR(124), IN orderType VARCHAR(20))
BEGIN
    -- Create a temporary table to store the result set
    CREATE TEMPORARY TABLE TempBooks (
        MaSach INT,
        TenSach VARCHAR(200),
        TenTacGia VARCHAR(100),
        TenNhaXuatBan VARCHAR(100),
        TenTheLoai VARCHAR(100),
        NamXB YEAR,
        Image VARCHAR(100)
    );

    -- Populate the temporary table with the result set
    IF orderType = 'theloai' THEN
        INSERT INTO TempBooks
        SELECT
            s.MaSach,
            s.TenSach,
            tg.TenTG AS TenTacGia,
            nxb.TenNXB AS TenNhaXuatBan,
            tl.TenTL AS TenTheLoai,
            s.NamXB,
            s.Image
        FROM
            Sach s
        INNER JOIN
            TacGia tg ON s.MaTG = tg.MaTG
        INNER JOIN
            NhaXuatBan nxb ON s.MaNXB = nxb.MaNXB
        LEFT JOIN
            TheLoai tl ON s.MaTL = tl.MaTL
        WHERE
            s.TenSach LIKE CONCAT('%', searchString, '%') OR
            tg.TenTG LIKE CONCAT('%', searchString, '%') OR
            tl.TenTL LIKE CONCAT('%', searchString, '%') OR
            nxb.TenNXB LIKE CONCAT('%', searchString, '%')
        ORDER BY
            tl.TenTL ASC, s.TenSach ASC;
    ELSEIF orderType = 'name_desc' THEN
        INSERT INTO TempBooks
        SELECT
            s.MaSach,
            s.TenSach,
            tg.TenTG AS TenTacGia,
            nxb.TenNXB AS TenNhaXuatBan,
            tl.TenTL AS TenTheLoai,
            s.NamXB,
            s.Image
        FROM
            Sach s
        INNER JOIN
            TacGia tg ON s.MaTG = tg.MaTG
        INNER JOIN
            NhaXuatBan nxb ON s.MaNXB = nxb.MaNXB
        LEFT JOIN
            TheLoai tl ON s.MaTL = tl.MaTL
        WHERE
            s.TenSach LIKE CONCAT('%', searchString, '%')  OR
            tg.TenTG LIKE CONCAT('%', searchString, '%') OR
            tl.TenTL LIKE CONCAT('%', searchString, '%') OR
            nxb.TenNXB LIKE CONCAT('%', searchString, '%')
        ORDER BY
            s.TenSach DESC;
    ELSE
        INSERT INTO TempBooks
        SELECT
            s.MaSach,
            s.TenSach,
            tg.TenTG AS TenTacGia,
            nxb.TenNXB AS TenNhaXuatBan,
            tl.TenTL AS TenTheLoai,
            s.NamXB,
            s.Image
        FROM
            Sach s
        INNER JOIN
            TacGia tg ON s.MaTG = tg.MaTG
        INNER JOIN
            NhaXuatBan nxb ON s.MaNXB = nxb.MaNXB
        LEFT JOIN
            TheLoai tl ON s.MaTL = tl.MaTL
        WHERE
            s.TenSach LIKE CONCAT('%', searchString, '%')  OR
            tg.TenTG LIKE CONCAT('%', searchString, '%') OR
            tl.TenTL LIKE CONCAT('%', searchString, '%') OR
            nxb.TenNXB LIKE CONCAT('%', searchString, '%')
        ORDER BY
            s.TenSach ASC;
    END IF;

    -- Select the result set from the temporary table
    SELECT * FROM TempBooks;
END //
DELIMITER ;

-- -------------------------------------

