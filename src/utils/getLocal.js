export function getLocal(){
    try{
        const data = localStorage.getItem("data");
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
        console.error("Error al obtener datos de localStorage:", error);
        return null;
    }
}