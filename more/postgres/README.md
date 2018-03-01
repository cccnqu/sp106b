# PostgreSQL

## 使用紀錄

* [Digital Ocean: How To Install and Use PostgreSQL on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04) (讚!)
* [Digital Ocean : How To Create, Remove, & Manage Tables in PostgreSQL on a Cloud Server](https://www.digitalocean.com/community/tutorials/how-to-create-remove-manage-tables-in-postgresql-on-a-cloud-server)
* [PostgreSQL新手入门](http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html) (讚!)

```
postgres@ubuntu-512mb-sgp1-01:~$ exit
logout
root@ubuntu-512mb-sgp1-01:~# sudo -u postgres psql postgres
could not change directory to "/root": Permission denied
psql (9.5.11)
Type "help" for help.

postgres=# \password postgres
Enter new password:
Enter it again:

```

創建資料庫

```
root@ubuntu-512mb-sgp1-01:~# sudo adduser dbuser
Adding user `dbuser' ...
Adding new group `dbuser' (1001) ...
Adding new user `dbuser' (1001) with group `dbuser' ...
Creating home directory `/home/dbuser' ...
Copying files from `/etc/skel' ...
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for dbuser
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []:
        Home Phone []:
        Other []:
Is the information correct? [Y/n]
root@ubuntu-512mb-sgp1-01:~# sudo su - postgres
postgres@ubuntu-512mb-sgp1-01:~$ psql
psql (9.5.11)
Type "help" for help.

postgres=# \password postgres
Enter new password:
Enter it again:
...
postgres=# CREATE USER dbuser WITH PASSWORD 'xxxxxxx'; // 注意，每個指令最後一定要加分號！否則指令不會被執行。
CREATE ROLE
postgres=# CREATE DATABASE exampledb OWNER dbuser;
CREATE DATABASE
postgres=# GRANT ALL PRIVILEGES ON DATABASE exampledb to dbuser;
GRANT
postgres=# ^C
postgres=# \q
postgres@ubuntu-512mb-sgp1-01:~$ psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432
Password for user dbuser:
psql (9.5.11)
SSL connection (protocol: TLSv1.2, cipher: ECDHE-RSA-AES256-GCM-SHA384, bits: 256, compression: off)
Type "help" for help.

exampledb=> \?
exampledb=> CREATE TABLE user_tbl(name VARCHAR(20), signup_date DATE);
CREATE TABLE
exampledb=> INSERT INTO user_tbl(name, signup_date) VALUES('张三', '2013-12-22');
INSERT 0 1
exampledb=> SELECT * FROM user_tbl;
 name | signup_date
------+-------------
 张三 | 2013-12-22
(1 row)

exampledb=> UPDATE user_tbl set name = '李四' WHERE name = '张三';
UPDATE 1
exampledb=> DELETE FROM user_tbl WHERE name = '李四' ;
DELETE 1
exampledb=> ALTER TABLE user_tbl ADD email VARCHAR(40);
ALTER TABLE
exampledb=> ALTER TABLE user_tbl ALTER COLUMN signup_date SET NOT NULL;
ALTER TABLE
exampledb=> ALTER TABLE user_tbl RENAME COLUMN signup_date TO signup;
ALTER TABLE
exampledb=> ALTER TABLE user_tbl DROP COLUMN email;
ALTER TABLE
exampledb=> ALTER TABLE user_tbl RENAME TO backup_tbl;
ALTER TABLE
exampledb=> DROP TABLE IF EXISTS backup_tbl;
DROP TABLE

```

## 參考文獻


* [SQLite vs MySQL vs PostgreSQL: A Comparison Of Relational Database Management Systems](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)
  * Postgres 明顯比 MySQL 強大，包含型態很多，像地理位置 point、多邊形、IP、text, serial, tsquery (text search query), uuid, xml, json.
  * When Not To Use MySQL
  * SQL compliance: Since MySQL does not [try to] implement the full SQL standard, this tool is not completely SQL compliant. If you might need integration with such RDBMSs, switching from MySQL will not be easy.
  * Concurrency: Even though MySQL and some storage engines perform really well with read operations, concurrent read-writes can be problematic.
  * Lack of features: Again, depending on the choice of the database-engine, MySQL can lack certain features, such as the full-text search.
  * PostgreSQL 的缺點是：較難學習、讀取速度較慢、學習資源較少。
* [PostgreSQL 与 MySQL 相比，优势何在？](https://www.zhihu.com/question/20010554)
  * PG 多年来在 GIS 领域处于优势地位，因为它有丰富的几何类型，实际上不止几何类型，PG有大量字典、数组、bitmap 等数据类型，相比之下mysql就差很多，instagram就是因为PG的空间数据库扩展POSTGIS远远强于MYSQL的my spatial而采用PGSQL的。
  * postgres的多进程架构提高了系统的稳定性，但是也决定了它不适合在Windows上使用，
* [最新！最全！2016年全球最強資料庫大盤點](https://www.readhouse.net/articles/178565670/)
  * [DB-Engines 2 月全球資料庫排名：MongoDB 爆發](https://itw01.com/LYTJEUI.html)
* [Understanding SQL And NoSQL Databases And Different Database Models](https://www.digitalocean.com/community/tutorials/understanding-sql-and-nosql-databases-and-different-database-models)
* [Digital Ocean: How To Install and Use PostgreSQL on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04) (讚!)
* [在Ubuntu安裝PostgreSQL](http://cat-son.blogspot.tw/2012/11/ubuntupostgresql.html#sthash.ZdatNNWj.dpbs)
* [在Ubuntu上安裝開源資料庫PostgreSQL 9.4](https://read01.com/zh-tw/2g0Dx.html#.WpOyb6iWY2w)
* [如何安装和使用PostgreSQL在Ubuntu 16.04](https://www.howtoing.com/how-to-install-and-use-postgresql-on-ubuntu-16-04)
* [postgresql install on ubuntu](http://jpsix.pixnet.net/blog/post/31065079-%5Bpostgresql%5D-install-on-ubuntu)
