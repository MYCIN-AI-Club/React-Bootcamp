function ExpenseItem(props) {
  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{props.item.price}</td>
      <td>{props.item.date.toISOString().slice(0, 10)}</td>
    </tr>
  );
}

export default ExpenseItem;
