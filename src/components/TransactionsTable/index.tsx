import { useEffect, useState } from "react";
import { Container } from "./styles";

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(response => setTransactions(response))
    },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>02/20/2021</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">-$1.100</td>
            <td>House</td>
            <td>02/17/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
