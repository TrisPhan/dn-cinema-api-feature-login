-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: music_booking
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_user`
--

DROP TABLE IF EXISTS `account_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_account` varchar(255) DEFAULT NULL,
  `password_account` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_user`
--

LOCK TABLES `account_user` WRITE;
/*!40000 ALTER TABLE `account_user` DISABLE KEYS */;
INSERT INTO `account_user` VALUES (1,'quynhhtn','$2a$10$LuHruZi8anQdnYLek/SjVOBoJDTEuvSUyOlzzEmsHW/rkSdSj47.q'),(2,'chinhlv24','$2a$10$FESW0D5TqlBy.UFJbNZmLuXxdviyn9kJw6xk62gl9mDG3NQgK9H4G'),(3,'quocanh','$2a$10$OzxHfWuXhHHg3Sr3WHI2YOnnXqmk59Tleexryle4URoySui12N5GS'),(4,'khailv','$2a$10$Bd9b.TRR6cXgs7CHbXho9.Q5qlhI1qZpukZAWYV.nOZcDFcGp9j0e'),(5,'minhlanh','$2a$10$HLfSRDP/BZ1ruqbjDI/SCOvA8gXusqe5Ck6vx7D63iawF2hy3oWEy'),(6,'datlvp','$2a$10$7SITn8hUCi0K.KjaWOpon.72OWUVh.JwBxZbOdWOEFdCNAxyyxHgy'),(7,'hoangpt','$2a$10$nAx140DtWPu0tZZytsTGXub8YJeVvyJ1kXIYUAwn10iPouq.MWr3S'),(8,'dongpv','$2a$10$HdUkHAHI7z4/.hRRQoPeee5Fn3oGOlqFxvqHO1UoY.s3B7fnzysye'),(9,'minhnv','$2a$10$ZLurfv4sRhinYrqi4nocX.GK5dLsCuy6qFSeP2oFnGoRR8a6Ga/wy'),(10,'vanan','$2a$10$WtFIiNL/2qimHm.ay9bfz.gHJ33bZkgxDXOv6lLBJwBBoNKbbPrUG'),(11,'haonguyen','$2a$10$Sy5HGBLtmH63.EhSmwnwc.TTtLFM35SwjFpSJgPxf5rP1V6ROvnVe'),(12,'xuandieu','$2a$10$WTiaNEarQVtDxHp1ejxYcO3ZborDeKBi6CLSmFz6UHr9IWx/.BDdy'),(13,'nghetruong','$2a$10$10.RBtXjVemEj42q2D0cGOP1.aA0e6YbrnCa8M.kAdFkalqQwGiii'),(14,'mocchau','$2a$10$v8S7NvHx7JWKW6sdDLwI4OanNhn4wI47.DzWr6TP12hyJjq4dw7E.'),(15,'congdao','$2a$10$BdamNtnJYjjQoaOLq7t5IugwscOmBele7rYia6XhJktHd.jvFYbGK'),(16,'nguyenhadong','$2a$10$D9eP9O2VjuiYVsjC/MKz1e.M3wZT2hZUtDhidxRotbQbv4USJKQfC'),(17,'khainlv','$2a$10$1zf6T4tnEDQuCsToUEgU.OzA7PIH8Im.3newDE0uaSSD.ljoWkRDK'),(18,'khainlv1','$2a$10$TzLH/AzH6595AVqeZCfISOJdMRBWfaKHOVJGvZSIA0qthDVuGijTi'),(19,'khainguyenlevan','$2a$10$C2CVXFpE9qYVxI45MxzFq.iMsdtHtgGd0qVh39aFlqfT9qeesYKSW'),(20,'khainlv123','$2a$10$HKvUWRnNfG2nuT2o/E48Tu.sILjlIXFx80zBBJw.BMFF/t42m4y8m'),(21,'khainlv123456','$2a$10$CKEaM2LXsnAiPQGkjsRAj.jte2FavLcGUdtVeBRXNEMM2b0bK6lSq'),(22,'hovinh1003','$2a$10$Y2k7nu87VWj38IybxwgW0./d918MfYbQ3.RXrUhkfWAKYumXISeoG'),(23,'hovinhkh1003','$2a$10$81tpHFMYrjfhodCE/W0B6uM1oFtVbYgDdbTotl1MS8LvS1WzS41Se');
/*!40000 ALTER TABLE `account_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id_customer` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `identity_card` varchar(45) DEFAULT NULL,
  `img_customer` varchar(255) DEFAULT NULL,
  `name_customer` varchar(255) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `point_customer` varchar(45) DEFAULT NULL,
  `id` int DEFAULT NULL,
  `id_type_customer` int DEFAULT NULL,
  PRIMARY KEY (`id_customer`),
  KEY `FKtfdx1had34mdwq04ph3d2puts` (`id`),
  KEY `FKt8au6n6rkqrokgp2kh8258hdu` (`id_type_customer`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'295 Nguyễn Tất Thành, Đà Nẵng','1998-02-03','annguyen@gmail.com','Nam','62357819871','https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg','Nguyễn Văn An','0901234121','100.0',10,3),(2,'23 Nguyễn Hoàng, Đà Nẵng','1999-04-03','thihao07@gmail.com','Nữ','64343121324','https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg','Nguyễn Thị Hào','0945423362','200.0',11,2),(3,'K77/22 Thái Phiên, Quảng Trị','1998-04-03','xuandieu92@gmail.com','Nam','86534212398','https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-cute-meo-chibi.jpg','Phạm Xuân Diệu','0954333333','300.0',12,1),(4,'K323/12 Ông Ích Khiêm, Vinh','2000-02-03','nghenhan2702@gmail.com','Nam','48864519923','https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-cute-doremon.jpg','Trương Đình Nghệ','0373213122','150.0',13,3),(5,'37 Yên Thế, Đà Nẵng','2000-02-03','tonnuchau@gmail.com','Nữ','73243421534','https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-cute-don-gian-dang-yeu.jpg','Tôn Nữ Mộc Châu','0988888844','200.0',14,2),(6,'khaideptraivaio','1999-08-03','khainguyenlevan@gmail.com','Nam','048099000644','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2F350100494_147710251630836_2406014977024755471_n.png?alt=media&token=3290334f-9815-4a1e-b5b0-5bb199455551','khai so 1','0702750320','120.0',17,1),(7,'Cẩm Lệ, Đà Nẵng','1999-08-03','khainguyenlevan1@gmail.com','Nam','048099000645','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2F349285935_1655008521611639_7192094222996223861_n.jpg?alt=media&token=e629a564-83f8-4fcb-bbcb-49b6652fcb17','Nguyễn Lê Văn Khải','0702750321','135.0',18,1),(8,'khaideptraivaio','1999-08-03','khainlv@gmail.com','Nam','048099000641','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2F449742653_846234870901422_3996414126800365637_n.jpg?alt=media&token=1d4b9864-6b13-4f5b-8be9-c6e9dee2dee2','Khai Nguyen','0702750651','0.0',19,1),(9,'Da Nang','1999-08-03','khainguyenlevan99@gmail.com','Nam','048099000649','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2Fz5616598927573_7cf58fa748729eee63502c126648b4a2.jpg?alt=media&token=4cb85697-9618-4c9c-9c60-ce465d6cb7f8','Nguyễn Lê Văn Khải','0702750329','0.0',20,1),(10,'Da Nang','1999-08-03','khainguyenlevan111@gmail.com','Nam','048099000631','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2F350x495-mada.jpg?alt=media&token=ed42fdd7-3a33-4113-8c77-5a5ed31d823d','Nguyễn Lê Văn Khải','0702750327','0.0',21,1),(11,'25/27 Đường 6, Phường Tăng Nhơn Phú B, TP Thủ Đức','2002-10-03','hovinh414@gmail.com','Nam','066202014574','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2Fz5736790801462_61c74920d57dfd537938d880e2b83f31.jpg?alt=media&token=4eb9c451-f15c-4106-b813-7ab0d7b2fdae','Hồ Thành Vinh','0967626483','0.0',22,1),(12,'25/27 Đường 6, Phường Tăng Nhơn Phú B, TP Thủ Đức','2002-10-03','hovinh718e@gmail.com','Nam','144056575242','https://firebasestorage.googleapis.com/v0/b/fir-firebase-206c9.appspot.com/o/files%2Frobot.png?alt=media&token=5f785926-a5ec-459b-ad1c-f1837300a001','Hồ Thành Vinh','0967626482','0.0',23,1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `id_discount` int NOT NULL AUTO_INCREMENT,
  `date_end` date DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `describe_discount` varchar(255) DEFAULT NULL,
  `image_discount` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `name_discount` varchar(255) DEFAULT NULL,
  `percent_discount` double DEFAULT NULL,
  PRIMARY KEY (`id_discount`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id_employee` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `identity_card` varchar(255) DEFAULT NULL,
  `img_employee` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `name_employee` varchar(255) DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`id_employee`),
  KEY `FKnhpbelgpdnyaautk3hrtw4293` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'6 Hoà Khánh, Đồng Nai','1997-02-03','nguyencongdao12@gmail.com','Nam','75543434334','employee.jpg',_binary '\0','Nguyễn Công Đạo','0988767111',15),(2,'111 Hùng Vương, Hà Nội','1996-02-03','donghanguyen@gmail.com','Nam','23441412334','employee.jpg',_binary '\0','Nguyễn Hà Đông','0642123111',16);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film` (
  `id_film` int NOT NULL AUTO_INCREMENT,
  `actor` varchar(255) DEFAULT NULL,
  `date_end_film` date DEFAULT NULL,
  `date_start_film` date DEFAULT NULL,
  `describe_film` mediumtext,
  `director` varchar(255) DEFAULT NULL,
  `img_film` varchar(255) DEFAULT NULL,
  `movie_label` varchar(255) DEFAULT NULL,
  `name_film` varchar(255) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `normal_seat_price` double DEFAULT NULL,
  `studio_film` varchar(255) DEFAULT NULL,
  `time_film` int DEFAULT NULL,
  `trailer` varchar(255) DEFAULT NULL,
  `vip_seat_price` double DEFAULT NULL,
  `id_type_film` int DEFAULT NULL,
  PRIMARY KEY (`id_film`),
  KEY `FKaaw9op4hucf2i0j0lnfsca1xq` (`id_type_film`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (1,'Quang Hùng MasterD','2024-09-26','2024-09-12','Quang Hùng MasterD - The 1st Fan Meeting in Vietnam 2024\n\nFan Meeting đầu tiên của Quang Hùng MasterD tại Việt Nam - Quang Hùng MasterD - The 1st Fan Meeting in Vietnam 2024 sẽ chính thức diễn ra vào lúc 16h00 ngày 6.10.2024 tại Nhà hát Bến Thành, Số 6 Đường Mạc Đỉnh Chi, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.\n\nSự kiện hứa hẹn sẽ mang đến nhiều điều thú vị tri ân người hâm mộ và đặc biệt hơn là kỉ niệm ngày sinh nhật của Hùng. ','Quang Hùng MasterD','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F0c%2F6b%2F7d%2Fefd59570b023b02902a3e8301eef33dc.jpg&w=1920&q=75','K','Quang Hùng MasterD - The 1st Fan Meeting in Viet Nam 2024','Việt Nam',65000,'Quang Hùng MasterD',180,'https://www.youtube.com/watch?v=hD7cLb4DhGo',150000,4),(2,'ca sĩ Văn Mai Hương, ca sĩ Kay Trần, nhóm nhảy K-pop 0107 Crew và The A-code, giọng ca K-pop Huỳnh Thị Mỹ Loan','2024-09-30','2024-09-02','Đây là lần thứ 2 chương trình Bài hát K-pop tôi yêu được tổ chức tại Việt Nam. Chương trình năm nay được tổ chức tại 4 thành phố lớn gồm Đà Nẵng, Bình Dương, Hồ Chí Minh và Hà Nội. Khoảng gần 300 bạn trẻ Việt Nam ở 3 miền Bắc, Trung, Nam đã đăng ký tham gia chương trình từ tháng 8-2023. Trong không khí của mùa Thu Hà Nội, 24 đại diện xuất sắc nhất được lựa chọn ở những thành phố trên sẽ cùng nhau tỏa sáng tại bữa tiệc K-pop lần này.','KOCCA','https://file3.qdnd.vn/data/images/0/2023/09/20/phucthang/2023%20poster%20bai%20hat%20k-pop%20toi%20yeu.jpg','T16','Chương trình “Bài hát Kpop tôi yêu\"','Việt Nam',65000,'KOCCA',181,'https://www.youtube.com/watch?v=_VVp6j1i1Nk',150000,5),(3,'EXO','2024-10-30','2024-04-29','Mới đây, Adex Kpop Super Concert 2023 khiến cộng đồng fan Kpop “rần rần\" khi công bố dàn line-up đình đám sẽ góp mặt tại đại nhạc hội ngày 26/9. Được tổ chức bởi WOOWA ADEX nhân sự kiện ra mắt nền tảng di động OKOK tại Việt Nam, fan Việt sẽ có cơ hội gặp gỡ, “quẩy” cùng thần tượng. Từ những thông tin đầu tiên về sự kiện được hé lộ, người hâm mộ đã đứng ngồi không yên bởi loạt idol hàng đầu Kpop xuất hiện.','ADEX','https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/9/22/anh-1-1695347991097853737499.png','T16','Adex Kpop Super Concert 2024','Hàn Quốc',65000,'ADEX',132,'https://www.youtube.com/watch?v=onMOwd-sF-U',170000,5),(4,'OhmyGirl','2023-06-30','2023-06-07','Miles Morales tái xuất trong phần tiếp theo của bom tấn hoạt hình từng đoạt giải Oscar - Spider-Man: Across the Spider-Verse. Sau khi gặp lại Gwen Stacy, chàng Spider-Man thân thiện đến từ Brooklyn phải du hành qua đa vũ trụ và gặp một nhóm Người Nhện chịu trách nhiệm bảo vệ các thế giới song song. Nhưng khi nhóm siêu anh hùng xung đột về cách xử lý một mối đe dọa mới, Miles buộc phải đọ sức với các Người Nhện khác và phải xác định lại ý nghĩa của việc trở thành một người hùng để có thể cứu những người cậu yêu thương nhất.','KTO','https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/7/25/822251/Ohmygirl.png','KPOP','Dream Concert 2024','Hàn Quốc',65000,'KTO',140,'https://www.youtube.com/watch?v=CmaCZuPn_ak',150000,5),(5,'BinZ, Karik, Suboi, Justatee,...','2023-06-29','2023-05-31','Tổ chức lần đầu năm 2021, Rap Việt All-Star Concert được dàn dựng hoành tráng, nhấn vào sân khấu tạo hình kim cương và hiệu ứng khói lửa. Trong suốt bốn tiếng, khán giả được hòa mình vào màn trình diễn sôi động từ dàn giám khảo, huấn luyện viên.\n\nĐại diện ban tổ chức tiết lộ về sân khấu năm nay: \"Sân khấu được đầu tư hoành tráng, chú trọng âm thanh, ánh sáng, hiệu ứng 3D v.v.. Người xem có thể hòa mình trong không khí sôi động, theo dõi những màn kết hợp bất ngờ và thỏa mãn từ thị giác đến thính giác\". ','Vieon','https://phunuvietnam.mediacdn.vn/179072216278405120/2023/8/12/base64-1691863545436656259111.png','T18','Concert Rap Việt','Việt Nam',165000,'Vieon',105,'https://www.youtube.com/watch?v=okD3pw2t59Y',250000,3),(6,'Đức Phúc, HariWon, Hào Minzy','2024-12-02','2024-06-06','Tiếp nối thành công của chương trình vào năm 2019, chương trình lần này hy vọng sẽ là một sân chơi bùng nổ cho giới trẻ yêu K-pop Việt Nam được tỏa sáng, thỏa mãn niềm đam mê và xây dựng, duy trì một cộng đồng yêu K-pop lành mạnh sau hai năm tạm hoãn vì dịch bệnh ngay tại khu phố đi bộ hồ Hoàn Kiếm.\n\nK-pop (âm nhạc đại chúng Hàn Quốc) ngày càng thu hút nhiều sự quan tâm của giới trẻ khắp các châu lục trên thế giới vượt qua mọi rào cản về ngôn ngữ, quốc tịch. K-pop là một món ăn tinh thần không thể thiếu của rất nhiều bạn trẻ, gắn kết những con người yêu âm nhạc đại chúng Hàn Quốc nói riêng và văn hóa Hàn Quốc nói chung lại với nhau.','KBS','https://file3.qdnd.vn/data/images/0/2022/05/11/phucthang/poster-chinh.png?dpi=150&quality=100&w=870','T16','K-pop Lovers Festival 2024','Hàn Quốc',65000,'KBS',198,'https://www.youtube.com/watch?v=yaOXvdmKvNY',150000,5),(7,'MC: NGUYỄN NGỌC NGẠN *** Ca sĩ : ĐAN NGUYÊN,MINH TUYẾT,BẰNG KIỀU, NGUYỄN HỒNG NHUNG, DƯƠNG TRIỆU VŨ, KỲ PHƯƠNG UYÊN...','2023-11-10','2023-10-20','Công ty Truyền thông & Giải trí SỰ KIỆN JAPAN và THANHHAI Entertainment Hân hạnh giới thiệu Show ca nhạc “ VƯỜN HOA ÂM NHẠC ” với sự góp mặt của dàn sao hải ngoại tên tuổi được tổ chức vào ngày 28/11/2021 tại nhà hát KARIYA Cultural Center - Aichi ( 刈谷市総合文化センター） . “ VƯỜN HOA ÂM NHẠC ” là món quà tinh thần đặc biệt , hứa hẹn mang đến cho khán giả không gian âm nhạc lãng mạn , trữ tình , đưa khán giả đến với những cung bậc cảm xúc trào dâng. ','THANHHAI Entertainment','https://sukienjapan.com/uploads/2021/04/24/1619217999_176562827-255461296282292-7794358271339247719-n.png','T16','Show ca nhạc VƯỜN HOA ÂM NHẠC','Việt Nam',65000,'THANHHAI Entertainment',120,'https://www.youtube.com/watch?v=XnPZLGkua5o',150000,12),(8,'Vũ Cát Tường','2024-10-09','2024-04-21','Liveshow Vũ Cát Tường \n\nLululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt.','Vũ Cát Tường','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2Fdd%2F33%2Fbc%2F373bc79ec9538f8c89861f7ff5a258c3.jpg&w=1920&q=75','T16','LULULOLA SHOW VŨ CÁT TƯỜNG | TỪNG LÀ','Việt Nam',65000,'Galaxy Studio, Thu Trang Entertainment, Galaxy Play',112,'https://www.youtube.com/watch?v=i4qZmKSFYvI',150000,7),(9,'Trung Quân','2023-06-10','2023-05-27','???/? | ?? ??? | ?? ??̃ ????? ???̂?\n\n⏰ Thời gian: 20h00 Thứ 7 ngày 28/09/2024\n\n? Địa điểm: Khuôn viên ngoài trời - Bảo tàng Hà Nội\n\n--------------- \n\n? CHÍNH THỨC MỞ BÁN VÉ LIVESHOW “Người đang Yêu” ? Tiếp tục dành những sự ưu ái cho khán giả thân yêu, ca sĩ Trung Quân lại một lần nữa trở lại với sân khấu của DeloDelo Show tại thủ đô Hà Nội như một lời tri ân dành cho những “người đang yêu” giọng hát của chàng Bướm Mặt Trăng. ? Đặc biệt, liveshow lần này còn có sự xuất hiện của khách mời Diva Mỹ Linh - nữ nghệ sĩ được mệnh danh là “Nữ hoàng R&B Việt Nam”, đồng thời cũng là người có màn song ca đỉnh cao tại Concert 1689. Vậy nên, các tình yêu còn chần chừ gì nữa mà không nhanh tay chớp lấy thời cơ ngay thôi nào!\n\n\n\n-------------------------\n\n????????? ????','Trung Quân','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F48%2F54%2Fd6%2F9bfd994c293225adc9e3696481864c33.jpg&w=1920&q=75','T18','DeloDelo Show : Liveshow \"Người Đang Yêu\"','Việt Nam',65000,'Trung Quân',88,'https://www.youtube.com/watch?v=KVhbWgBifHM',150000,3),(10,'Hoàng Dũng','2024-11-11','2024-05-06','YÊN ẤM MERCHANDISE _ HOÀNG DŨNG _ YÊN CONCERT\n\nBạn còn nhớ không?\nKhăn \"Yên Ấm Mát\"\nTúi \"Tò Te\"\nDây đeo \"Yên Tâm\"\nGiấy thủ công \"Không Gấp Gáp\"\n\nNhững món merchandise từ Yên Concert sẽ được restock cùng thời gian phát hành của \"Đôi Mươi\" Remix đấy.\nVà, 30% lợi nhuận của việc bán sản phẩm merchandise của Yên của giai đoạn restock trong 3 tháng đầu tiên sẽ được gửi tới quỹ Sài Gòn Time - Trạm cứu hộ chó mèo bị bỏ rơi.\nLP Club và Ticketbox sẽ là 2 đơn vị đồng hành cùng Hoàng Dũng trong đợt restock lần này.\n\n','Hoàng Dũng','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F46%2Fb1%2F62%2F816c6d301e48e30f3d917704536a0972.jpg&w=1920&q=75','P','YÊN ẤM MERCHANDISE_HOÀNG DŨNG_YÊN CONCERT','Việt Nam',65000,'Hoàng Dũng',192,'https://www.youtube.com/watch?v=LL0BEmKz07c',150000,3),(11,'Trung Quân, Văn Mai Hương','2024-11-18','2024-04-28','GHI CHÚ: Số ghế được Bến Thành xếp theo sơ đồ và ưu tiên theo thời điểm đặt chỗ\n\nPhòng trà Bến Thành có phục vụ F&B, vui lòng không mang đồ ăn thức uống từ ngoài vào\n\n- Bên phòng trà có phục vụ nước uống,quý khách vui lòng không mang thức ăn và nước uống từ bên ngoài vào phòng trà.\n\n- Quý khách không gọi nước bên phòng trà sẽ tính phí phụ thu là 80.000VND/ người .','Trung Quân','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F5a%2F59%2F23%2Fea9d5dcd5849e3c17ed42894c5a3b29d.jpg&w=1920&q=75','T18','[BẾN THÀNH] Đêm nhạc Trung Quân - Văn Mai Hương','Thái Lan',65000,'Trung Quân',122,'https://www.youtube.com/watch?v=iO49BKoolnY',150000,4),(12,'Vũ','2024-11-23','2024-06-23','LIVE CONCERT VŨ. <BẢO TÀNG CỦA NUỐI TIẾC> 2024\nSau hành trình \"Một Vạn Năm\", Vũ. ấn định ngày trở lại với dự án album phòng thu thứ 3 và Live Concert Tour <Bảo Tàng của Nuối Tiếc>.\n\n \n\nTHÔNG TIN CÁC HẠNG VÉ: (toàn bộ là hạng vé đứng)\n\nHẠNG VIP: 999,000 VNĐ\nHẠNG CAT 1: 799,000 VNĐ\nHẠNG CAT 2: 599,000 VNĐ\n \n\nTHÔNG TIN SỰ KIỆN:\n\nTẠI TP HỒ CHÍ MINH - 12.10.2024 (20h00) | Trung Tâm Hội Chợ & Triển Lãm Sài Gòn SECC (799 Đại lộ Nguyễn Văn Linh, Quận 7).\nTẠI HÀ NỘI - 26.10.2024 (20h00) | Công viên Yên Sở - Hoàng Mai - Hà Nội (QL1A Yên Sở, Hoàng Mai).','Vũ','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F37%2Ff5%2F80%2F249b2988f402901c733ff6a960e1457c.jpg&w=1920&q=75','T16','[Hà Nội] Vũ. - \"Bảo Tàng của Nuối Tiếc\" Live Concert 2024','Việt Nam',65000,'Vũ',120,'https://www.youtube.com/@hoangthaivuofficial',150000,1),(13,'Lâm Bảo Ngọc, Phạm Anh Duy','2024-11-09','2024-06-09','​GHI CHÚ: Số ghế được Bến Thành xếp theo sơ đồ và ưu tiên theo thời điểm đặt chỗ\n\nPhòng trà Bến Thành có phục vụ F&B, vui lòng không mang đồ ăn thức uống từ ngoài vào\n\n- Bên phòng trà có phục vụ nước uống,quý khách vui lòng không mang thức ăn và nước uống từ bên ngoài vào phòng trà.\n\n- Quý khách không gọi nước bên phòng trà sẽ tính phí phụ thu là 80.000VND/ người .','Lâm Bảo Ngọc','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F20%2F1c%2Faf%2Fccb2d6aa2c1656218199c5c08a79168f.jpg&w=1920&q=75','P','[BẾN THÀNH] Đêm nhạc Lâm Bảo Ngọc - Phạm Anh Duy','Việt Nam',65000,'Lâm Bảo Ngọc',120,'https://www.youtube.com/watch?v=io0CLX_ZStY',150000,6),(14,'Tăng Phúc','2024-12-09','2024-06-09','Từ Nay...Từ Đây music show x Tăng Phúc (Chapter Hà Nội)\n\nHạng vé/giá bán:\n\nNgười Nhà:         2,500,000 VND\nNgười Thương:  2,200,000 VND\nCrush:                 1,700,000 VND\nBạn Bè:               1,200,000 VND\nTò Mò:                    800,000 VND\nLƯU Ý: Tất cả giá vé trên chưa bao gồm thuế giá trị gia tăng theo quy định của pháp luật áp dụng hiện hành. Giá vé trên tương ứng với 1 chỗ ngồi chỉ áp dụng cho người lớn hoặc trẻ em trên 6 tuổi.','Tăng Phúc','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F90%2F9d%2F11%2F54e8c213fc02f15a7a77496201371a42.jpg&w=1920&q=75','T13','Từ Nay...Từ Đây music show x Tăng Phúc (Chapter Hà Nội)','Việt Nam',65000,'Tăng Phúc',127,'https://www.youtube.com/watch?v=-ZfAU59j0p4',150000,8),(15,'June Lover','2024-12-16','2024-06-16','JUNE\'S LOVER - JUNE WANWIMOL FAN MEETING IN VIETNAM\n\n \n\nTrái tim Forjunes đã sẵn sàng chưa nè?\n\n June Wanwimol sẽ chính thức có fan meeting đầu tiên tại Việt Nam – June’s Lover - June Wanwimol Fan Meeting in Vietnam vào lúc 14h00 Thứ 7 Ngày 05.10.2024 tại Nhà hát Bến Thành, Số 6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh\n\nChuẩn bị tan chảy vì sự đáng yêu của June Wanwimol thuii ?','June Lover','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2Fde%2F4d%2F04%2F236680d7444cba978e3a195b68acd391.jpg&w=1920&q=75','P','JUNE\'S LOVER - JUNE WANWIMOL FAN MEETING IN VIETNAM','Hàn Quốc',65000,'June Lover',120,'https://www.youtube.com/watch?v=PW_2h7qGwiw',150000,5),(16,'SUNGHA JUNG','2024-11-16','2024-06-16','Lưu ý : Trẻ em dưới 6 tuổi không tham dự concert\n\n \n\nLỢI ÍCH ĐẶT MUA TRƯỚC ALBUM MỚI \"ALL THE BEST\" (400k)\nTham gia buổi chụp hình 1:1 cùng Sungha Jung và những lợi ích khác\nXem chi tiết và đặt mua tại ĐÂY\n\n \n\nFINGERSTYLE GUITAR\nThể loại guitar độc tấu mới mẻ, phát triển mạnh tại Việt Nam trong những năm gần đây. Mô tả đơn giản, đó là chỉ với một cây guitar người chơi có thể mang đến âm thanh của cả một ban nhạc (one-man band). Fingerstyle tạo ra cái nhìn hoàn toàn mới về cây guitar và đang thu hút sự quan tâm của cộng đồng đối với nền guitar của nước ta hiện nay.\n\n \n\nSUNGHA JUNG\nChơi guitar từ khi 10 tuổi, Sungha Jung được mệnh danh là “Thần đồng guitar Hàn Quốc” và đã sớm trở nên nổi tiếng, đặc biệt trên YouTube với hơn 991 triệu lượt view và trên 3 triệu người theo dõi (tính đến tháng 4.2015). Trong số 15 giải thưởng anh đã đạt được trên YouTube, có đến 6 giải “No.1”.\nTự sáng tác và chuyển soạn rất nhiều bản nhạc với phong cách đa dạng, Sungha Jung đã phát hành album solo thứ 9 “Poetry” ra mắt năm 2022.\nĐây là năm thứ 7 Sungha Jung có tour diễn tại Việt Nam.\n\n \n\nCHECK-IN\nBTC bắt đầu check-in trả vòng tay giấy từ 19:00 ngày concert\n\n \n\nBUỔI KÝ TẶNG\n(dành cho khán giả mua CD tại concert)\n– Thời gian: sau concert (khoảng 21:45)\n– Chỉ ký lên CD mua tại đây hoặc đàn guitar, ukulele\n– Với 1 CD các bạn có thể xin 1 chữ ký\n– Vui lòng không chụp ảnh, quay video trong buổi ký tặng\n\n \n\nQUY ĐỊNH\n– Trẻ em dưới 6 tuổi không tham dự concert\n– Không quay video, chụp hình trong suốt quá trình concert diễn ra dưới mọi hình thức\n– Không mang đồ ăn, nước uống bên ngoài vào\n\n \n\n* Trong trường hợp bất khả kháng, BTC sẽ giải thích và điều chỉnh sự kiện, quyết định cuối cùng sẽ do BTC đưa ra.\n\n \n\n- Đơn vị tổ chức : Wind Strings Music\n- Đồng tổ chức : Vietnam Fingerstyle Guitar Organization - VNFS\n\n \n\n \n\n\n\n \n\n\n\n \n\n\n\n \n\n\n\n','SUNGHA JUNG','https://ticketbox.vn/_next/image?url=https%3A%2F%2Fimages.tkbcdn.com%2F2%2F360%2F479%2Fts%2Fds%2F06%2F3b%2Fae%2F8e9dc0929ccdeb4f4d29a2b77d5237c3.jpg&w=1920&q=75','T16','[HÀ NỘI] SUNGHA JUNG LIVE IN VIETNAM 2024','Hàn Quốc',65000,'SUNGHA JUNG',120,'https://www.youtube.com/watch?v=FdXueX6X2IQ',150000,6);
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `members`
--

DROP TABLE IF EXISTS `members`;
/*!50001 DROP VIEW IF EXISTS `members`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `members` AS SELECT 
 1 AS `memberid`,
 1 AS `membername`,
 1 AS `totaltickets`,
 1 AS `totalrevenue`,
 1 AS `loyaltypoints`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_roles` int NOT NULL AUTO_INCREMENT,
  `name_roles` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'EMPLOYEE'),(3,'USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat`
--

DROP TABLE IF EXISTS `seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat` (
  `id_seat` int NOT NULL AUTO_INCREMENT,
  `name_seat` varchar(255) DEFAULT NULL,
  `id_status_seat` int DEFAULT NULL,
  `id_show_room` int DEFAULT NULL,
  `id_show_time` int DEFAULT NULL,
  `id_type_seat` int DEFAULT NULL,
  PRIMARY KEY (`id_seat`),
  KEY `FK5ne8nb8ansklhhmasen42v1j1` (`id_status_seat`),
  KEY `FKdq2nng36yx18hgx6b1lw0pbjn` (`id_show_room`),
  KEY `FKgcqrir64eyt32glwwe1u51f1d` (`id_show_time`),
  KEY `FK28kyfo0ys52noa3gtkolnb7jd` (`id_type_seat`)
) ENGINE=MyISAM AUTO_INCREMENT=1612 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat`
--

LOCK TABLES `seat` WRITE;
/*!40000 ALTER TABLE `seat` DISABLE KEYS */;
INSERT INTO `seat` VALUES (1,'A1',2,1,1,1),(2,'A2',2,1,1,1),(3,'A3',2,1,1,1),(4,'A4',2,1,1,1),(5,'A5',2,1,1,2),(6,'A6',2,1,1,2),(7,'A7',2,1,1,1),(8,'A8',2,1,1,1),(9,'A9',2,1,1,2),(10,'A10',2,1,1,2),(11,'A11',2,1,1,2),(12,'A12',2,1,1,1),(13,'A13',2,1,1,1),(14,'A14',2,1,1,1),(15,'B1',2,1,1,1),(16,'B2',2,1,1,1),(17,'B3',2,1,1,1),(18,'B4',2,1,1,1),(19,'B5',2,1,1,2),(20,'B6',2,1,1,2),(21,'B7',2,1,1,1),(22,'B8',2,1,1,1),(23,'B9',2,1,1,2),(24,'B10',2,1,1,2),(25,'B11',2,1,1,2),(26,'B12',2,1,1,1),(27,'B13',2,1,1,1),(28,'B14',2,1,1,1),(29,'C1',2,1,1,1),(30,'C2',2,1,1,1),(31,'C3',2,1,1,1),(32,'C4',2,1,1,1),(33,'C5',2,1,1,2),(34,'C6',2,1,1,2),(35,'C7',2,1,1,1),(36,'C8',2,1,1,1),(37,'C9',2,1,1,2),(38,'C10',2,1,1,2),(39,'C11',2,1,1,2),(40,'C12',2,1,1,1),(41,'C13',2,1,1,1),(42,'C14',2,1,1,1),(43,'D1',2,1,1,1),(44,'D2',2,1,1,1),(45,'D3',2,1,1,1),(46,'D4',2,1,1,1),(47,'D5',2,1,1,2),(48,'D6',2,1,1,2),(49,'D7',2,1,1,1),(50,'D8',2,1,1,1),(51,'D9',2,1,1,2),(52,'D10',2,1,1,2),(53,'D11',2,1,1,2),(54,'D12',2,1,1,1),(55,'D13',2,1,1,1),(56,'D14',2,1,1,1),(57,'E1',2,1,1,1),(58,'E2',2,1,1,1),(59,'E3',2,1,1,1),(60,'E4',2,1,1,1),(61,'E5',2,1,1,2),(62,'E6',2,1,1,2),(63,'E7',2,1,1,1),(64,'E8',2,1,1,1),(65,'E9',2,1,1,2),(66,'E10',2,1,1,2),(67,'E11',2,1,1,2),(68,'E12',2,1,1,1),(69,'E13',2,1,1,1),(70,'E14',2,1,1,1),(71,'F1',2,1,1,1),(72,'F2',2,1,1,1),(73,'F3',2,1,1,1),(74,'F4',2,1,1,1),(75,'F5',2,1,1,2),(76,'F6',2,1,1,2),(77,'F7',2,1,1,1),(78,'F8',2,1,1,1),(79,'F9',2,1,1,2),(80,'F10',2,1,1,2),(81,'F11',2,1,1,2),(82,'F12',2,1,1,1),(83,'F13',2,1,1,1),(84,'F14',2,1,1,1),(85,'G1',2,1,1,1),(86,'G2',2,1,1,1),(87,'G3',2,1,1,1),(88,'G4',2,1,1,1),(89,'G5',2,1,1,2),(90,'G6',2,1,1,2),(91,'G7',2,1,1,1),(92,'G8',2,1,1,1),(93,'G9',2,1,1,2),(94,'G10',2,1,1,2),(95,'G11',2,1,1,2),(96,'G12',2,1,1,1),(97,'G13',2,1,1,1),(98,'G14',2,1,1,1),(99,'A1',2,1,2,1),(100,'A2',2,1,2,1),(101,'A3',2,1,2,1),(102,'A4',2,1,2,1),(103,'A5',2,1,2,2),(104,'A6',2,1,2,2),(105,'A7',2,1,2,1),(106,'A8',2,1,2,1),(107,'A9',2,1,2,1),(108,'A10',2,1,2,1),(109,'A11',2,1,2,1),(110,'A12',2,1,2,1),(111,'A13',2,1,2,2),(112,'A14',2,1,2,2),(113,'B1',2,1,2,1),(114,'B2',2,1,2,1),(115,'B3',2,1,2,1),(116,'B4',2,1,2,1),(117,'B5',2,1,2,2),(118,'B6',2,1,2,2),(119,'B7',2,1,2,1),(120,'B8',2,1,2,1),(121,'B9',2,1,2,2),(122,'B10',2,1,2,2),(123,'B11',2,1,2,2),(124,'B12',2,1,2,1),(125,'B13',2,1,2,1),(126,'B14',2,1,2,1),(127,'C1',2,1,2,1),(128,'C2',2,1,2,1),(129,'C3',2,1,2,1),(130,'C4',2,1,2,1),(131,'C5',2,1,2,2),(132,'C6',2,1,2,2),(133,'C7',2,1,2,1),(134,'C8',2,1,2,1),(135,'C9',2,1,2,2),(136,'C10',2,1,2,2),(137,'C11',2,1,2,2),(138,'C12',2,1,2,1),(139,'C13',2,1,2,1),(140,'C14',2,1,2,1),(141,'D1',2,1,2,1),(142,'D2',2,1,2,1),(143,'D3',2,1,2,1),(144,'D4',2,1,2,1),(145,'D5',2,1,2,2),(146,'D6',2,1,2,2),(147,'D7',2,1,2,1),(148,'D8',2,1,2,1),(149,'D9',2,1,2,2),(150,'D10',2,1,2,2),(151,'D11',2,1,2,2),(152,'D12',2,1,2,1),(153,'D13',2,1,2,1),(154,'D14',2,1,2,1),(155,'E1',2,1,2,1),(156,'E2',2,1,2,1),(157,'E3',2,1,2,1),(158,'E4',2,1,2,1),(159,'E5',2,1,2,2),(160,'E6',2,1,2,2),(161,'E7',2,1,2,1),(162,'E8',2,1,2,1),(163,'E9',2,1,2,2),(164,'E10',2,1,2,2),(165,'E11',2,1,2,2),(166,'E12',2,1,2,1),(167,'E13',2,1,2,1),(168,'E14',2,1,2,1),(169,'F1',2,1,2,1),(170,'F2',2,1,2,1),(171,'F3',2,1,2,1),(172,'F4',2,1,2,1),(173,'F5',2,1,2,2),(174,'F6',2,1,2,2),(175,'F7',2,1,2,1),(176,'F8',2,1,2,1),(177,'F9',2,1,2,2),(178,'F10',2,1,2,2),(179,'F11',2,1,2,2),(180,'F12',2,1,2,1),(181,'F13',2,1,2,1),(182,'F14',2,1,2,1),(183,'G1',2,1,2,1),(184,'G2',2,1,2,1),(185,'G3',2,1,2,1),(186,'G4',2,1,2,1),(187,'G5',2,1,2,2),(188,'G6',2,1,2,2),(189,'G7',2,1,2,1),(190,'G8',2,1,2,1),(191,'G9',2,1,2,2),(192,'G10',2,1,2,2),(193,'G11',2,1,2,2),(194,'G12',2,1,2,1),(195,'G13',2,1,2,1),(196,'G14',2,1,2,1),(197,'A1',2,1,3,1),(198,'A2',2,1,3,1),(199,'A3',2,1,3,1),(200,'A4',2,1,3,1),(201,'A5',2,1,3,2),(202,'A6',2,1,3,2),(203,'A7',2,1,3,1),(204,'A8',2,1,3,1),(205,'A9',2,1,3,1),(206,'A10',2,1,3,1),(207,'A11',2,1,3,1),(208,'A12',2,1,3,1),(209,'A13',2,1,3,2),(210,'A14',2,1,3,2),(211,'B1',2,1,3,1),(212,'B2',2,1,3,1),(213,'B3',2,1,3,1),(214,'B4',2,1,3,1),(215,'B5',2,1,3,2),(216,'B6',2,1,3,2),(217,'B7',2,1,3,1),(218,'B8',2,1,3,1),(219,'B9',2,1,3,2),(220,'B10',2,1,3,2),(221,'B11',2,1,3,2),(222,'B12',2,1,3,1),(223,'B13',2,1,3,1),(224,'B14',2,1,3,1),(225,'C1',2,1,3,1),(226,'C2',2,1,3,1),(227,'C3',2,1,3,1),(228,'C4',2,1,3,1),(229,'C5',2,1,3,2),(230,'C6',2,1,3,2),(231,'C7',2,1,3,1),(232,'C8',2,1,3,1),(233,'C9',2,1,3,2),(234,'C10',2,1,3,2),(235,'C11',2,1,3,2),(236,'C12',2,1,3,1),(237,'C13',2,1,3,1),(238,'C14',2,1,3,1),(239,'D1',2,1,3,1),(240,'D2',2,1,3,1),(241,'D3',2,1,3,1),(242,'D4',2,1,3,1),(243,'D5',2,1,3,2),(244,'D6',2,1,3,2),(245,'D7',2,1,3,1),(246,'D8',2,1,3,1),(247,'D9',2,1,3,2),(248,'D10',2,1,3,2),(249,'D11',2,1,3,2),(250,'D12',2,1,3,1),(251,'D13',2,1,3,1),(252,'D14',2,1,3,1),(253,'E1',2,1,3,1),(254,'E2',2,1,3,1),(255,'E3',2,1,3,1),(256,'E4',2,1,3,1),(257,'E5',2,1,3,2),(258,'E6',2,1,3,2),(259,'E7',2,1,3,1),(260,'E8',2,1,3,1),(261,'E9',2,1,3,2),(262,'E10',2,1,3,2),(263,'E11',2,1,3,2),(264,'E12',2,1,3,1),(265,'E13',2,1,3,1),(266,'E14',2,1,3,1),(267,'F1',2,1,3,1),(268,'F2',2,1,3,1),(269,'F3',2,1,3,1),(270,'F4',2,1,3,1),(271,'F5',2,1,3,2),(272,'F6',2,1,3,2),(273,'F7',2,1,3,1),(274,'F8',2,1,3,1),(275,'F9',2,1,3,2),(276,'F10',2,1,3,2),(277,'F11',2,1,3,2),(278,'F12',2,1,3,1),(279,'F13',2,1,3,1),(280,'F14',2,1,3,1),(281,'G1',2,1,3,1),(282,'G2',2,1,3,1),(283,'G3',2,1,3,1),(284,'G4',2,1,3,1),(285,'G5',2,1,3,2),(286,'G6',2,1,3,2),(287,'G7',2,1,3,1),(288,'G8',2,1,3,1),(289,'G9',2,1,3,2),(290,'G10',2,1,3,2),(291,'G11',2,1,3,2),(292,'G12',2,1,3,1),(293,'G13',2,1,3,1),(294,'G1',2,1,3,1),(295,'A1',2,1,4,1),(296,'A2',2,1,4,1),(297,'A3',2,1,4,1),(298,'A4',2,1,4,1),(299,'A5',2,1,4,2),(300,'A6',2,1,4,2),(301,'A7',2,1,4,1),(302,'A8',2,1,4,1),(303,'A9',2,1,4,1),(304,'A10',2,1,4,1),(305,'A11',2,1,4,1),(306,'A12',2,1,4,1),(307,'A13',2,1,4,2),(308,'A14',2,1,4,2),(309,'B1',2,1,4,1),(310,'B2',2,1,4,1),(311,'B3',2,1,4,1),(312,'B4',2,1,4,1),(313,'B5',2,1,4,2),(314,'B6',2,1,4,2),(315,'B7',2,1,4,1),(316,'B8',2,1,4,1),(317,'B9',2,1,4,2),(318,'B10',2,1,4,2),(319,'B11',2,1,4,2),(320,'B12',2,1,4,1),(321,'B13',2,1,4,1),(322,'B14',2,1,4,1),(323,'C1',2,1,4,1),(324,'C2',2,1,4,1),(325,'C3',2,1,4,1),(326,'C4',2,1,4,1),(327,'C5',2,1,4,2),(328,'C6',2,1,4,2),(329,'C7',2,1,4,1),(330,'C8',2,1,4,1),(331,'C9',2,1,4,2),(332,'C10',2,1,4,2),(333,'C11',2,1,4,2),(334,'C12',2,1,4,1),(335,'C13',2,1,4,1),(336,'C14',2,1,4,1),(337,'D1',2,1,4,1),(338,'D2',2,1,4,1),(339,'D3',2,1,4,1),(340,'D4',2,1,4,1),(341,'D5',2,1,4,2),(342,'D6',2,1,4,2),(343,'D7',2,1,4,1),(344,'D8',2,1,4,1),(345,'D9',2,1,4,2),(346,'D10',2,1,4,2),(347,'D11',2,1,4,2),(348,'D12',2,1,4,1),(349,'D13',2,1,4,1),(350,'D14',2,1,4,1),(351,'E1',2,1,4,1),(352,'E2',2,1,4,1),(353,'E3',2,1,4,1),(354,'E4',2,1,4,1),(355,'E5',2,1,4,2),(356,'E6',2,1,4,2),(357,'E7',2,1,4,1),(358,'E8',2,1,4,1),(359,'E9',2,1,4,2),(360,'E10',2,1,4,2),(361,'E11',2,1,4,2),(362,'E12',2,1,4,1),(363,'E13',2,1,4,1),(364,'E14',2,1,4,1),(365,'F1',2,1,4,1),(366,'F2',2,1,4,1),(367,'F3',2,1,4,1),(368,'F4',2,1,4,1),(369,'F5',2,1,4,2),(370,'F6',2,1,4,2),(371,'F7',2,1,4,1),(372,'F8',2,1,4,1),(373,'F9',2,1,4,2),(374,'F10',2,1,4,2),(375,'F11',2,1,4,2),(376,'F12',2,1,4,1),(377,'F13',2,1,4,1),(378,'F14',2,1,4,1),(379,'G1',2,1,4,1),(380,'G2',2,1,4,1),(381,'G3',2,1,4,1),(382,'G4',2,1,4,1),(383,'G5',2,1,4,2),(384,'G6',2,1,4,2),(385,'G7',2,1,4,1),(386,'G8',2,1,4,1),(387,'G9',2,1,4,2),(388,'G10',2,1,4,2),(389,'G11',2,1,4,2),(390,'G12',2,1,4,1),(391,'G13',2,1,4,1),(392,'G14',2,1,4,1),(393,'A1',2,1,6,1),(394,'A2',2,1,6,1),(395,'A3',2,1,6,1),(396,'A4',2,1,6,1),(397,'A5',2,1,6,2),(398,'A6',2,1,6,2),(399,'A7',2,1,6,1),(400,'A8',2,1,6,1),(401,'A9',2,1,6,1),(402,'A10',2,1,6,1),(403,'A11',2,1,6,1),(404,'A12',2,1,6,1),(405,'A13',2,1,6,2),(406,'A14',2,1,6,2),(407,'B1',2,1,6,1),(408,'B2',2,1,6,1),(409,'B3',2,1,6,1),(410,'B4',2,1,6,1),(411,'B5',2,1,6,2),(412,'B6',2,1,6,2),(413,'B7',2,1,6,1),(414,'B8',2,1,6,1),(415,'B9',2,1,6,2),(416,'B10',2,1,6,2),(417,'B11',2,1,6,2),(418,'B12',2,1,6,1),(419,'B13',2,1,6,1),(420,'B14',2,1,6,1),(421,'C1',2,1,6,1),(422,'C2',2,1,6,1),(423,'C3',2,1,6,1),(424,'C4',2,1,6,1),(425,'C5',2,1,6,2),(426,'C6',2,1,6,2),(427,'C7',2,1,6,1),(428,'C8',2,1,6,1),(429,'C9',2,1,6,2),(430,'C10',2,1,6,2),(431,'C11',2,1,6,2),(432,'C12',2,1,6,1),(433,'C13',2,1,6,1),(434,'C14',2,1,6,1),(435,'D1',2,1,6,1),(436,'D2',2,1,6,1),(437,'D3',2,1,6,1),(438,'D4',2,1,6,1),(439,'D5',2,1,6,2),(440,'D6',2,1,6,2),(441,'D7',2,1,6,1),(442,'D8',2,1,6,1),(443,'D9',2,1,6,2),(444,'D10',2,1,6,2),(445,'D11',2,1,6,2),(446,'D12',2,1,6,1),(447,'D13',2,1,6,1),(448,'D14',2,1,6,1),(449,'E1',2,1,6,1),(450,'E2',2,1,6,1),(451,'E3',2,1,6,1),(452,'E4',2,1,6,1),(453,'E5',2,1,6,2),(454,'E6',2,1,6,2),(455,'E7',2,1,6,1),(456,'E8',2,1,6,1),(457,'E9',2,1,6,2),(458,'E10',2,1,6,2),(459,'E11',2,1,6,2),(460,'E12',2,1,6,1),(461,'E13',2,1,6,1),(462,'E14',2,1,6,1),(463,'F1',2,1,6,1),(464,'F2',2,1,6,1),(465,'F3',2,1,6,1),(466,'F4',2,1,6,1),(467,'F5',2,1,6,2),(468,'F6',2,1,6,2),(469,'F7',2,1,6,1),(470,'F8',2,1,6,1),(471,'F9',2,1,6,2),(472,'F10',2,1,6,2),(473,'F11',2,1,6,2),(474,'F12',2,1,6,1),(475,'F13',2,1,6,1),(476,'F14',2,1,6,1),(477,'A1',2,1,7,1),(478,'A2',2,1,7,1),(479,'A3',2,1,7,1),(480,'A4',2,1,7,1),(481,'A5',2,1,7,2),(482,'A6',2,1,7,2),(483,'A7',2,1,7,1),(484,'A8',2,1,7,1),(485,'A9',2,1,7,1),(486,'A10',2,1,7,1),(487,'A11',2,1,7,1),(488,'A12',2,1,7,1),(489,'A13',2,1,7,2),(490,'A14',2,1,7,2),(491,'B1',2,1,7,1),(492,'B2',2,1,7,1),(493,'B3',2,1,7,1),(494,'B4',2,1,7,1),(495,'B5',2,1,7,2),(496,'B6',2,1,7,2),(497,'B7',2,1,7,1),(498,'B8',2,1,7,1),(499,'B9',2,1,7,2),(500,'B10',2,1,7,2),(501,'B11',2,1,7,2),(502,'B12',2,1,7,1),(503,'B13',2,1,7,1),(504,'B14',2,1,7,1),(505,'C1',2,1,7,1),(506,'C2',2,1,7,1),(507,'C3',2,1,7,1),(508,'C4',2,1,7,1),(509,'C5',2,1,7,2),(510,'C6',2,1,7,2),(511,'C7',2,1,7,1),(512,'C8',2,1,7,1),(513,'C9',2,1,7,2),(514,'C10',2,1,7,2),(515,'C11',2,1,7,2),(516,'C12',2,1,7,1),(517,'C13',2,1,7,1),(518,'C14',2,1,7,1),(519,'D1',2,1,7,1),(520,'D2',2,1,7,1),(521,'D3',2,1,7,1),(522,'D4',2,1,7,1),(523,'D5',2,1,7,2),(524,'D6',2,1,7,2),(525,'D7',2,1,7,1),(526,'D8',2,1,7,1),(527,'D9',2,1,7,2),(528,'D10',2,1,7,2),(529,'D11',2,1,7,2),(530,'D12',2,1,7,1),(531,'D13',2,1,7,1),(532,'D14',2,1,7,1),(533,'E1',2,1,7,1),(534,'E2',2,1,7,1),(535,'E3',2,1,7,1),(536,'E4',2,1,7,1),(537,'E5',2,1,7,2),(538,'E6',2,1,7,2),(539,'E7',2,1,7,1),(540,'E8',2,1,7,1),(541,'E9',2,1,7,2),(542,'E10',2,1,7,2),(543,'E11',2,1,7,2),(544,'E12',2,1,7,1),(545,'E13',2,1,7,1),(546,'E14',2,1,7,1),(547,'F1',2,1,7,1),(548,'F2',2,1,7,1),(549,'F3',2,1,7,1),(550,'F4',2,1,7,1),(551,'F5',2,1,7,2),(552,'F6',2,1,7,2),(553,'F7',2,1,7,1),(554,'F8',2,1,7,1),(555,'F9',2,1,7,2),(556,'F10',2,1,7,2),(557,'F11',2,1,7,2),(558,'F12',2,1,7,1),(559,'F13',2,1,7,1),(560,'F14',2,1,7,1),(561,'A1',2,1,8,1),(562,'A2',2,1,8,1),(563,'A3',2,1,8,1),(564,'A4',2,1,8,1),(565,'A5',2,1,8,2),(566,'A6',2,1,8,2),(567,'A7',2,1,8,1),(568,'A8',2,1,8,1),(569,'A9',2,1,8,1),(570,'A10',2,1,8,1),(571,'A11',2,1,8,1),(572,'A12',2,1,8,1),(573,'A13',2,1,8,2),(574,'A14',2,1,8,2),(575,'B1',2,1,8,1),(576,'B2',2,1,8,1),(577,'B3',2,1,8,1),(578,'B4',2,1,8,1),(579,'B5',2,1,8,2),(580,'B6',2,1,8,2),(581,'B7',2,1,8,1),(582,'B8',2,1,8,1),(583,'B9',2,1,8,2),(584,'B10',2,1,8,2),(585,'B11',2,1,8,2),(586,'B12',2,1,8,1),(587,'B13',2,1,8,1),(588,'B14',2,1,8,1),(589,'C1',2,1,8,1),(590,'C2',2,1,8,1),(591,'C3',2,1,8,1),(592,'C4',2,1,8,1),(593,'C5',2,1,8,2),(594,'C6',2,1,8,2),(595,'C7',2,1,8,1),(596,'C8',2,1,8,1),(597,'C9',2,1,8,2),(598,'C10',2,1,8,2),(599,'C11',2,1,8,2),(600,'C12',2,1,8,1),(601,'C13',2,1,8,1),(602,'C14',2,1,8,1),(603,'D1',2,1,8,1),(604,'D2',2,1,8,1),(605,'D3',2,1,8,1),(606,'D4',2,1,8,1),(607,'D5',2,1,8,2),(608,'D6',2,1,8,2),(609,'D7',2,1,8,1),(610,'D8',2,1,8,1),(611,'D9',2,1,8,2),(612,'D10',2,1,8,2),(613,'D11',2,1,8,2),(614,'D12',2,1,8,1),(615,'D13',2,1,8,1),(616,'D14',2,1,8,1),(617,'E1',2,1,8,1),(618,'E2',2,1,8,1),(619,'E3',2,1,8,1),(620,'E4',2,1,8,1),(621,'E5',2,1,8,2),(622,'E6',2,1,8,2),(623,'E7',2,1,8,1),(624,'E8',2,1,8,1),(625,'E9',2,1,8,2),(626,'E10',2,1,8,2),(627,'E11',2,1,8,2),(628,'E12',2,1,8,1),(629,'E13',2,1,8,1),(630,'E14',2,1,8,1),(631,'F1',2,1,8,1),(632,'F2',2,1,8,1),(633,'F3',2,1,8,1),(634,'F4',2,1,8,1),(635,'F5',2,1,8,2),(636,'F6',2,1,8,2),(637,'F7',2,1,8,1),(638,'F8',2,1,8,1),(639,'F9',2,1,8,2),(640,'F10',2,1,8,2),(641,'F11',2,1,8,2),(642,'F12',2,1,8,1),(643,'F13',2,1,8,1),(644,'F14',2,1,8,1),(645,'A1',2,1,9,1),(646,'A2',2,1,9,1),(647,'A3',2,1,9,1),(648,'A4',2,1,9,1),(649,'A5',2,1,9,2),(650,'A6',2,1,9,2),(651,'A7',2,1,9,1),(652,'A8',2,1,9,1),(653,'A9',2,1,9,1),(654,'A10',2,1,9,1),(655,'A11',2,1,9,1),(656,'A12',2,1,9,1),(657,'A13',2,1,9,2),(658,'A14',2,1,9,2),(659,'B1',2,1,9,1),(660,'B2',2,1,9,1),(661,'B3',2,1,9,1),(662,'B4',2,1,9,1),(663,'B5',2,1,9,2),(664,'B6',2,1,9,2),(665,'B7',2,1,9,1),(666,'B8',2,1,9,1),(667,'B9',2,1,9,2),(668,'B10',2,1,9,2),(669,'B11',2,1,9,2),(670,'B12',2,1,9,1),(671,'B13',2,1,9,1),(672,'B14',2,1,9,1),(673,'C1',2,1,9,1),(674,'C2',2,1,9,1),(675,'C3',2,1,9,1),(676,'C4',2,1,9,1),(677,'C5',2,1,9,2),(678,'C6',2,1,9,2),(679,'C7',2,1,9,1),(680,'C8',2,1,9,1),(681,'C9',2,1,9,2),(682,'C10',2,1,9,2),(683,'C11',2,1,9,2),(684,'C12',2,1,9,1),(685,'C13',2,1,9,1),(686,'C14',2,1,9,1),(687,'D1',2,1,9,1),(688,'D2',2,1,9,1),(689,'D3',2,1,9,1),(690,'D4',2,1,9,1),(691,'D5',2,1,9,2),(692,'D6',2,1,9,2),(693,'D7',2,1,9,1),(694,'D8',2,1,9,1),(695,'D9',2,1,9,2),(696,'D10',2,1,9,2),(697,'D11',2,1,9,2),(698,'D12',2,1,9,1),(699,'D13',2,1,9,1),(700,'D14',2,1,9,1),(701,'E1',2,1,9,1),(702,'E2',2,1,9,1),(703,'E3',2,1,9,1),(704,'E4',2,1,9,1),(705,'E5',2,1,9,2),(706,'E6',2,1,9,2),(707,'E7',2,1,9,1),(708,'E8',2,1,9,1),(709,'E9',2,1,9,2),(710,'E10',2,1,9,2),(711,'E11',2,1,9,2),(712,'E12',2,1,9,1),(713,'E13',2,1,9,1),(714,'E14',2,1,9,1),(715,'F1',2,1,9,1),(716,'F2',2,1,9,1),(717,'F3',2,1,9,1),(718,'F4',2,1,9,1),(719,'F5',2,1,9,2),(720,'F6',2,1,9,2),(721,'F7',2,1,9,1),(722,'F8',2,1,9,1),(723,'F9',2,1,9,2),(724,'F10',2,1,9,2),(725,'F11',2,1,9,2),(726,'F12',2,1,9,1),(727,'F13',2,1,9,1),(728,'F14',2,1,9,1),(729,'A1',2,2,36,1),(730,'A2',2,2,36,1),(731,'A3',2,2,36,1),(732,'A4',2,2,36,1),(733,'A5',2,2,36,2),(734,'A6',2,2,36,2),(735,'A7',2,2,36,1),(736,'A8',2,2,36,1),(737,'A9',2,2,36,1),(738,'A10',2,2,36,1),(739,'A11',2,2,36,1),(740,'A12',2,2,36,1),(741,'A13',2,2,36,2),(742,'A14',2,2,36,2),(743,'B1',2,2,36,1),(744,'B2',2,2,36,1),(745,'B3',2,2,36,1),(746,'B4',2,2,36,1),(747,'B5',2,2,36,2),(748,'B6',2,2,36,2),(749,'B7',2,2,36,1),(750,'B8',2,2,36,1),(751,'B9',2,2,36,2),(752,'B10',2,2,36,2),(753,'B11',2,2,36,2),(754,'B12',2,2,36,1),(755,'B13',2,2,36,1),(756,'B14',2,2,36,1),(757,'C1',2,2,36,1),(758,'C2',2,2,36,1),(759,'C3',2,2,36,1),(760,'C4',2,2,36,1),(761,'C5',2,2,36,2),(762,'C6',2,2,36,2),(763,'C7',2,2,36,1),(764,'C8',2,2,36,1),(765,'C9',2,2,36,2),(766,'C10',2,2,36,2),(767,'C11',2,2,36,2),(768,'C12',2,2,36,1),(769,'C13',2,2,36,1),(770,'C14',2,2,36,1),(771,'D1',2,2,36,1),(772,'D2',2,2,36,1),(773,'D3',2,2,36,1),(774,'D4',2,2,36,1),(775,'D5',2,2,36,2),(776,'D6',2,2,36,2),(777,'D7',2,2,36,1),(778,'D8',2,2,36,1),(779,'D9',2,2,36,2),(780,'D10',2,2,36,2),(781,'D11',2,2,36,2),(782,'D12',2,2,36,1),(783,'D13',2,2,36,1),(784,'D14',2,2,36,1),(785,'E1',2,2,36,1),(786,'E2',2,2,36,1),(787,'E3',2,2,36,1),(788,'E4',2,2,36,1),(789,'E5',2,2,36,2),(790,'E6',2,2,36,2),(791,'E7',2,2,36,1),(792,'E8',2,2,36,1),(793,'E9',2,2,36,2),(794,'E10',2,2,36,2),(795,'E11',2,2,36,2),(796,'E12',2,2,36,1),(797,'E13',2,2,36,1),(798,'E14',2,2,36,1),(799,'F1',2,2,36,1),(800,'F2',2,2,36,1),(801,'F3',2,2,36,1),(802,'F4',2,2,36,1),(803,'F5',2,2,36,2),(804,'F6',2,2,36,2),(805,'F7',2,2,36,1),(806,'F8',2,2,36,1),(807,'F9',2,2,36,2),(808,'F10',2,2,36,2),(809,'F11',2,2,36,2),(810,'F12',2,2,36,1),(811,'F13',2,2,36,1),(812,'F14',2,2,36,1),(813,'G1',2,2,36,1),(814,'G2',2,2,36,1),(815,'G3',2,2,36,1),(816,'G4',2,2,36,1),(817,'G5',2,2,36,2),(818,'G6',2,2,36,2),(819,'G7',2,2,36,1),(820,'G8',2,2,36,1),(821,'G9',2,2,36,2),(822,'G10',2,2,36,2),(823,'G11',2,2,36,2),(824,'G12',2,2,36,1),(825,'G13',2,2,36,1),(826,'G14',2,2,36,1),(828,'A1',2,1,10,1),(829,'A2',2,1,10,1),(830,'A3',2,1,10,1),(831,'A4',2,1,10,1),(832,'A5',2,1,10,1),(833,'A6',2,1,10,1),(834,'A7',2,1,10,1),(835,'A8',2,1,10,1),(836,'A9',2,1,10,1),(837,'A10',2,1,10,1),(838,'A11',2,1,10,1),(839,'A12',2,1,10,1),(840,'A13',2,1,10,1),(841,'A14',2,1,10,1),(842,'B1',2,1,10,1),(843,'B2',2,1,10,1),(844,'B3',2,1,10,1),(845,'B4',2,1,10,1),(846,'B5',2,1,10,1),(847,'B6',2,1,10,1),(848,'B7',2,1,10,1),(849,'B8',2,1,10,1),(850,'B9',2,1,10,1),(851,'B10',2,1,10,1),(852,'B11',2,1,10,1),(853,'B12',2,1,10,1),(854,'B13',2,1,10,1),(855,'B14',2,1,10,1),(856,'C1',2,1,10,1),(857,'C2',2,1,10,1),(858,'C3',2,1,10,1),(859,'C4',2,1,10,1),(860,'C5',2,1,10,1),(861,'C6',2,1,10,1),(862,'C7',2,1,10,1),(863,'C8',2,1,10,1),(864,'C9',2,1,10,1),(865,'C10',2,1,10,1),(866,'C11',2,1,10,1),(867,'C12',2,1,10,1),(868,'C13',2,1,10,1),(869,'C14',2,1,10,1),(870,'D1',2,1,10,1),(871,'D2',2,1,10,1),(872,'D3',2,1,10,1),(873,'D4',2,1,10,1),(874,'D5',2,1,10,1),(875,'D6',2,1,10,1),(876,'D7',2,1,10,1),(877,'D8',2,1,10,1),(878,'D9',2,1,10,1),(879,'D10',2,1,10,1),(880,'D11',2,1,10,1),(881,'D12',2,1,10,1),(882,'D13',2,1,10,1),(883,'D14',2,1,10,1),(884,'E1',2,1,10,1),(885,'E2',2,1,10,1),(886,'E3',2,1,10,1),(887,'E4',2,1,10,1),(888,'E5',2,1,10,1),(889,'E6',2,1,10,1),(890,'E7',2,1,10,1),(891,'E8',2,1,10,1),(892,'E9',2,1,10,1),(893,'E10',2,1,10,1),(894,'E11',2,1,10,1),(895,'E12',2,1,10,1),(896,'E13',2,1,10,1),(897,'E14',2,1,10,1),(898,'F1',2,1,10,1),(899,'F2',2,1,10,1),(900,'F3',2,1,10,1),(901,'F4',2,1,10,1),(902,'F5',2,1,10,1),(903,'F6',2,1,10,1),(904,'F7',2,1,10,1),(905,'F8',2,1,10,1),(906,'F9',2,1,10,1),(907,'F10',2,1,10,1),(908,'F11',2,1,10,1),(909,'F12',2,1,10,1),(910,'F13',2,1,10,1),(911,'F14',2,1,10,1),(912,'G1',2,1,10,1),(913,'G2',2,1,10,1),(914,'G3',2,1,10,1),(915,'G4',2,1,10,1),(916,'G5',2,1,10,1),(917,'G6',2,1,10,1),(918,'G7',2,1,10,1),(919,'G8',2,1,10,1),(920,'G9',2,1,10,1),(921,'G10',2,1,10,1),(922,'G11',2,1,10,1),(923,'G12',2,1,10,1),(924,'G13',2,1,10,1),(925,'G14',2,1,10,1),(926,'A1',2,1,179,1),(927,'A2',2,1,179,1),(928,'A3',2,1,179,1),(929,'A4',2,1,179,1),(930,'A5',2,1,179,1),(931,'A6',2,1,179,1),(932,'A7',2,1,179,1),(933,'A8',2,1,179,1),(934,'A9',2,1,179,1),(935,'A10',2,1,179,1),(936,'A11',2,1,179,1),(937,'A12',2,1,179,1),(938,'A13',2,1,179,1),(939,'A14',2,1,179,1),(940,'B1',2,1,179,1),(941,'B2',2,1,179,1),(942,'B3',2,1,179,1),(943,'B4',2,1,179,1),(944,'B5',2,1,179,1),(945,'B6',2,1,179,1),(946,'B7',2,1,179,1),(947,'B8',2,1,179,1),(948,'B9',2,1,179,1),(949,'B10',2,1,179,1),(950,'B11',2,1,179,1),(951,'B12',2,1,179,1),(952,'B13',2,1,179,1),(953,'B14',2,1,179,1),(954,'C1',2,1,179,1),(955,'C2',2,1,179,1),(956,'C3',2,1,179,1),(957,'C4',2,1,179,1),(958,'C5',2,1,179,1),(959,'C6',2,1,179,1),(960,'C7',2,1,179,1),(961,'C8',2,1,179,1),(962,'C9',2,1,179,1),(963,'C10',2,1,179,1),(964,'C11',2,1,179,1),(965,'C12',2,1,179,1),(966,'C13',2,1,179,1),(967,'C14',2,1,179,1),(968,'D1',2,1,179,1),(969,'D2',2,1,179,1),(970,'D3',2,1,179,1),(971,'D4',2,1,179,1),(972,'D5',2,1,179,1),(973,'D6',2,1,179,1),(974,'D7',2,1,179,1),(975,'D8',2,1,179,1),(976,'D9',2,1,179,1),(977,'D10',2,1,179,1),(978,'D11',2,1,179,1),(979,'D12',2,1,179,1),(980,'D13',2,1,179,1),(981,'D14',2,1,179,1),(982,'E1',2,1,179,1),(983,'E2',2,1,179,1),(984,'E3',2,1,179,1),(985,'E4',2,1,179,1),(986,'E5',2,1,179,1),(987,'E6',2,1,179,1),(988,'E7',2,1,179,1),(989,'E8',2,1,179,1),(990,'E9',2,1,179,1),(991,'E10',2,1,179,1),(992,'E11',2,1,179,1),(993,'E12',2,1,179,1),(994,'E13',2,1,179,1),(995,'E14',2,1,179,1),(996,'F1',2,1,179,1),(997,'F2',2,1,179,1),(998,'F3',2,1,179,1),(999,'F4',2,1,179,1),(1000,'F5',2,1,179,1),(1001,'F6',2,1,179,1),(1002,'F7',2,1,179,1),(1003,'F8',2,1,179,1),(1004,'F9',2,1,179,1),(1005,'F10',2,1,179,1),(1006,'F11',2,1,179,1),(1007,'F12',2,1,179,1),(1008,'F13',2,1,179,1),(1009,'F14',2,1,179,1),(1010,'G1',2,1,179,1),(1011,'G2',2,1,179,1),(1012,'G3',2,1,179,1),(1013,'G4',2,1,179,1),(1014,'G5',2,1,179,1),(1015,'G6',2,1,179,1),(1016,'G7',2,1,179,1),(1017,'G8',2,1,179,1),(1018,'G9',2,1,179,1),(1019,'G10',2,1,179,1),(1020,'G11',2,1,179,1),(1021,'G12',2,1,179,1),(1022,'G13',2,1,179,1),(1023,'G14',2,1,179,1),(1024,'A1',2,1,180,1),(1025,'A2',2,1,180,1),(1026,'A3',2,1,180,1),(1027,'A4',2,1,180,1),(1028,'A5',2,1,180,1),(1029,'A6',2,1,180,1),(1030,'A7',2,1,180,1),(1031,'A8',2,1,180,1),(1032,'A9',2,1,180,1),(1033,'A10',2,1,180,1),(1034,'A11',2,1,180,1),(1035,'A12',2,1,180,1),(1036,'A13',2,1,180,1),(1037,'A14',2,1,180,1),(1038,'B1',2,1,180,1),(1039,'B2',2,1,180,1),(1040,'B3',2,1,180,1),(1041,'B4',2,1,180,1),(1042,'B5',2,1,180,1),(1043,'B6',2,1,180,1),(1044,'B7',2,1,180,1),(1045,'B8',2,1,180,1),(1046,'B9',2,1,180,1),(1047,'B10',2,1,180,1),(1048,'B11',2,1,180,1),(1049,'B12',2,1,180,1),(1050,'B13',2,1,180,1),(1051,'B14',2,1,180,1),(1052,'C1',2,1,180,1),(1053,'C2',2,1,180,1),(1054,'C3',2,1,180,1),(1055,'C4',2,1,180,1),(1056,'C5',2,1,180,1),(1057,'C6',2,1,180,1),(1058,'C7',2,1,180,1),(1059,'C8',2,1,180,1),(1060,'C9',2,1,180,1),(1061,'C10',2,1,180,1),(1062,'C11',2,1,180,1),(1063,'C12',2,1,180,1),(1064,'C13',2,1,180,1),(1065,'C14',2,1,180,1),(1066,'D1',2,1,180,1),(1067,'D2',2,1,180,1),(1068,'D3',2,1,180,1),(1069,'D4',2,1,180,1),(1070,'D5',2,1,180,1),(1071,'D6',2,1,180,1),(1072,'D7',2,1,180,1),(1073,'D8',2,1,180,1),(1074,'D9',2,1,180,1),(1075,'D10',2,1,180,1),(1076,'D11',2,1,180,1),(1077,'D12',2,1,180,1),(1078,'D13',2,1,180,1),(1079,'D14',2,1,180,1),(1080,'E1',2,1,180,1),(1081,'E2',2,1,180,1),(1082,'E3',2,1,180,1),(1083,'E4',2,1,180,1),(1084,'E5',2,1,180,1),(1085,'E6',2,1,180,1),(1086,'E7',2,1,180,1),(1087,'E8',2,1,180,1),(1088,'E9',2,1,180,1),(1089,'E10',2,1,180,1),(1090,'E11',2,1,180,1),(1091,'E12',2,1,180,1),(1092,'E13',2,1,180,1),(1093,'E14',2,1,180,1),(1094,'F1',2,1,180,1),(1095,'F2',2,1,180,1),(1096,'F3',2,1,180,1),(1097,'F4',2,1,180,1),(1098,'F5',2,1,180,1),(1099,'F6',2,1,180,1),(1100,'F7',2,1,180,1),(1101,'F8',2,1,180,1),(1102,'F9',2,1,180,1),(1103,'F10',2,1,180,1),(1104,'F11',2,1,180,1),(1105,'F12',2,1,180,1),(1106,'F13',2,1,180,1),(1107,'F14',2,1,180,1),(1108,'G1',2,1,180,1),(1109,'G2',2,1,180,1),(1110,'G3',2,1,180,1),(1111,'G4',2,1,180,1),(1112,'G5',2,1,180,1),(1113,'G6',2,1,180,1),(1114,'G7',2,1,180,1),(1115,'G8',2,1,180,1),(1116,'G9',2,1,180,1),(1117,'G10',2,1,180,1),(1118,'G11',2,1,180,1),(1119,'G12',2,1,180,1),(1120,'G13',2,1,180,1),(1121,'G14',2,1,180,1),(1122,'A1',2,1,178,1),(1123,'A2',2,1,178,1),(1124,'A3',2,1,178,1),(1125,'A4',2,1,178,1),(1126,'A5',2,1,178,1),(1127,'A6',2,1,178,1),(1128,'A7',2,1,178,1),(1129,'A8',2,1,178,1),(1130,'A9',2,1,178,1),(1131,'A10',2,1,178,1),(1132,'A11',2,1,178,1),(1133,'A12',2,1,178,1),(1134,'A13',2,1,178,1),(1135,'A14',2,1,178,1),(1136,'B1',2,1,178,1),(1137,'B2',2,1,178,1),(1138,'B3',2,1,178,1),(1139,'B4',2,1,178,1),(1140,'B5',2,1,178,1),(1141,'B6',2,1,178,1),(1142,'B7',2,1,178,1),(1143,'B8',2,1,178,1),(1144,'B9',2,1,178,1),(1145,'B10',2,1,178,1),(1146,'B11',2,1,178,1),(1147,'B12',2,1,178,1),(1148,'B13',2,1,178,1),(1149,'B14',2,1,178,1),(1150,'C1',2,1,178,1),(1151,'C2',2,1,178,1),(1152,'C3',2,1,178,1),(1153,'C4',2,1,178,1),(1154,'C5',2,1,178,1),(1155,'C6',2,1,178,1),(1156,'C7',2,1,178,1),(1157,'C8',2,1,178,1),(1158,'C9',2,1,178,1),(1159,'C10',2,1,178,1),(1160,'C11',2,1,178,1),(1161,'C12',2,1,178,1),(1162,'C13',2,1,178,1),(1163,'C14',2,1,178,1),(1164,'D1',2,1,178,1),(1165,'D2',2,1,178,1),(1166,'D3',2,1,178,1),(1167,'D4',2,1,178,1),(1168,'D5',2,1,178,1),(1169,'D6',2,1,178,1),(1170,'D7',2,1,178,1),(1171,'D8',2,1,178,1),(1172,'D9',2,1,178,1),(1173,'D10',2,1,178,1),(1174,'D11',2,1,178,1),(1175,'D12',2,1,178,1),(1176,'D13',2,1,178,1),(1177,'D14',2,1,178,1),(1178,'E1',2,1,178,1),(1179,'E2',2,1,178,1),(1180,'E3',2,1,178,1),(1181,'E4',2,1,178,1),(1182,'E5',2,1,178,1),(1183,'E6',2,1,178,1),(1184,'E7',2,1,178,1),(1185,'E8',2,1,178,1),(1186,'E9',2,1,178,1),(1187,'E10',2,1,178,1),(1188,'E11',2,1,178,1),(1189,'E12',2,1,178,1),(1190,'E13',2,1,178,1),(1191,'E14',2,1,178,1),(1192,'F1',2,1,178,1),(1193,'F2',2,1,178,1),(1194,'F3',2,1,178,1),(1195,'F4',2,1,178,1),(1196,'F5',2,1,178,1),(1197,'F6',2,1,178,1),(1198,'F7',2,1,178,1),(1199,'F8',2,1,178,1),(1200,'F9',2,1,178,1),(1201,'F10',2,1,178,1),(1202,'F11',2,1,178,1),(1203,'F12',2,1,178,1),(1204,'F13',2,1,178,1),(1205,'F14',2,1,178,1),(1206,'G1',2,1,178,1),(1207,'G2',2,1,178,1),(1208,'G3',2,1,178,1),(1209,'G4',2,1,178,1),(1210,'G5',2,1,178,1),(1211,'G6',2,1,178,1),(1212,'G7',2,1,178,1),(1213,'G8',2,1,178,1),(1214,'G9',2,1,178,1),(1215,'G10',2,1,178,1),(1216,'G11',2,1,178,1),(1217,'G12',2,1,178,1),(1218,'G13',2,1,178,1),(1219,'G14',2,1,178,1),(1220,'A1',2,1,174,1),(1221,'A2',2,1,174,1),(1222,'A3',2,1,174,1),(1223,'A4',2,1,174,1),(1224,'A5',2,1,174,1),(1225,'A6',2,1,174,1),(1226,'A7',2,1,174,1),(1227,'A8',2,1,174,1),(1228,'A9',2,1,174,1),(1229,'A10',2,1,174,1),(1230,'A11',2,1,174,1),(1231,'A12',2,1,174,1),(1232,'A13',2,1,174,1),(1233,'A14',2,1,174,1),(1234,'B1',2,1,174,1),(1235,'B2',2,1,174,1),(1236,'B3',2,1,174,1),(1237,'B4',2,1,174,1),(1238,'B5',2,1,174,1),(1239,'B6',2,1,174,1),(1240,'B7',2,1,174,1),(1241,'B8',2,1,174,1),(1242,'B9',2,1,174,1),(1243,'B10',2,1,174,1),(1244,'B11',2,1,174,1),(1245,'B12',2,1,174,1),(1246,'B13',2,1,174,1),(1247,'B14',2,1,174,1),(1248,'C1',2,1,174,1),(1249,'C2',2,1,174,1),(1250,'C3',2,1,174,1),(1251,'C4',2,1,174,1),(1252,'C5',2,1,174,1),(1253,'C6',2,1,174,1),(1254,'C7',2,1,174,1),(1255,'C8',2,1,174,1),(1256,'C9',2,1,174,1),(1257,'C10',2,1,174,1),(1258,'C11',2,1,174,1),(1259,'C12',2,1,174,1),(1260,'C13',2,1,174,1),(1261,'C14',2,1,174,1),(1262,'D1',2,1,174,1),(1263,'D2',2,1,174,1),(1264,'D3',2,1,174,1),(1265,'D4',2,1,174,1),(1266,'D5',2,1,174,1),(1267,'D6',2,1,174,1),(1268,'D7',2,1,174,1),(1269,'D8',2,1,174,1),(1270,'D9',2,1,174,1),(1271,'D10',2,1,174,1),(1272,'D11',2,1,174,1),(1273,'D12',2,1,174,1),(1274,'D13',2,1,174,1),(1275,'D14',2,1,174,1),(1276,'E1',2,1,174,1),(1277,'E2',2,1,174,1),(1278,'E3',2,1,174,1),(1279,'E4',2,1,174,1),(1280,'E5',2,1,174,1),(1281,'E6',2,1,174,1),(1282,'E7',2,1,174,1),(1283,'E8',2,1,174,1),(1284,'E9',2,1,174,1),(1285,'E10',2,1,174,1),(1286,'E11',2,1,174,1),(1287,'E12',2,1,174,1),(1288,'E13',2,1,174,1),(1289,'E14',2,1,174,1),(1290,'F1',2,1,174,1),(1291,'F2',2,1,174,1),(1292,'F3',2,1,174,1),(1293,'F4',2,1,174,1),(1294,'F5',2,1,174,1),(1295,'F6',2,1,174,1),(1296,'F7',2,1,174,1),(1297,'F8',2,1,174,1),(1298,'F9',2,1,174,1),(1299,'F10',2,1,174,1),(1300,'F11',2,1,174,1),(1301,'F12',2,1,174,1),(1302,'F13',2,1,174,1),(1303,'F14',2,1,174,1),(1304,'G1',2,1,174,1),(1305,'G2',2,1,174,1),(1306,'G3',2,1,174,1),(1307,'G4',2,1,174,1),(1308,'G5',2,1,174,1),(1309,'G6',2,1,174,1),(1310,'G7',2,1,174,1),(1311,'G8',2,1,174,1),(1312,'G9',2,1,174,1),(1313,'G10',2,1,174,1),(1314,'G11',2,1,174,1),(1315,'G12',2,1,174,1),(1316,'G13',2,1,174,1),(1317,'G14',2,1,174,1),(1318,'A1',2,1,177,1),(1319,'A2',2,1,177,1),(1320,'A3',2,1,177,1),(1321,'A4',2,1,177,1),(1322,'A5',2,1,177,1),(1323,'A6',2,1,177,1),(1324,'A7',2,1,177,1),(1325,'A8',2,1,177,1),(1326,'A9',2,1,177,1),(1327,'A10',2,1,177,1),(1328,'A11',2,1,177,1),(1329,'A12',2,1,177,1),(1330,'A13',2,1,177,1),(1331,'A14',2,1,177,1),(1332,'B1',2,1,177,1),(1333,'B2',2,1,177,1),(1334,'B3',2,1,177,1),(1335,'B4',2,1,177,1),(1336,'B5',2,1,177,1),(1337,'B6',2,1,177,1),(1338,'B7',2,1,177,1),(1339,'B8',2,1,177,1),(1340,'B9',2,1,177,1),(1341,'B10',2,1,177,1),(1342,'B11',2,1,177,1),(1343,'B12',2,1,177,1),(1344,'B13',2,1,177,1),(1345,'B14',2,1,177,1),(1346,'C1',2,1,177,1),(1347,'C2',2,1,177,1),(1348,'C3',2,1,177,1),(1349,'C4',2,1,177,1),(1350,'C5',2,1,177,1),(1351,'C6',2,1,177,1),(1352,'C7',2,1,177,1),(1353,'C8',2,1,177,1),(1354,'C9',2,1,177,1),(1355,'C10',2,1,177,1),(1356,'C11',2,1,177,1),(1357,'C12',2,1,177,1),(1358,'C13',2,1,177,1),(1359,'C14',2,1,177,1),(1360,'D1',2,1,177,1),(1361,'D2',2,1,177,1),(1362,'D3',2,1,177,1),(1363,'D4',2,1,177,1),(1364,'D5',2,1,177,1),(1365,'D6',2,1,177,1),(1366,'D7',2,1,177,1),(1367,'D8',2,1,177,1),(1368,'D9',2,1,177,1),(1369,'D10',2,1,177,1),(1370,'D11',2,1,177,1),(1371,'D12',2,1,177,1),(1372,'D13',2,1,177,1),(1373,'D14',2,1,177,1),(1374,'E1',2,1,177,1),(1375,'E2',2,1,177,1),(1376,'E3',2,1,177,1),(1377,'E4',2,1,177,1),(1378,'E5',2,1,177,1),(1379,'E6',2,1,177,1),(1380,'E7',2,1,177,1),(1381,'E8',2,1,177,1),(1382,'E9',2,1,177,1),(1383,'E10',2,1,177,1),(1384,'E11',2,1,177,1),(1385,'E12',2,1,177,1),(1386,'E13',2,1,177,1),(1387,'E14',2,1,177,1),(1388,'F1',2,1,177,1),(1389,'F2',2,1,177,1),(1390,'F3',2,1,177,1),(1391,'F4',2,1,177,1),(1392,'F5',2,1,177,1),(1393,'F6',2,1,177,1),(1394,'F7',2,1,177,1),(1395,'F8',2,1,177,1),(1396,'F9',2,1,177,1),(1397,'F10',2,1,177,1),(1398,'F11',2,1,177,1),(1399,'F12',2,1,177,1),(1400,'F13',2,1,177,1),(1401,'F14',2,1,177,1),(1402,'G1',2,1,177,1),(1403,'G2',2,1,177,1),(1404,'G3',2,1,177,1),(1405,'G4',2,1,177,1),(1406,'G5',2,1,177,1),(1407,'G6',2,1,177,1),(1408,'G7',2,1,177,1),(1409,'G8',2,1,177,1),(1410,'G9',2,1,177,1),(1411,'G10',2,1,177,1),(1412,'G11',2,1,177,1),(1413,'G12',2,1,177,1),(1414,'G13',2,1,177,1),(1415,'G14',2,1,177,1),(1416,'A1',2,1,176,1),(1417,'A2',2,1,176,1),(1418,'A3',2,1,176,1),(1419,'A4',2,1,176,1),(1420,'A5',2,1,176,1),(1421,'A6',2,1,176,1),(1422,'A7',2,1,176,1),(1423,'A8',2,1,176,1),(1424,'A9',2,1,176,1),(1425,'A10',2,1,176,1),(1426,'A11',2,1,176,1),(1427,'A12',2,1,176,1),(1428,'A13',2,1,176,1),(1429,'A14',2,1,176,1),(1430,'B1',2,1,176,1),(1431,'B2',2,1,176,1),(1432,'B3',2,1,176,1),(1433,'B4',2,1,176,1),(1434,'B5',2,1,176,1),(1435,'B6',2,1,176,1),(1436,'B7',2,1,176,1),(1437,'B8',2,1,176,1),(1438,'B9',2,1,176,1),(1439,'B10',2,1,176,1),(1440,'B11',2,1,176,1),(1441,'B12',2,1,176,1),(1442,'B13',2,1,176,1),(1443,'B14',2,1,176,1),(1444,'C1',2,1,176,1),(1445,'C2',2,1,176,1),(1446,'C3',2,1,176,1),(1447,'C4',2,1,176,1),(1448,'C5',2,1,176,1),(1449,'C6',2,1,176,1),(1450,'C7',2,1,176,1),(1451,'C8',2,1,176,1),(1452,'C9',2,1,176,1),(1453,'C10',2,1,176,1),(1454,'C11',2,1,176,1),(1455,'C12',2,1,176,1),(1456,'C13',2,1,176,1),(1457,'C14',2,1,176,1),(1458,'D1',2,1,176,1),(1459,'D2',2,1,176,1),(1460,'D3',2,1,176,1),(1461,'D4',2,1,176,1),(1462,'D5',2,1,176,1),(1463,'D6',2,1,176,1),(1464,'D7',2,1,176,1),(1465,'D8',2,1,176,1),(1466,'D9',2,1,176,1),(1467,'D10',2,1,176,1),(1468,'D11',2,1,176,1),(1469,'D12',2,1,176,1),(1470,'D13',2,1,176,1),(1471,'D14',2,1,176,1),(1472,'E1',2,1,176,1),(1473,'E2',2,1,176,1),(1474,'E3',2,1,176,1),(1475,'E4',2,1,176,1),(1476,'E5',2,1,176,1),(1477,'E6',2,1,176,1),(1478,'E7',2,1,176,1),(1479,'E8',2,1,176,1),(1480,'E9',2,1,176,1),(1481,'E10',2,1,176,1),(1482,'E11',2,1,176,1),(1483,'E12',2,1,176,1),(1484,'E13',2,1,176,1),(1485,'E14',2,1,176,1),(1486,'F1',2,1,176,1),(1487,'F2',2,1,176,1),(1488,'F3',2,1,176,1),(1489,'F4',2,1,176,1),(1490,'F5',2,1,176,1),(1491,'F6',2,1,176,1),(1492,'F7',2,1,176,1),(1493,'F8',2,1,176,1),(1494,'F9',2,1,176,1),(1495,'F10',2,1,176,1),(1496,'F11',2,1,176,1),(1497,'F12',2,1,176,1),(1498,'F13',2,1,176,1),(1499,'F14',2,1,176,1),(1500,'G1',2,1,176,1),(1501,'G2',2,1,176,1),(1502,'G3',2,1,176,1),(1503,'G4',2,1,176,1),(1504,'G5',2,1,176,1),(1505,'G6',2,1,176,1),(1506,'G7',2,1,176,1),(1507,'G8',2,1,176,1),(1508,'G9',2,1,176,1),(1509,'G10',2,1,176,1),(1510,'G11',2,1,176,1),(1511,'G12',2,1,176,1),(1512,'G13',2,1,176,1),(1513,'G14',2,1,176,1),(1514,'A1',2,1,5,1),(1515,'A2',2,1,5,1),(1516,'A3',2,1,5,1),(1517,'A4',2,1,5,1),(1518,'A5',2,1,5,1),(1519,'A6',2,1,5,1),(1520,'A7',2,1,5,1),(1521,'A8',2,1,5,1),(1522,'A9',2,1,5,1),(1523,'A10',2,1,5,1),(1524,'A11',2,1,5,1),(1525,'A12',2,1,5,1),(1526,'A13',2,1,5,1),(1527,'A14',2,1,5,1),(1528,'B1',2,1,5,1),(1529,'B2',2,1,5,1),(1530,'B3',2,1,5,1),(1531,'B4',2,1,5,1),(1532,'B5',2,1,5,1),(1533,'B6',2,1,5,1),(1534,'B7',2,1,5,1),(1535,'B8',2,1,5,1),(1536,'B9',2,1,5,1),(1537,'B10',2,1,5,1),(1538,'B11',2,1,5,1),(1539,'B12',2,1,5,1),(1540,'B13',2,1,5,1),(1541,'B14',2,1,5,1),(1542,'C1',2,1,5,1),(1543,'C2',2,1,5,1),(1544,'C3',2,1,5,1),(1545,'C4',2,1,5,1),(1546,'C5',2,1,5,1),(1547,'C6',2,1,5,1),(1548,'C7',2,1,5,1),(1549,'C8',2,1,5,1),(1550,'C9',2,1,5,1),(1551,'C10',2,1,5,1),(1552,'C11',2,1,5,1),(1553,'C12',2,1,5,1),(1554,'C13',2,1,5,1),(1555,'C14',2,1,5,1),(1556,'D1',2,1,5,1),(1557,'D2',2,1,5,1),(1558,'D3',2,1,5,1),(1559,'D4',2,1,5,1),(1560,'D5',2,1,5,1),(1561,'D6',2,1,5,1),(1562,'D7',2,1,5,1),(1563,'D8',2,1,5,1),(1564,'D9',2,1,5,1),(1565,'D10',2,1,5,1),(1566,'D11',2,1,5,1),(1567,'D12',2,1,5,1),(1568,'D13',2,1,5,1),(1569,'D14',2,1,5,1),(1570,'E1',2,1,5,1),(1571,'E2',2,1,5,1),(1572,'E3',2,1,5,1),(1573,'E4',2,1,5,1),(1574,'E5',2,1,5,1),(1575,'E6',2,1,5,1),(1576,'E7',2,1,5,1),(1577,'E8',2,1,5,1),(1578,'E9',2,1,5,1),(1579,'E10',2,1,5,1),(1580,'E11',2,1,5,1),(1581,'E12',2,1,5,1),(1582,'E13',2,1,5,1),(1583,'E14',2,1,5,1),(1584,'F1',2,1,5,1),(1585,'F2',2,1,5,1),(1586,'F3',2,1,5,1),(1587,'F4',2,1,5,1),(1588,'F5',2,1,5,1),(1589,'F6',2,1,5,1),(1590,'F7',2,1,5,1),(1591,'F8',2,1,5,1),(1592,'F9',2,1,5,1),(1593,'F10',2,1,5,1),(1594,'F11',2,1,5,1),(1595,'F12',2,1,5,1),(1596,'F13',2,1,5,1),(1597,'F14',2,1,5,1),(1598,'G1',2,1,5,1),(1599,'G2',2,1,5,1),(1600,'G3',2,1,5,1),(1601,'G4',2,1,5,1),(1602,'G5',2,1,5,1),(1603,'G6',2,1,5,1),(1604,'G7',2,1,5,1),(1605,'G8',2,1,5,1),(1606,'G9',2,1,5,1),(1607,'G10',2,1,5,1),(1608,'G11',2,1,5,1),(1609,'G12',2,1,5,1),(1610,'G13',2,1,5,1),(1611,'G14',2,1,5,1);
/*!40000 ALTER TABLE `seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show_room`
--

DROP TABLE IF EXISTS `show_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_room` (
  `id_show_room` int NOT NULL AUTO_INCREMENT,
  `name_show_room` varchar(255) DEFAULT NULL,
  `quantity_seat` int DEFAULT NULL,
  PRIMARY KEY (`id_show_room`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_room`
--

LOCK TABLES `show_room` WRITE;
/*!40000 ALTER TABLE `show_room` DISABLE KEYS */;
INSERT INTO `show_room` VALUES (1,'PC01',98),(2,'PC02',98),(3,'PC03',98),(4,'PC04',98),(5,'PC05',98),(6,'PC06',98),(7,'PC07',84),(8,'PC08',84),(9,'PC09',84),(10,'PC10',84),(11,'PC11',84),(12,'PC12',84);
/*!40000 ALTER TABLE `show_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show_time`
--

DROP TABLE IF EXISTS `show_time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_time` (
  `id_show_time` int NOT NULL AUTO_INCREMENT,
  `show_date` date DEFAULT NULL,
  `show_time` varchar(255) DEFAULT NULL,
  `id_film` int DEFAULT NULL,
  `id_show_room` int DEFAULT NULL,
  PRIMARY KEY (`id_show_time`),
  KEY `FKlyx98eu4e0fdlnkk4lovijw6r` (`id_film`),
  KEY `FK8uogp3169n6g9uvpoosbgfim7` (`id_show_room`)
) ENGINE=MyISAM AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_time`
--

LOCK TABLES `show_time` WRITE;
/*!40000 ALTER TABLE `show_time` DISABLE KEYS */;
INSERT INTO `show_time` VALUES (176,'2023-08-21','22:00',21,1),(177,'2024-09-06','16:00',12,6),(174,'2024-06-08','20:00',11,5),(178,'2024-08-08','17:00',13,1),(179,'2024-09-09','17:00',14,2),(180,'2024-09-09','16:00',15,3),(36,'2024-09-09','20:00',16,4),(10,'2024-06-09','22:00',10,4),(9,'2024-06-09','20:00',9,3),(8,'2024-06-09','15:00',8,2),(7,'2024-06-09','12:30',7,7),(6,'2024-06-09','10:05',6,6),(5,'2024-09-09','22:00',5,5),(4,'2024-08-08','20:00',4,4),(3,'2024-06-08','15:00',3,3),(2,'2024-06-08','12:30',2,2),(1,'2024-06-08','10:00',1,1);
/*!40000 ALTER TABLE `show_time` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `statis`
--

DROP TABLE IF EXISTS `statis`;
/*!50001 DROP VIEW IF EXISTS `statis`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `statis` AS SELECT 
 1 AS `namefilm`,
 1 AS `totalticketssold`,
 1 AS `totalrevenue`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `status_seat`
--

DROP TABLE IF EXISTS `status_seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status_seat` (
  `id_status_seat` int NOT NULL AUTO_INCREMENT,
  `name_status_seat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_status_seat`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status_seat`
--

LOCK TABLES `status_seat` WRITE;
/*!40000 ALTER TABLE `status_seat` DISABLE KEYS */;
INSERT INTO `status_seat` VALUES (1,'sell'),(2,'available'),(3,'unavailable');
/*!40000 ALTER TABLE `status_seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_management`
--

DROP TABLE IF EXISTS `table_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `table_management` (
  `id_ticket` int NOT NULL,
  `date_booking` varchar(255) DEFAULT NULL,
  `name_film` varchar(255) DEFAULT NULL,
  `price_after_discount` varchar(255) DEFAULT NULL,
  `status_ticket` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_ticket`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_management`
--

LOCK TABLES `table_management` WRITE;
/*!40000 ALTER TABLE `table_management` DISABLE KEYS */;
/*!40000 ALTER TABLE `table_management` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id_ticket` int NOT NULL AUTO_INCREMENT,
  `date_booking` date DEFAULT NULL,
  `id_qr` varchar(255) DEFAULT NULL,
  `is_delete` bit(1) DEFAULT NULL,
  `price_after_discount` double DEFAULT NULL,
  `status_ticket` bit(1) DEFAULT NULL,
  `id_customer` int DEFAULT NULL,
  `id_discount` int DEFAULT NULL,
  `id_employee` int DEFAULT NULL,
  `id_seat` int DEFAULT NULL,
  PRIMARY KEY (`id_ticket`),
  KEY `FK996h4t6iax2acas3vh1ysox3m` (`id_customer`),
  KEY `FK8cqy8tlccunv0tens8i52qqo5` (`id_discount`),
  KEY `FKcrjn2y5k9tku2sm67c93m0vta` (`id_employee`),
  KEY `FK6acg2rnspg9ha5yv8j89j83od` (`id_seat`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_customer`
--

DROP TABLE IF EXISTS `type_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_customer` (
  `id_type_customer` int NOT NULL AUTO_INCREMENT,
  `name_type_customer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_type_customer`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_customer`
--

LOCK TABLES `type_customer` WRITE;
/*!40000 ALTER TABLE `type_customer` DISABLE KEYS */;
INSERT INTO `type_customer` VALUES (1,'Kim cương'),(2,'Vàng'),(3,'Bạc');
/*!40000 ALTER TABLE `type_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_film`
--

DROP TABLE IF EXISTS `type_film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_film` (
  `id_type_film` int NOT NULL AUTO_INCREMENT,
  `name_type_film` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_type_film`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_film`
--

LOCK TABLES `type_film` WRITE;
/*!40000 ALTER TABLE `type_film` DISABLE KEYS */;
INSERT INTO `type_film` VALUES (1,'Pop'),(2,'Rock'),(3,'Rap'),(4,'R&B'),(5,'K-Pop'),(6,'Soul'),(7,'Jazz'),(8,'Blues'),(9,'Classical'),(10,'Electronic/Dance (EDM)'),(11,'Chữ tình'),(12,'Lãng mạn');
/*!40000 ALTER TABLE `type_film` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_seat`
--

DROP TABLE IF EXISTS `type_seat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_seat` (
  `id_type_seat` int NOT NULL AUTO_INCREMENT,
  `name_type_seat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_type_seat`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_seat`
--

LOCK TABLES `type_seat` WRITE;
/*!40000 ALTER TABLE `type_seat` DISABLE KEYS */;
INSERT INTO `type_seat` VALUES (1,'Normal'),(2,'VIP');
/*!40000 ALTER TABLE `type_seat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `account_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`account_id`,`role_id`),
  KEY `FKt7e7djp752sqn6w22i6ocqy6q` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (17,1),(18,3),(19,3),(20,1),(21,3),(22,1),(23,3);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `members`
--

/*!50001 DROP VIEW IF EXISTS `members`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `members` AS select `customer`.`id_customer` AS `memberid`,`customer`.`name_customer` AS `membername`,count(`ticket`.`id_ticket`) AS `totaltickets`,sum(`ticket`.`price_after_discount`) AS `totalrevenue`,`customer`.`point_customer` AS `loyaltypoints` from (`customer` join `ticket` on((`customer`.`id_customer` = `ticket`.`id_customer`))) group by `customer`.`id_customer` limit 100 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `statis`
--

/*!50001 DROP VIEW IF EXISTS `statis`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `statis` AS select `film`.`name_film` AS `namefilm`,count(`ticket`.`id_ticket`) AS `totalticketssold`,sum(`ticket`.`price_after_discount`) AS `totalrevenue` from (((`film` left join `show_time` on((`film`.`id_film` = `show_time`.`id_film`))) left join `seat` on((`show_time`.`id_show_time` = `seat`.`id_show_time`))) left join `ticket` on((`seat`.`id_seat` = `ticket`.`id_seat`))) group by `film`.`name_film` limit 100 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-14  3:45:52
