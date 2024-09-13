import express from "express";
import pkg from "jsonwebtoken";
import dotenv from "dotenv"
const  { sign } = pkg;

dotenv.config()

export const GenerateToken = ({data, expiresIn}) =>{
  return sign({result: data}, process.env.SECTRET_KEY, {expiresIn: expiresIn})
}
