export function setLocal(data) {
  try {
    localStorage.setItem("data", JSON.stringify(data));
    return true;
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
    return false;
  }
}
