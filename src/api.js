export const randomUser = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const { results } = await res.json();
    let picture = results.map((item) => item.picture.large).join("");
    let name = results.map((item) => item.name.first).join("");
    return picture;
  } catch (error) {
    throw error;
  }
};
