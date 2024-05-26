-- Drop existing tables if they exist to avoid conflicts
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS venues;

-- Create the venues table
CREATE TABLE venues (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION
);

-- Create the events table
CREATE TABLE events (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  venue_id VARCHAR(255) REFERENCES venues(id),
  genre VARCHAR(100),
  image_url TEXT,
  ticket_url TEXT
);

-- Create the users table
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL, -- User password (hashed)
  favorite_genre VARCHAR(255)[],
  saved_events VARCHAR(255)[]
);
