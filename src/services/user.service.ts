import getConnection from "../config/db";

const getAllUsers = async () => {
  const connection = await getConnection();

  try {
    const [result] = await connection.query("SELECT * FROM `users`");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
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
  const connection = await getConnection();

  try {
    const sql =
      "INSERT INTO `users`(`name`, `email`, `address`) VALUES  (?,?,?)";
    const values = [name, email, address];

    const [result] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const handleDeleteUser = async (id: string) => {
  const connection = await getConnection();

  try {
    const sql = "DELETE FROM `users` WHERE `id` = ? LIMIT 1";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (error) {
    console.log(error);

    return [];
  }
};

export { getAllUsers, handleCreateUser, handleDeleteUser };
