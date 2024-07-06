const updateEmail = async (email: string, id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/admin?id=${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      }
    );
    if (response.status === 400) {
      return { success: false, error: "Email already in use." };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong." };
  }
};

export default updateEmail;
