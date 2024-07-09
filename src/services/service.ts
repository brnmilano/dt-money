import axios from "axios";

/**
 * Cria uma instância do axios com a baseURL configurada para o servidor.
 */
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
