const deleteItem = async (param: string, id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/${param}?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return { success: false, error: "Something went wrong" };
    }

    await response.json();
    return { success: true };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export default deleteItem;
