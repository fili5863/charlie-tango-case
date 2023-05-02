// A single item on the DashboardList
export function BuyerSeller(props) {
  const createdAt = new Date(props.buyerSeller.created_at);
  const formattedDate = `${createdAt.getDate()}-${
    createdAt.getMonth() + 1
  }-${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

  return (
    <section>
      <p>Name: {props.buyerSeller.name}</p>
      <p>Email: {props.buyerSeller.email}</p>
      <p>Phone: {props.buyerSeller.phone}</p>
      <p>Created at: {formattedDate}</p>
      <button onClick={() => props.sellerContacted(props.buyerSeller)}>
        Contacted
      </button>
    </section>
  );
}
