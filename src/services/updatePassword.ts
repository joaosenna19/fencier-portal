const updatePassword = async (
  oldPassword: string,
  password: string,
  id: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/admin/update-password?id=${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oldPassword, password }),
        credentials: "include",
      }
    );
    if (response.status === 400 || response.status === 401) {
      return { success: false, error: "Invalid current password provided." };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong." };
  }
};

export default updatePassword;
