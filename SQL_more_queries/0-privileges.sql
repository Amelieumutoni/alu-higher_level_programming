-- A  script that lists all privileges of the MySQL users user_0d_1 and user_0d_2
SELECT USER, HOST, GRANTEE, GRANTEETYPE, TABLE_CATALOG, PRIVILEGE_TYPE, IS_GRANTABLE
FROM INFORMATION_SCHEMA.USER_PRIVILEGES
WHERE USER IN ('user_0d_1', 'user_0d_2') AND HOST = 'localhost';
