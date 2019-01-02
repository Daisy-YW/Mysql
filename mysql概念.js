/* 
1. mysql常用术语
    1) 数据库 database
    2) 表 table
    3) 行 row 和 列 column
    4) 记录 record  一个数据行就是一条记录
    5) 字段(field)  每个列就是一个字段
    
    备注: 结构化查询语言SQL, 操作关系数据库的通用语言,用于执行数据的检索和其它操作

2. mysql安装
    1) 下载phpStudy集成工具
    2) 下一步 安装 点击启动(绿色代表成功)

    启动会同时启动两个东西:
        apache 这是集成的一个服务器 端口是80(文件在phpStudy文件夹中)
        mysql  这是数据库    端口号为33006

        登录网页版mysql    localhost/phpMyAdmin
        账号和密码统一为root
        网速太卡,不推荐使用

3. 连接数据库
    链接mysql命令:   
        语法: msql -h主机名 -u用户名 -p密码
        mysql -hlocallhost -uroot -proot

        测试是否链接成功(注意:此处必须添加分号,否则不生效)
            show databases;    

        说明: 需要配置环境变量, 把路径设为环境变量
            D:\phpStudy\PHPTutorial\MySQL\bin

4. 数据库的操作(***)
    1) 查看数据库列表
        show databases;
    
    2) 创建数据库
        create database 数据库名称;
        例如: create database web;
    
    3) 切换(使用数据库)
        use 数据库名称;
        例如: use web;

    4) 删除数据库
        drop database 数据库名称;
        例如: drop database web;

    5) 修改数据库的选项(一般修改编码)
        alter database 数据库名字 修改内容
        例子: alter database web charset=gbk;

    补充: 查看创建数据库的一些信息

    6) show create database 数据库的名字
        例子: show create database web;
    
5. 表的基本操作(******)
    1) 创建表
        语法:
            create table 表名(
                字段名称 数据类型和长度 属性修饰(可以不要),
                字段名2  数据类型和长度 属性修饰(可以不要)
            )[表选项];
        例子:
            create table student(
                name varchar(50),
                age int,
                sex varchar(10)
            );
        参数说明:
            varchar  ---  字符
            int      ---  证书
            primary key 主键
            auto_increaseement  自动增长
            
    2) 查看当前数据库有哪些表
                    
    3) 查看表结构,看看里面有哪些字段
        desc 表名
        
    4) 删除表
        drop table 表名

补充: 
    5) 修改表:
        alter table 表名=新值;
        例子: alter table student charset=utf-8;  //将学生表的编码方式改为utf-8

    6) 修改表字段:
        alert table 表名 change 老子段 新字段(类型)
        例子:
            alert table student change nameXXX name varchar(32)
    
    7) modify 只能修改类型
         alert table 表名 modify 列名 新类型;
        例子:
            alert table atudent modify sex varchar(50);

    6) 查看建表的信息:
        show create table 表名;
        

6.数据类型:
    1) Int/Integer -> 短整型  int(2)最高99,可设置数字长度

    2) bigint -> 长整型

    3) float  -> 单精度
        例子:
            money float(5,2)  money存储数据的时候,整数与小数加起来总共是5位, 小数占2位------>最大数是999.99
        在以后开发中,float与double都是用的比较少的,因为它精确度不高,以后使用小数,推荐使用decimal

    4) decimal -> 金融数据
        例子: 
            999.99 ===> decimal(3,2)

    5) char -> 不可变字符串(定长字符串 0-255字节)
        例子: 
            char(5) 如果值输入1个字的时候,剩余的空字符会自动别填充

    6) varchar  -> 可变字符串(变长字符串 0-65535字节)
        例子: 
            varchar(5)   存入几个字符占用几个字符,最大5个字符

    7)Bit -> 布尔值 (取值0和1)

    //日期类型
    8) DATETiME -> 年月日,时分秒

    9) DATE (年月日)

    10) TIMESTAMP(时间戳--13位,基本不使用)

    11) YEAR  (年)
注意:
    时间的值,是使用单引号

    12)BLOB -> 用于存储二进制文件
        电影/图片是通过二进制进行存储的,以流的方式存入,并以流的方式读取

    13) LONGBLOB -> 0-4G


7. navicat创建表(******)
    1) 查询书写命令行
        使用navicat中的查询 -> 新建查询 -> 将sql命令书写在框中-> 选中sql命令行 -> shift+ctrl+R执行sql语句 /右击运行选中
    
    2) 表命令运行
        表 -> 新建表 -> 名(字段) -> 设置字符串类型 ->点击保存 -> 设置表名 ->ok


8.约束
    如果没有指定约束, 默认值都是为null
    1) 非空约束
        例子:
            name varchar(50) not null

    2) 唯一约束(唯一的值)
        例子:
            sex int unique

    3) 主键约束(非空约束和唯一约束的综合体)
        例子:
            id int primary key   (申明id为主键)
        自然主键:  主键有业务意义,如身份证等
        代理主键:  没有任何意义
        
    4) 默认值 --- default
        例子:
            email varchar(32) default '12@qq.com'
            默认值是'12@qq.com'



9. 查询
    1) 查询的语法结构
        select *,(列1,列2..) from 表

    2) 查询所有货品信息
        -- 使用通配符的方式
        select * from product;

        --使用具体的列的当时
        select id,product_name,... from product;
    
    3) 查询货品ID 名称
        select id,product_name from product;

    4) 查询供应商信息
        select supplier from product;

        -- 取掉重复语句 distinct
        select distinct supplier from product

10. 拼接函数 concat
    concat(str1,str2,str3...)
        例子:  查询结果为---XXX商品的零售价为XXX
            select concat(product_name,"商品的零售价为:",sale_price) from product;
            product_name商品的零售价为: sale_price

11. 数据查询-数学运算
    对number型的数据可以使用+-/*进行操作
        例子:
        查询所有的货品id,名称和批发价(批发价=卖价*折扣)
            select id AS 编号,product_name AS 产品名,sale_price*cutoff AS 批发价 from  product; 

        查询所有的货品id,名称和各进50个的成本价
            select id,product_name,cost_price*50 from product;

        查询所有货品id,名称,各进50个,并且每个运费1元的成本
            select id,product_name,(cost_price+1)*50 from product

12. 别名 AS XXX,可以给任意列设置



*/