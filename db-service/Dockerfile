FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE SAMPLE
ENV MYSQL_USER carlitosdroid
ENV MYSQL_PASSWORD android

ADD setup.sql /docker-entrypoint-initdb.d

EXPOSE 3306