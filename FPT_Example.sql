use QuanLyThuVien ;

call GetStatistic();
call GetRecentBorrowed() ;
call GetOverExpired();
CALL getRestBooksList(); --Lấy danh sách sách còn lại trong thư viện
CALL SearchCategory(''); --Tìm kiếm thể loại sách
CALL getAuthorsList(''); --Tìm kiếm tác gỉa
CALL getBooksList(''); --Lấy danh sách tất cả sách
CALL getBooksOrdered('', 'name_asc'); --Tìm sách sắp xếp theo tên tăng dần
CALL getBooksOrdered('', 'name_desc'); --Tìm sách sắp xếp theo tên giảm dần
CALL getBooksOrdered('', 'theloai'); --Tìm sách sắp xếp theo thể loại