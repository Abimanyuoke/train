import { Request, Response } from "express";
import { BASE_URL, SECRET } from "../global";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../lib/prisma";
// import { PrismaClient } from '../generated/prisma/client'
import { sign } from "jsonwebtoken";
import md5 from "md5";
import fs from "fs"

// const prisma = new PrismaClient();


export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const { search } = request.query;

        const allUser = await prisma.user.findMany({
            where: {
                name: {
                    contains: search?.toString() || "",
                }
            }
        })

        return response.status(200).json({
            status: true,
            data: allUser
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `An error occurred while fetching users. ${error}`,
        });
    }
}

export const getUserById = async (request: Request, response: Response) => {
    try {
        const { id } = request.body.user;

        if (!id) {
            return response.status(400).json({
                status: false,
                message: "User ist nicht gefunden",
            });
        }

        const allUser = await prisma.user.findFirst({
            where: { id: Number(id) }
        })

        return response.status(200).json({
            status: true,
            data: allUser,
            message: "user has been fetched successfully",
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `An error occurred while fetching user. ${error}`,
        });
    }
}

export const createUser = async (request: Request, response: Response) => {
    try {
        const { name, email, password, role, phone, nik, grade, address } = request.body;
        const uuid = uuidv4();

        let filename = "";
        if (request.file) {
            filename = request.file.filename;
        }

        const newUser = await prisma.user.create({
            data: {
                uuid, name, email, password: md5(password), role, phone, nik, grade, address,
                profile_picture: filename ? `${BASE_URL}/public/${filename}` : "",
            }
        })

        return response.status(200).json({
            status: true,
            data: newUser,
            message: "user has been created successfully",
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `An error occurred while creating user. ${error}`,
        });
    }
}

export const updateUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { name, email, password, role, phone, nik, grade, address } = request.body;

        const findUser = await prisma.user.findFirst({
            where: { id: Number(id) }
        });
        if (!findUser) {
            return response.status(404).json({
                status: false,
                message: "User not found",
            });
        }

        let filename = findUser.profile_picture;
        if (request.file) {
            filename = request.file.filename;
            let path = `${BASE_URL}/../public/profile_picture/${findUser.profile_picture}`;
            let exists = fs.existsSync(path);
            if (exists && findUser.profile_picture !== ``) fs.unlinkSync(path);
        }

        const updatedUser = await prisma.user.update({
            data: {
                name: name || findUser.name,
                email: email || findUser.email,
                password: password ? md5(password) : findUser.password,
                role: role || findUser.role,
                phone: phone || findUser.phone,
                nik: nik || findUser.nik,
                grade: grade || findUser.grade,
                address: address || findUser.address,
                profile_picture: filename ? `${BASE_URL}/public/${filename}` : findUser.profile_picture,
            },
            where: { id: Number(id) }

        })

        return response.status(200).json({
            status: true,
            data: updatedUser,
            message: "user has been updated successfully",
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `An error occurred while updating user. ${error}`,
        });
    }
}

export const deleteUser = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const findUser = await prisma.user.findFirst({
            where: { id: Number(id) }
        });
        if (!findUser) {
            return response.status(404).json({
                status: false,
                message: "User not found",
            });
        }
        let path = `${BASE_URL}/../public/profile_picture/${findUser.profile_picture}`;
        let exists = fs.existsSync(path);
        if (exists && findUser.profile_picture !== ``) fs.unlinkSync(path);

        const deleteUser = await prisma.user.delete({
            where: { id: Number(id) }
        })

        return response.status(200).json({
            status: true,
            data: deleteUser,
            message: "user has been deleted successfully",
        });
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: `An error occurred while deleting user. ${error}`,
        });
    }
}

export const authentication = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body /** get requested data (data has been sent from request) */

        /** find a valid admin based on username and password */
        const findUser = await prisma.user.findFirst({
            where: { email, password: md5(password) }
        })

        /** check is admin exists */
        if (!findUser) return response
            .status(200)
            .json({ status: false, logged: false, message: `Email or password is invalid` })

        let data = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            role: findUser.role,
            nik: findUser.nik,
            phone: findUser.phone,
            grade: findUser.grade,
            address: findUser.address,
            profile_picture: findUser.profile_picture,
        }

        /** define payload to generate token */
        let payload = JSON.stringify(data)

        /** generate token */
        let token = sign(payload, SECRET || "joss")

        return response
            .status(200)
            .json({ status: true, logged: true, data: data, message: `Login Success`, token })
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}