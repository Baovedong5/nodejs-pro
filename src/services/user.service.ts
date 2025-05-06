import { prisma } from "config/client";
import getConnection from "../config/db";

const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const handleCreateUser = async ({
  name,
  email,
  address,
}: {
  name: string;
  email: string;
  address: string;
}) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      address,
    },
  });

  return user;
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();

  try {
    const sql = "DELETE FROM `user` WHERE `id` = ? LIMIT 1";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export { getAllUsers, handleCreateUser, handleDeleteUser };
