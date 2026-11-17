import "dotenv/config";
import express from "express";
import { MongoClient } from "mongodb";

const app=express();
const port=process.env.PORT ||3001;

const uri = process.env.MONGO_URI;
//new MongoClient instance using the connection string

const client=new MongoClient(uri);
//testing the databse connection

