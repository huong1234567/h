drop database doan
create database doan
use doan
select * from mon_hoc
select * from nguoi_dung

select * from tongket


insert into ban values
('BTN',N'Ban tự nhiên'),
('BXH',N'Ban xã hội'),
('BTNVXH', N'Ban tự nhiên và xã hội')

insert into mon_hoc values
('toan','toan.png',N'Toán','60:00','BTNVXH'),
('vatly','vatly.png',N'Vật lý','45:00','BTN'),
('anh','tienganh.png',N'Tiếng anh','60:00','BTNVXH'),
('sinh','sinhhoc.png',N'Sinh học','45:00','BTN'),
('hoa','hoahoc.png',N'Hóa học','45:00','BTN'),
('su','lichsu.png',N'Lịch sử','45:00','BXH'),
('gdcd','gdcd.png',N'Giáo dục công dân','45:00','BXH'),
('dialy','dialy.png',N'Địa lý','45:00','BXH')

insert into bo_de values
('1',N'môn toán 2023','1'),
('1',N'môn lý 2023','2'),
('1',N'tiếng anh 2023','3'),
('1',N'môn sinh 2023','4'),
('1',N'môn hóa 2023','5'),
('1',N'môn sử 2023','6'),
('1',N'môn GDCD 2023','7'),
('1',N'môn địa lý 2023','8'),
('2',N'môn toán 2022','1'),
('2',N'môn lý 2022','2'),
('2',N'tiếng anh 2022','3'),
('2',N'môn sinh 2022','4'),
('2',N'môn hóa 2022','5'),
('2',N'môn sử 2022','6'),
('2',N'môn GDCD 2022','7'),
('2',N'môn địa lý 2022','8'),
('3',N'môn toán 2021','1'),
('3',N'môn lý 2021','2'),
('3',N'tiếng anh 2021','3'),
('3',N'môn sinh 2021','4'),
('3',N'môn hóa 2021','5'),
('3',N'môn sử 2021','6'),
('3',N'môn GDCD 2021','7'),
('3',N'môn địa lý 2021','8'),
('4',N'môn toán 2020','1'),
('4',N'môn lý 2020','2'),
('4',N'tiếng anh 2020','3'),
('4',N'môn sinh 2020','4'),
('4',N'môn hóa 2020','5'),
('4',N'môn sử 2020','6'),
('4',N'môn GDCD 2020','7'),
('4',N'môn địa lý 2020','8')

insert into nguoi_dung values
('AD01','huongdtpd06182@fpt.edu.vn',N'Dư Thị Hương','nd01.jpg',1,'huong1602','0919176192'),
('ND01','hoannt123@gmail.com.vn',N'Nguyễn Thị Hoàn','nd01.jpg',0,'hoan12','0917896192'),
('ND02','vunv12@gmail.com.vn',N'Nguyễn Văn Vũ','nd01.jpg',0,'vuvu12','0919176987'),
('ND03','tien456@gmail.com.vn',N'Lê Thị Thanh Tiến','nd01.jpg',0,'tien123','0987676192'),
('ND04','viennt23@gmail.edu.vn',N'Nguyễn Tiến Viên','nd01.jpg',0,'huong1602','0919176192')
insert into nguoi_dung values
('AD06','duthihuonghk@gmail.com',N'Hương Hương','nd01.jpg',0,'huong1602','0910986192')

select * from tongket


ALTER TABLE [dbo].[tongket]
ADD CONSTRAINT fk_tk_id_nguoidung
 FOREIGN KEY ([id_nguoi_dung]) 
 REFERENCES [dbo].[nguoi_dung] ([idnd])
 ON DELETE CASCADE;

