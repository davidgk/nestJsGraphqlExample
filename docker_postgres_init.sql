CREATE USER docker WITH PASSWORD 'password' CREATEDB;

CREATE DATABASE exercise_api
WITH OWNER = docker
CONNECTION LIMIT = -1;

CREATE DATABASE exercise_api_test
WITH OWNER = docker
CONNECTION LIMIT = -1;

