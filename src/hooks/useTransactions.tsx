/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../services/service";
import { createContext, useContext } from "use-context-selector";

interface useTransactionsProps {
  children: ReactNode;
}

interface TransactionProps {
  id: number;
  description: string;
  type: string;
  price: number;
  category: string;
  createdAt: string;
}

interface Transaction {
  id: number;
  description: string;
  type: string;
  category: string;
  price: number;
  createdAt: string;
}

interface NewTransactionProps {
  type: string;
  createdAt: Date;
  description: string;
  price: number;
  category: string;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  setTransactions: Dispatch<SetStateAction<TransactionProps[]>>;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: NewTransactionProps) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionsContextData);

function TransactionsProvider({ children }: useTransactionsProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  /**
   * Busca transações do servidor e filtra com base em uma consulta, se fornecida.
   *
   * @param query Uma string opcional usada para filtrar as transações. Pode ser parte da descrição,
   * categoria, tipo ou preço da transação. Não é sensível a maiúsculas e minúsculas.
   */
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get<Transaction[]>("/transactions");

    const data = response.data as TransactionProps[];

    let filteredData = data;

    if (query) {
      const lowerCaseQuery = query.toLowerCase();

      filteredData = data.filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(lowerCaseQuery) ||
          transaction.category.toLowerCase().includes(lowerCaseQuery) ||
          transaction.type.toLowerCase().includes(lowerCaseQuery) ||
          transaction.price.toString().includes(lowerCaseQuery)
      );
    }

    setTransactions(filteredData);
  }, []);

  /**
   * Cria uma nova transação no servidor e atualiza o estado transactions.
   *
   * @param data Objeto contendo as  propriedades da nova transação a ser criada.
   */
  const createTransaction = useCallback(async (data: NewTransactionProps) => {
    const response = await api.post("/transactions", data);

    setTransactions((state) => [...state, response.data]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  return useContext(TransactionContext);
}

export { useTransaction, TransactionsProvider };
