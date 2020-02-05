import React from 'react'
import { Table } from 'reactstrap'
import { Cat } from './cat.interface'

interface Props {
  cats: Cat[]
}

const CatsTable = (props: Props) => (
  <Table hover responsive>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Breed</th>
      </tr>
    </thead>
    <tbody>
      {props.cats.length > 0 ? (
        props.cats.map(cat => (
          <tr key={cat._id}>
            <td>{cat._id}</td>
            <td>{cat.name}</td>
            <td>{cat.age}</td>
            <td>{cat.breed}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No cats</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default CatsTable