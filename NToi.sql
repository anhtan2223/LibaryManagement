use quanlythuvien;
DELIMITER //
DROP PROCEDURE IF EXISTS getBooksOrdered;
CREATE PROCEDURE getBooksOrdered(IN searchString VARCHAR(124), IN orderType VARCHAR(20))
BEGIN
	DROP TEMPORARY TABLE IF EXISTS TempBooks;
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

DELIMITER //
DROP TRIGGER IF EXISTS CreateTheThuVienAfterInsert;
CREATE TRIGGER CreateTheThuVienAfterInsert
AFTER INSERT ON NguoiDung
FOR EACH ROW
BEGIN
    INSERT INTO TheThuVien (MaDG, NgayBD, NgayKT, GhiChu)
    VALUES (NEW.UID, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 1 YEAR), CONCAT('Thẻ hết hạn vào ngày ', DATE_ADD(CURDATE(), INTERVAL 1 YEAR)));
    UPDATE NguoiDung SET IsActive = FALSE WHERE UID = NEW.UID;
END;
//
DELIMITER ;

DELIMITER //

DROP PROCEDURE IF EXISTS getBooksList;
CREATE PROCEDURE getBooksList(IN searchString VARCHAR(124))
BEGIN
	DROP TEMPORARY TABLE IF EXISTS TempBooks;
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

    -- Select the result set from the temporary table
    SELECT * FROM TempBooks;
END //
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS getAuthorsList;
CREATE PROCEDURE getAuthorsList(IN searchString VARCHAR(124))
BEGIN
	DROP TEMPORARY TABLE IF EXISTS TempAuthors;
    -- Create a temporary table to store the result set
    CREATE TEMPORARY TABLE TempAuthors (
		MaTG INT,
        TenTG VARCHAR(100),
        Website VARCHAR(100),
        GhiChu VARCHAR(100)
    );

    -- Populate the temporary table with the result set
	INSERT INTO TempAuthors
	SELECT
		MaTG,
        TenTG,
        Website,
        GhiChu
	FROM
		TacGia tg
	WHERE
		tg.TenTG like CONCAT('%', searchString, '%')
	ORDER BY
		tg.MaTG ASC;

    -- Select the result set from the temporary table
    SELECT * FROM TempAuthors;
    
END //
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS SearchCategory;
CREATE PROCEDURE SearchCategory(IN searchString VARCHAR(100))
BEGIN
    -- Drop the temporary table if it exists
    DROP TEMPORARY TABLE IF EXISTS TempCategory;

    -- Create a temporary table to store the result
    CREATE TEMPORARY TABLE TempCategory (
        MaTL INT,
        TenTL VARCHAR(100)
    );

    -- Insert the result of the query into the temporary table
    INSERT INTO TempCategory (MaTL, TenTL)
    SELECT MaTL, TenTL FROM TheLoai WHERE TenTL LIKE CONCAT('%', searchString, '%');

    -- Select from the temporary table to display the result
    SELECT * FROM TempCategory;
   
END;
//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS getRestBooksList;
CREATE PROCEDURE getRestBooksList()
BEGIN
    -- Drop the temporary table if it exists
    DROP TEMPORARY TABLE IF EXISTS TempRestBooksList;

    -- Create a temporary table to store the result
    CREATE TEMPORARY TABLE TempRestBooksList (
        MaSach INT,
        TenSach VARCHAR(200),
        TenTG VARCHAR(100),
        TenTL VARCHAR(100),
        TenNXB VARCHAR(100),
        NamXB YEAR,
        Image VARCHAR(100),
        NumAvailable INT
    );

    -- Insert the result of the query into the temporary table
    INSERT INTO TempRestBooksList 
        SELECT 
            Sach.MaSach, 
            Sach.TenSach, 
            TacGia.TenTG, 
            TheLoai.TenTL, 
            NhaXuatBan.TenNXB, 
            Sach.NamXB, 
            Sach.Image, 
            COUNT(*) AS NumAvailable
        FROM 
            Sach
        LEFT JOIN 
            CT_MuonTra ON Sach.MaSach = CT_MuonTra.MaSach
        LEFT JOIN 
            MuonTra ON CT_MuonTra.MaMT = MuonTra.MaMT
        LEFT JOIN 
            TacGia ON Sach.MaTG = TacGia.MaTG
        LEFT JOIN 
            TheLoai ON Sach.MaTL = TheLoai.MaTL
        LEFT JOIN 
            NhaXuatBan ON Sach.MaNXB = NhaXuatBan.MaNXB
        WHERE 
            Sach.MaSach NOT IN (
                SELECT Sach.MaSach
                FROM Sach
                JOIN CT_MuonTra ON Sach.MaSach = CT_MuonTra.MaSach
                JOIN MuonTra ON CT_MuonTra.MaMT = MuonTra.MaMT
                WHERE CT_MuonTra.DaTra = FALSE
            ) 
        GROUP BY 
            Sach.TenSach, 
            Sach.MaSach, 
            TacGia.TenTG, 
            TheLoai.TenTL, 
            NhaXuatBan.TenNXB, 
            Sach.NamXB, 
            Sach.Image;

    -- Select from the temporary table to display the result
    SELECT * FROM TempRestBooksList;
END;
//
DELIMITER ;

CALL getRestBooksList(); --Lấy danh sách sách còn lại trong thư viện
CALL SearchCategory(''); --Tìm kiếm thể loại sách
CALL getAuthorsList(''); --Tìm kiếm tác gỉa
CALL getBooksList(''); --Lấy danh sách tất cả sách
CALL getBooksOrdered('', 'name_asc'); --Tìm sách sắp xếp theo tên tăng dần
CALL getBooksOrdered('', 'name_desc'); --Tìm sách sắp xếp theo tên giảm dần
CALL getBooksOrdered('', 'theloai'); --Tìm sách sắp xếp theo thể loại