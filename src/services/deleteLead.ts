const deleteLead = async (param: string, id: string) => {
  const response = await fetch(`/api/deleteLead?param=${param}&id=${id}`);
  const data = await response.json();
  return data;
};

export default deleteLead;
