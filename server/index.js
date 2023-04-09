import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { error } from "console";
import { authRoutes } from "./routes/auth.js"
import { register } from "./controller/auth.js"
import { verifyToken } from "./middleware/auth.js";
